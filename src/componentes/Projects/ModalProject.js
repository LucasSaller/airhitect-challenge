import { Button, Grid, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import nextArrow from "../../assets/Projects/next.png";
import prevArrow from "../../assets/Projects/prev.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    height: "80vh",
    position: "relative",
    margin: 20,
    width: "95%",
  },
  content: {
    padding: 20,
    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  buttonNext: {
    position: "absolute",
    top: "50%",
    right: 0,
    background: "#fff",
    marginRight: 10,
    borderRadius: 0,
    transform: "translateY(-50%)",
  },
  buttonPrev: {
    position: "absolute",
    top: "50%",
    left: 0,
    background: "#fff",
    marginLeft: 10,
    borderRadius: 0,
    transform: "translateY(-50%)",
  },
  buttonClose: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
}));
function ModalProject({
  title,
  info,
  handleClose,
  image,
  setActiveModalIndex,
  lengthProjects,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Button onClick={handleClose} className={classes.buttonClose}>
          X
        </Button>
        <Grid
          item
          xs={12}
          lg={8}
          style={{ position: "relative", height: "100%" }}
        >
          <img className={classes.image} src={image} />

          <Button
            className={classes.buttonPrev}
            onClick={() =>
              setActiveModalIndex((current) =>
                current === 0 ? lengthProjects - 1 : current - 1
              )
            }
          >
            <img src={prevArrow} />
          </Button>
          <Button
            className={classes.buttonNext}
            onClick={() =>
              setActiveModalIndex((current) =>
                lengthProjects === current + 1 ? 0 : current + 1
              )
            }
          >
            <img src={nextArrow} />
          </Button>
        </Grid>
        <Grid item xs={12} lg={4} className={classes.content}>
          <h2>{title}</h2>
          <p className={classes.info} style={{ lineHeight: "30px" }}>
            {info}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ModalProject;
