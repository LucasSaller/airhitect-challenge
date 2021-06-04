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

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  slide: {
    width: "100%",
    height: "100vh",
    background: "red",
  },
}));
const projects = [
  {
    image: project2,
    alt: "Project 1",
    title: "Project Title 1 ",
    description: "Vivamus imperdiet hendreit leo quis fringilla",
    info: "Vivamus imperdiet hendrerit leo quis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend leo sit amet rutrum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam mauris sed ante laoreet, a luctus nunc finibus. Quisque quis neque enim. In facilisis posuere elementum. Morbi eu odio bibendum, pretium velit in, feugiat mi. Cras gravida neque in enim tempus pretium. Maecenas sodales vestibulum eros at consectetur. Donec nisi tortor, malesuada sed pretium nec, faucibus ut velit. Sed congue tempor orci, id suscipit tortor semper",
  },
  {
    image: project1,
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
    image: project1,
    alt: "Project 4",
    title: "Project Title 4",
    description: "Vivamus imperdiet hendreit leo quis fringilla",
    info: "Vivamus imperdiet hendrerit leo quis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend leo sit amet rutrum pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi aliquam mauris sed ante laoreet, a luctus nunc finibus. Quisque quis neque enim. In facilisis posuere elementum. Morbi eu odio bibendum, pretium velit in, feugiat mi. Cras gravida neque in enim tempus pretium. Maecenas sodales vestibulum eros at consectetur. Donec nisi tortor, malesuada sed pretium nec, faucibus ut velit. Sed congue tempor orci, id suscipit tortor semper",
  },
];
function NextArrow(props) {
  const { style, onClick } = props;
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
      <img src={nextArrow} />
    </Button>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
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
      <img src={prevArrow} />
    </Button>
  );
}
function Projects(props) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(1);
  const classes = useStyles();
  const { onClick } = props;
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: responsive,
    afterChange: (index) => setActiveProjectIndex(index + 1),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="Projects">
      <div className={classes.root}>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Grid container>
              <div key={index} className={classes.slide}>
                <Project
                  onclick={onClick}
                  info={project.info}
                  isActive={activeProjectIndex === index}
                  title={project.title}
                  alt={project.alt}
                  image={project.image}
                  description={project.description}
                />
              </div>
            </Grid>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
