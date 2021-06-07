import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import project1 from "../../assets/Projects/project1.png";
import project2 from "../../assets/Projects/project2.png";
import project3 from "../../assets/Projects/project3.png";
import Slider from "react-slick";
import Project from "../Projects/Project";
import nextArrow from "../../assets/Projects/next.png";
import prevArrow from "../../assets/Projects/prev.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import ModalProject from "./ModalProject";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
  },
  slide: {
    width: "100%",
    height: "100vh",
  },
  title: {
    position: "absolute",
    top: "4%",
    left: "1%",
    color: "#443d5b",
    backgroundColor: "#fff",
    padding: "5px 10px",
    fontWeight: "bold",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      top: "10%",
      left: "1%",
    },
  },
}));
const projects = [
  {
    image: project1,
    alt: "Project 1",
    title: "Project Title 1 ",
    description: "Vivamus imperdiet hendreit leo quis fringilla",
    info: "Vivamus imperdiet hendrerit leo quis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend leo sit amet rutrum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam mauris sed ante laoreet, a luctus nunc finibus. Quisque quis neque enim. In facilisis posuere elementum. Morbi eu odio bibendum, pretium velit in, feugiat mi. Cras gravida neque in enim tempus pretium. Maecenas sodales vestibulum eros at consectetur. Donec nisi tortor, malesuada sed pretium nec, faucibus ut velit. Sed congue tempor orci, id suscipit tortor semper",
  },
  {
    image: project2,
    alt: "Project 2",
    title: "Project Title 2 ",
    description: "Vivamus imperdiet hendreit leo quis fringilla",
    info: "Vivamus imperdiet hendrerit leo quis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend leo sit amet rutrum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam mauris sed ante laoreet, a luctus nunc finibus. Quisque quis neque enim. In facilisis posuere elementum. Morbi eu odio bibendum, pretium velit in, feugiat mi. Cras gravida neque in enim tempus pretium. Maecenas sodales vestibulum eros at consectetur. Donec nisi tortor, malesuada sed pretium nec, faucibus ut velit. Sed congue tempor orci, id suscipit tortor semper",
  },

  {
    image: project3,
    alt: "Project 3",
    title: "Project Title 3",
    description: "Vivamus imperdiet hendreit leo quis fringilla",
    info: "Vivamus imperdiet hendrerit leo quis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend leo sit amet rutrum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam mauris sed ante laoreet, a luctus nunc finibus. Quisque quis neque enim. In facilisis posuere elementum. Morbi eu odio bibendum, pretium velit in, feugiat mi. Cras gravida neque in enim tempus pretium. Maecenas sodales vestibulum eros at consectetur. Donec nisi tortor, malesuada sed pretium nec, faucibus ut velit. Sed congue tempor orci, id suscipit tortor semper",
  },
  {
    image: project2,
    alt: "Project 4",
    title: "Project Title 4",
    description: "Vivamus imperdiet hendreit leo quis fringilla",
    info: "Vivamus imperdiet hendrerit leo quis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend leo sit amet rutrum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam mauris sed ante laoreet, a luctus nunc finibus. Quisque quis neque enim. In facilisis posuere elementum. Morbi eu odio bibendum, pretium velit in, feugiat mi. Cras gravida neque in enim tempus pretium. Maecenas sodales vestibulum eros at consectetur. Donec nisi tortor, malesuada sed pretium nec, faucibus ut velit. Sed congue tempor orci, id suscipit tortor semper",
  },
];

function NextArrow({ style, onClick }) {
  return (
    <Button
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right: 0,
        background: "#fff",
        margin: 10,
        borderRadius: 0,
      }}
      onClick={onClick}
    >
      <img src={nextArrow} alt="next" />
    </Button>
  );
}

function PrevArrow({ style, onClick }) {
  return (
    <Button
      style={{
        ...style,
        zIndex: 1,
        display: "block",
        position: "absolute",
        top: "50%",
        left: 0,
        background: "#fff",
        margin: 10,
        borderRadius: 0,
      }}
      onClick={onClick}
    >
      <img src={prevArrow} alt="prev" />
    </Button>
  );
}

function Projects({ onClick }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(1);
  const [activeModalIndex, setActiveModalIndex] = useState(1);
  const { slickGoTo } = Slider;
  const [open, setOpen] = React.useState(false);
  const lengthProjects = projects.length;
  const classes = useStyles();
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        initialSlide: 0,
        accessibility: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true,
        useCSS: true,
      },
    },
  ];

  const handleOpen = (index) => {
    setOpen(true);
    setActiveModalIndex(activeProjectIndex);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: responsive,
    afterChange: (index) => {
      setActiveProjectIndex(index + 1);
      setActiveModalIndex(index + 1);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section id="Projects">
      <div className={classes.root}>
        <h2 className={classes.title}>projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Grid container key={index}>
              <div className={classes.slide}>
                <Project
                  info={project.info}
                  isActive={
                    activeProjectIndex === projects.length
                      ? activeProjectIndex - projects.length === index
                      : activeProjectIndex === index
                  }
                  title={project.title}
                  alt={project.alt}
                  image={project.image}
                  description={project.description}
                  handleOpen={() => handleOpen(index + 1)}
                />
              </div>
            </Grid>
          ))}
        </Slider>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalProject
          setActiveModalIndex={setActiveModalIndex}
          slickGoTo={slickGoTo}
          handleClose={handleClose}
          lengthProjects={lengthProjects}
          title={projects[activeModalIndex].title}
          info={projects[activeModalIndex].info}
          image={projects[activeModalIndex].image}
          onclick={onClick}
        />
      </Modal>
    </section>
  );
}

export default Projects;
