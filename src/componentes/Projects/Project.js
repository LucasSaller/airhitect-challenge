import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import ModalExample from "./ModalProject";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
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
  cardAction: {
    height: "100%",
  },
}));

function Project({ title, description, alt, isActive, onClick, image, info }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.root} elevation={0} style={{ borderRadius: 0 }}>
        <CardActionArea onClick={handleOpen} className={classes.cardAction}>
          <CardMedia className={classes.media} image={image} title={alt} />
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
      <Modal
        className={classes.modal}
        open={open}
        onclick={onClick}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalExample
          handleClose={handleClose}
          title={title}
          info={info}
          image={image}
          onclick={onClick}
        />
      </Modal>
    </div>
  );
}

export default Project;
