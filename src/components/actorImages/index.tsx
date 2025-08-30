import React from "react";
import { ActorImagesProps } from "../../types/interfaces";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img from "../../images/film-poster-placeholder.png";
import Typography from "@mui/material/Typography";

const styles = {
    imageList: {
        width: "100%",
        height: 450,
        overflowY: "auto",
    },
};

const ActorImages: React.FC<ActorImagesProps> = (props) => {
    return (
        <>
            <Typography variant="h5" component="h3" gutterBottom>
                Photos
            </Typography>
            <ImageList cols={3} sx={styles.imageList}>
                {props.profiles.map((image) => (
                    <ImageListItem key={image.file_path}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                            alt="Actor"
                            loading="lazy"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = img;
                            }}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
};

export default ActorImages;