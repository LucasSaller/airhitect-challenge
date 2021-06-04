import { Button, Grid, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../assets/background-home.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
    height: "100%",
    position: "relative",
    margin: 20,
    width: "95%",
  },
  content: {
    padding: 20,
    background: "#fff",
  },

  buttonNext: {
    position: "absolute",
    top: "50%",
    right: 0,
    background: "#fff",
    marginRight: 10,
    borderRadius: 0,
  },
  buttonPrev: {
    position: "absolute",
    top: "50%",
    left: 0,
    background: "#fff",
    marginLeft: 10,
    borderRadius: 0,
  },
  buttonClose: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));
function ModalExample({ title, info, handleClose, image }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} lg={8} style={{ position: "relative" }}>
          <img className={classes.image} src={image} />
          <Button className={classes.buttonPrev}>
            <img src={prevArrow} />
          </Button>
          <Button className={classes.buttonNext}>
            <img src={nextArrow} />
          </Button>
        </Grid>
        <Grid item xs={12} lg={4} className={classes.content}>
          <Button onClick={handleClose} className={classes.buttonClose}>
            X
          </Button>
          <h2>{title}</h2>
          <p style={{ lineHeight: "30px" }}>{info}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ModalExample;
