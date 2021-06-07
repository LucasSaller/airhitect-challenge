import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../assets/avatar.png";
import { Avatar, Card, Grid, CardContent, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    position: "relative",
  },
  paper: {
    background: "red",
  },
  card: {
    maxWidth: 400,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    border: "none",
    flexDirection: "column",
  },
  avatar: {
    width: 120,
    height: 120,
  },
  avatarBackground: {
    background: "#f4f2f5",
    width: 120,
    height: 120,
    borderRadius: "50%",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 600,
    color: "#443d5b",
  },
  subtitle: {
    fontWeight: 400,
    color: "#443d5b",
  },
  title: {
    position: "absolute",
    top: "8%",
    left: "1%",
    color: "#443d5b",
    backgroundColor: "#fff",
    padding: "5px 10px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      top: "2%",
      left: "1%",
    },
  },
  paragraphStyle: { color: "#443d5b" },
}));

function OurTeam() {
  const classes = useStyles();
  const team = [
    {
      title: "Colleague Name",
      subtitle: "CEO",
      description:
        "Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      title: "Colleague Name",
      subtitle: "Administration",
      description:
        "Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      title: "Colleague Name",
      subtitle: "Architect",
      description:
        "Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      title: "Colleague Name",
      subtitle: "Architect",
      description:
        "Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      title: "Colleague Name",
      subtitle: "Architect",
      description:
        "Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
  ];
  return (
    <section id="Team">
      <div className={classes.root}>
        <h2 className={classes.title}>our team</h2>
        <Grid container align="center" justify="center">
          {team.map((team, index) => (
            <Grid item key={index} xs={12} md={6} lg={2}>
              <Card className={classes.card} elevation={0}>
                <div className={classes.avatarContainer}>
                  <div className={classes.avatarBackground}>
                    <Avatar className={classes.avatar}></Avatar>
                  </div>
                </div>

                <CardContent>
                  <h3 className={classes.cardTitle}>{team.title}</h3>
                  <h4 className={classes.subtitle}>{team.subtitle}</h4>
                  <p className={classes.paragraphStyle}>{team.description}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}

export default OurTeam;
