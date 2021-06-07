import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    minHeight: "100vh",
    background: "#eae6eb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  barra: {
    margin: 30,
    width: 300,
    height: 2,
    background: "#443d5b",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
    padding: 10,
  },
  title: {
    position: "absolute",
    top: "8%",
    left: "1%",
    color: "#443d5b",
    backgroundColor: "#fff",
    padding: "5px 10px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: { top: "4%", left: "2%" },
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <section id="AboutUs">
      <div className={classes.root}>
        <h2 className={classes.title}>about us</h2>

        <Grid
          container
          justify="center"
          display="flex"
          alignItems="center"
          direction="column"
        >
          <Grid item className={classes.barra}></Grid>
          <Grid item className={classes.content}>
            <Typography align="center" className={classes.text}>
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
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget turpis non lacus egestas ultricies. Cras leo nisl, accumsan
              eget loremnon lacus egestas
            </Typography>
          </Grid>
          <Grid item className={classes.subText} xs={12} lg={4}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget turpis non lacus egestas ultricies. Cras leo nisl, accumsan
              eget loremnon lacus egestas
            </Typography>
          </Grid>
          <Grid item className={classes.subText} xs={12} lg={4}>
            <Typography>
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
