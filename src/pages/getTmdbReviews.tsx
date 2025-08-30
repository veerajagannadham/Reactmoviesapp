import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  CircularProgress,
} from "@mui/material";
import { getFrontendReview } from "../api/aws-api"; 


interface Review {
  ReviewId?: string;
  Name: string;
  Writer: string;
  Review: string;
  Rating: string;
  Photo: string;
}

const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getFrontendReview();
        setReviews(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load reviews.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6">Loading reviews...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Movie Reviews
      </Typography>
      <Grid container spacing={4}>
        {reviews.map((review) => (
          <Grid item key={review.ReviewId || review.Name} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${review.Photo}`} // Construct full TMDB image URL
                alt={review.Name}
                sx={{ height: 300 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {review.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Author: </strong> {review.Writer}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Review: </strong>{review.Review}
                </Typography>
                <Typography variant="body2">
                  <strong>Rating:</strong> {review.Rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReviewsPage;