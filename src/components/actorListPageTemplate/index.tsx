import React from "react";
import Typography from "@mui/material/Typography";
import { ActorListTemplateProps } from "../../types/interfaces";
import ActorList from "../actorList";

const ActorListPageTemplate: React.FC<ActorListTemplateProps> = (props) => {
    const { title, actors } = props;

    return (
        <>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                {title}
            </Typography>
            <ActorList actors={actors} />
        </>
    );
};

export default ActorListPageTemplate;