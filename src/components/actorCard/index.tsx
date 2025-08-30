import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import AddToActorFavouritesIcon from "../cardIcons/addToActorFavourites";
import { ActorProps } from "../../types/interfaces";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png';

const styles = {
    card: { maxWidth: 345, height: '100%' },
    media: { height: 500 },
};

interface ActorCardProps {
    actor: ActorProps;
}

const ActorCard: React.FC<ActorCardProps> = (props) => {
    const { actor } = props;

    const imageUrl = actor.profile_path
        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
        : img;

    return (
        <Card sx={styles.card}>
            <Link to={`/actors/${actor.id}`}>
                <CardMedia
                    sx={styles.media}
                    image={imageUrl}
                    title={actor.name}
                />
            </Link>
            <CardContent>
                <Typography variant="h5" component="p">
                    {actor.name}
                </Typography>
                <Typography variant="subtitle1" component="p">
                    {actor.known_for_department}
                </Typography>
                <Typography variant="subtitle2" component="p">
                    Popularity: {actor.popularity.toFixed(1)}
                </Typography>
            </CardContent>
            <CardActions>
                <AddToActorFavouritesIcon {...actor} />
            </CardActions>
        </Card>
    );
};

export default ActorCard;