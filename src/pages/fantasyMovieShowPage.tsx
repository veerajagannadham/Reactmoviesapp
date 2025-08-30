import React, { useContext } from "react";
import { Box, Typography, Divider, Chip, Stack, Card, CardContent, CardHeader, Avatar } from "@mui/material";
import { FantasyMoviesContext } from "../contexts/fantasyMoviesContext";
import { FantasyMovie } from "../types/interfaces";
import MovieIcon from "@mui/icons-material/Movie";

export const FantasyMovieShowPage: React.FC = () => {
  const { fantasyMovies } = useContext(FantasyMoviesContext);

  if (fantasyMovies.length === 0) {
    return (
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary">
          No fantasy movies added yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4, px: 2 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: "bold" }}>
        Fantasy Movies Collection
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Stack spacing={4}>
        {fantasyMovies.map((movie: FantasyMovie, index: number) => (
          <Card key={index} sx={{ boxShadow: 4, borderRadius: 3 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <MovieIcon />
                </Avatar>
              }
              title={
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {movie.title}
                </Typography>
              }
              subheader={`Release Date: ${movie.releaseDate}`}
            />
            <CardContent>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {movie.overview}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ my: 2 }}>
                <Chip label={`Genre: ${movie.genre}`} color="primary" />
                <Chip label={`Run Time: ${movie.runTime} min`} color="secondary" />
                <Chip label={`Production: ${movie.productionCompanies}`} color="success" />
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" gutterBottom>
                Cast
              </Typography>
              {movie.cast.length > 0 ? (
                movie.cast.map((member, i) => (
                  <Box key={i} sx={{ ml: 2, mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {member.name} as {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No cast members added.
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default FantasyMovieShowPage;