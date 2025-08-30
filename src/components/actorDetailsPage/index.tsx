import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import CakeIcon from "@mui/icons-material/Cake";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { ActorDetailsProps } from "../../types/interfaces";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
};

const ActorDetails: React.FC<ActorDetailsProps> = (actor) => {
    return (
        <>
            <Typography variant="h5" component="h3">
                Biography
            </Typography>

            <Typography variant="h6" component="p">
                {actor.biography || "No biography available."}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Also Known As" sx={styles.chipLabel} color="primary" />
                </li>
                {actor.also_known_as.map((name) => (
                    <li key={name}>
                        <Chip label={name} />
                    </li>
                ))}
            </Paper>
            
            <Paper component="ul" sx={styles.chipSet}>
                <Chip icon={<CakeIcon />} label={`Born: ${actor.birthday}`} />
                {actor.deathday && (
                    <Chip icon={<CakeIcon />} label={`Died: ${actor.deathday}`} />
                )}
                <Chip
                    icon={<StarRate />}
                    label={`Popularity: ${actor.popularity.toFixed(1)}`}
                />
                <Chip label={`From: ${actor.place_of_birth}`} />
            </Paper>
        </>
    );
};

export default ActorDetails;