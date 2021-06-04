import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../componentes/Header";
import backgroundImage from "../assets/background-home.png";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    color: "#443d5b",
    fontSize: 54,
    fontWeight: "bold",
    margin: 0,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: 100,
    fontSize: 34,
    color: "#443d5b",
    textAlign: "center",
  },
  barra: {
    margin: 15,
    width: 200,
    height: 80,
    borderTop: "4px solid #443d5b",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <section id="Home">
      <div className={classes.root}>
        <Header />
        <div className={classes.content}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: "100vh", placeContent: "center" }}
          >
            <Grid item>
              <div className={classes.barra}></div>
            </Grid>
            <Grid item className={classes.div}>
              <h1 className={classes.title}>dedicated to the future</h1>
              <h2 className={classes.subtitle}>web template</h2>
            </Grid>
            <Grid item>
              <div className={classes.barra}></div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Home;
