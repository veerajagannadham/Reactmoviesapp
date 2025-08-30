import React from "react";
import Grid from "@mui/material/Grid";
import { ActorProps } from "../../types/interfaces";
import ActorCard from "../actorCard";

interface ActorListProps {
    actors: ActorProps[];
}

const ActorList: React.FC<ActorListProps> = (props) => {
    const { actors } = props;

    return (
        <Grid container spacing={2}>
            {actors.map((actor) => (
                <Grid item key={actor.id} xs={12} sm={6} md={4} lg={3}>
                    <ActorCard actor={actor} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ActorList;