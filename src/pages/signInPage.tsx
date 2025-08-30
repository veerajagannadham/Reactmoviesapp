import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { signIn } from "../api/aws-api";
import { SignInFormData } from "../types/interfaces";
import { SxProps, Theme } from '@mui/material';
import { useUser } from "../contexts/userContext";

const styles: Record<string, SxProps<Theme>> = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  },
  paper: {
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  submitButton: {
    marginTop: "1rem",
    padding: "12px",
    fontWeight: "bold",
  },
};

const SignInPage: React.FC = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useUser();
    const [formData, setFormData] = useState<SignInFormData>({
      username: "",  
      password: "",
    });
    const [error, setError] = useState<string | null>(null);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      
      try {
        const resp  = await signIn(formData);
        console.log(resp.token );
        setIsLoggedIn(true);
        navigate("/");
      } catch (err) {
        setError("Invalid username or password. Please try again.");
      }
    };
  
    return (
      <Box sx={styles.root}>
        <Paper sx={styles.paper} elevation={3}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Sign In
          </Typography>
          
          {error && (
            <Typography color="error" align="center" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
  
          <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
            <TextField
              label="Username"
              name="username"
              value={formData.username} 
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={styles.submitButton}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  };
  
  export default SignInPage;