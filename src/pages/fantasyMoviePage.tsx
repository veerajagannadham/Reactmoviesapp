import React, { useState, useContext } from "react";
import { Box, TextField, Button, Typography, Divider, Stack } from "@mui/material";
import { FantasyMoviesContext } from "../contexts/fantasyMoviesContext";
import { CastMember, FantasyMovie } from "../types/interfaces";

const FantasyMoviePage: React.FC = () => {
  const { fantasyMovies, addFantasyMovie } = useContext(FantasyMoviesContext);

  const [movie, setMovie] = useState<Omit<FantasyMovie, "cast">>({
    title: "",
    overview: "",
    genre: "",
    releaseDate: "",
    runTime: 0,
    productionCompanies: "",
  });

  const [cast, setCast] = useState<CastMember[]>([
    { name: "", role: "", description: "" },
  ]);

  const handleMovieChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMovie((prev) => ({ ...prev, [name]: name === "runTime" ? parseInt(value) : value }));
  };

  const handleCastChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedCast = [...cast];
    updatedCast[index] = { ...updatedCast[index], [name]: value };
    setCast(updatedCast);
  };

  const addCastMember = () => {
    setCast([...cast, { name: "", role: "", description: "" }]);
  };

  const removeCastMember = (index: number) => {
    const updatedCast = [...cast];
    updatedCast.splice(index, 1);
    setCast(updatedCast);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMovie: FantasyMovie = { ...movie, cast };
    addFantasyMovie(fullMovie);
    console.log(fullMovie);
    setMovie({
      title: "",
      overview: "",
      genre: "",
      releaseDate: "",
      runTime: 0,
      productionCompanies: "",
    });
    setCast([{ name: "", role: "", description: "" }]);
    console.log(fantasyMovies);
    
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
      <Typography variant="h4" gutterBottom>
        Add a Fantasy Movie
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Title"
          name="title"
          value={movie.title}
          onChange={handleMovieChange}
          required
          fullWidth
        />
        <TextField
          label="Overview"
          name="overview"
          value={movie.overview}
          onChange={handleMovieChange}
          required
          multiline
          rows={3}
          fullWidth
        />
        <TextField
          label="Genre"
          name="genre"
          value={movie.genre}
          onChange={handleMovieChange}
          required
          fullWidth
        />
        <TextField
          label="Release Date"
          name="releaseDate"
          type="date"
          value={movie.releaseDate}
          onChange={handleMovieChange}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />
        <TextField
          label="Run Time (minutes)"
          name="runTime"
          type="number"
          value={movie.runTime}
          onChange={handleMovieChange}
          required
          fullWidth
        />
        <TextField
          label="Production Companies"
          name="productionCompanies"
          value={movie.productionCompanies}
          onChange={handleMovieChange}
          required
          fullWidth
        />
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        Cast Members
      </Typography>

      {cast.map((member, index) => (
        <Box key={index} sx={{ mb: 2, p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
          <Stack spacing={2}>
            <TextField
              label="Name"
              name="name"
              value={member.name}
              onChange={(e) => handleCastChange(index, e)}
              required
              fullWidth
            />
            <TextField
              label="Role"
              name="role"
              value={member.role}
              onChange={(e) => handleCastChange(index, e)}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={member.description}
              onChange={(e) => handleCastChange(index, e)}
              required
              multiline
              rows={2}
              fullWidth
            />
            {cast.length > 1 && (
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeCastMember(index)}
              >
                Remove Cast Member
              </Button>
            )}
          </Stack>
        </Box>
      ))}

      <Button variant="contained" onClick={addCastMember} sx={{ mb: 3 }}>
        Add Another Cast Member
      </Button>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit Movie
      </Button>
    </Box>
  );
};

export default FantasyMoviePage;
