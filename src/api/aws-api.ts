import { SignInFormData, SignInResults } from "../types/interfaces";

export const signIn = async (
  credentials: SignInFormData
): Promise<{ token: string }> => {
  try {
    const response = await fetch(
      "https://kxynk5zogi.execute-api.eu-west-1.amazonaws.com/prod/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Sign-in failed");
    }

    const data: SignInResults = await response.json();
    localStorage.setItem("authToken", data.token);

    return data;
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
};

export const addReviewFrontend = async (review: unknown) => {
  try {
    console.log("Sending review to API:", review); // Debugging log
    const response = await fetch(
      "https://c9w6drgg97.execute-api.eu-west-1.amazonaws.com/prod/frontendreviews",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to post review. Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Review successfully posted:", result);
    return result;
  } catch (error) {
    console.error("Error posting review:", error);
    throw error;
  }
};

export const getFrontendReview = async () => {
  try {
    const response = await fetch(
      "https://c9w6drgg97.execute-api.eu-west-1.amazonaws.com/prod/frontendreviews",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews. Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Fetched reviews:", result);
    return result.data; 
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
