import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../assets/background-home.png";
import { Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "#eae6eb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  barra: {
    margin: 30,
    width: 300,
    height: 2,
    background: "#443d5b",
  },
  text: {
    fontSize: 40,
    fontWeight: 200,
    maxWidth: 800,
  },
  subText: {
    maxWidth: 250,
    wordBreak: "break-all",
    color: "#443d5b",
    fontWeight: 300,
    padding: 10,
  },
  content: {
    maxWidth: 600,
    textAlign: "center",
    color: "#443d5b",
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <section id="AboutUs">
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          display="flex"
          alignItems="center"
          direction="column"
        >
          <Grid item className={classes.barra}></Grid>
          <Grid item className={classes.content}>
            <Typography
              variant="subtitle"
              align="center"
              className={classes.text}
            >
              Mauris tortor leo, volutpat ut lacus at, maximus eleifend dolor.
              <b> Orci varius natoque penatibus et magnis dis </b>parturient
              montes, nascetur ridiculus mus.
            </Typography>
          </Grid>
          <Grid item className={classes.barra}></Grid>
        </Grid>
        <Grid
          container
          justify="center"
          direction="row"
          align="center"
          style={{ padding: 20 }}
        >
          <Grid item className={classes.subText} xs={12} lg={4}>
            <Typography variant="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget turpis non lacus egestas ultricies. Cras leo nisl, accumsan
              eget loremnon lacus egestas
            </Typography>
          </Grid>
          <Grid item className={classes.subText}>
            <Typography variant="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget turpis non lacus egestas ultricies. Cras leo nisl, accumsan
              eget loremnon lacus egestas
            </Typography>
          </Grid>
          <Grid item className={classes.subText}>
            <Typography variant="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget turpis non lacus egestas ultricies. Cras leo nisl, accumsan
              eget loremnon lacus egestas
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default AboutUs;
