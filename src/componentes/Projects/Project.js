import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    position: "relative",
  },
  cardContainer: {
    height: "100%",
  },
  media: {
    height: "100%",
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    background: "#fff",
    width: "100%",
    height: 110,
  },
}));

function Project({ title, description, alt, isActive, image, handleOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.root} elevation={0} style={{ borderRadius: 0 }}>
        <CardMedia className={classes.media} image={image} title={alt} />
        <CardActionArea onClick={handleOpen} className={classes.cardAction}>
          {isActive && (
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h5"
                style={{ color: "#443d5b", fontWeight: "bold" }}
              >
                {title}
              </Typography>

              <Typography
                variant="h6"
                style={{ color: "#443d5b", fontWeight: 200 }}
                component="p"
              >
                {description}
              </Typography>
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Project;
