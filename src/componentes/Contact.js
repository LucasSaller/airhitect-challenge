import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Loader } from "google-maps";
import marker from "../assets/marker.png";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    background: "#443d5b",
  },
  contact: {
    display: "flex",
    width: "60%",
    "& h2": {
      color: "white",
    },
  },
  div: {
    margin: "0 auto",
    maxWidth: 720,
  },
  map: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
  content: {
    flex: 1,
    padding: 20,
    color: "#fff",
    alignSelf: "center",
  },
  leftContent: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    "& span": {
      margin: 10,
      fontWeight: 200,
    },
  },
  mapIframe: {
    height: "100%",
    width: "100%",
  },
  form: {
    padding: 20,
    color: "#fff",
  },
  input: {
    color: "#fff",
  },
  socialIcons: {
    display: "flex",
    gap: 12,
  },
}));
const formFields = [
  {
    type: "text",
    placeholder: "Name",
  },
  {
    type: "email",
    placeholder: "E-mail",
  },
  {
    type: "text",
    placeholder: "Subject",
  },
  {
    type: "text",
    placeholder: "Message",
    multiline: true,
    rows: 2,
    fullWidth: true,
  },
];
function Contact() {
  const classes = useStyles();
  useEffect(() => {
    const callGoogleApi = async () => {
      const options = {};
      const loader = new Loader(
        "AIzaSyDY__RwJEgRdbuN8Yyv8QVew63ulASrUNA",
        options
      );
      const location = { lat: 47.4956195, lng: 19.024983 };
      const google = await loader.load();
      const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
        mapId: "906bc1f618f027f",
      });
      new google.maps.Marker({
        position: location,
        map,
        icon: marker,
      });
    };
    callGoogleApi();
  }, []);
  return (
    <section id="Contact">
      <div className={classes.root}>
        <Grid container className={classes.contactContainer}>
          <Grid item className={classes.contact} xs={12} lg={8}>
            <Grid container className={classes.div}>
              <Grid item className={classes.content}>
                <h2>Contact us via email, phone or come by into our office!</h2>
                <Grid container spacing={2}>
                  <Grid item className={classes.leftContent}>
                    <MailOutlineIcon />
                    <PhoneInTalkIcon />
                    <HomeIcon />
                  </Grid>
                  <Grid item className={classes.leftContent}>
                    <span>info@airhitect.com</span>

                    <span>+12 34 567 890</span>
                    <span>+12 34 567 890</span>

                    <span>1012 Budaest</span>
                    <span>Marvany utca 16</span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.content}>
                <div className={classes.socialIcons}>
                  <FacebookIcon />
                  <InstagramIcon />
                  <LinkedInIcon />
                  <TwitterIcon />
                </div>

                <h5>We are hiring!</h5>
                <p style={{ lineHeight: "22px", fontWeight: 200 }}>
                  We are looking for new talents to our team! If you think you
                  are the right person for AIRhitect send us an email with your
                  CV and portfolio. Don't forget to write a little about
                  yourself
                </p>
                <span>job@airhitect.com</span>
              </Grid>
              <form className={classes.form}>
                <Grid container spacing={1}>
                  {formFields.map((field, index) => (
                    <Grid item key={index} xs={12}>
                      <TextField
                        gutterBottom
                        size="small"
                        variant="filled"
                        {...field}
                        InputProps={{
                          className: classes.input,
                        }}
                      />
                    </Grid>
                  ))}
                  <Button
                    style={{ margin: 5, marginLeft: "auto" }}
                    variant="contained"
                  >
                    Send Message
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Grid item className={classes.map} xs={12} lg={4}>
            <div id="map" className={classes.mapIframe}></div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Contact;
