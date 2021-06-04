import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logoWhite.png";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import elipse1 from "../assets/Home/elipse1.png";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    display: "flex",
  },
  menu: {
    minWidth: 200,
    marginTop: 10,
  },
  menuButtonMenu: {
    color: "#000",
    background: "white",
    fontWeight: 200,
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  contactMenuButton: {
    color: "#000",
    background: "white",
    fontWeight: 200,
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const menuItems = [
  {
    name: "home",
    section: "Home",
  },
  {
    name: "about us",
    section: "AboutUs",
  },
  {
    name: "works",
    section: "Projects",
  },
  {
    name: "our team",
    section: "Team",
  },
  {
    name: "find us",
    section: "Contact",
  },
];
function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isDarkLogo, setIsDarkLogo] = React.useState(true);
  const anchorRef = React.useRef(null);
  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY > document.querySelector("#Contact").offsetTop - 40)
        setIsDarkLogo(false);
      else setIsDarkLogo(true);
    };
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.menuButton}>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            variant="contained"
            style={{
              color: "#000",
              background: "white",
              fontWeight: 200,
              borderRadius: 0,
            }}
          >
            <MenuIcon style={{ marginRight: "5px", opacity: "0.7" }} />
            <span className={classes.menuButtonMenu}>Menu</span>
          </Button>
          <div>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                        className={classes.menu}
                      >
                        {menuItems.map((menuItem, index) => (
                          <Link
                            key={index}
                            to={menuItem.section}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            <MenuItem key={index} onClick={handleClose}>
                              {menuItem.name}
                            </MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>

        <img src={isDarkLogo ? logo : logoWhite} />
        <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
          <Button variant="contained" className={classes.contactMenuButton}>
            <img src={elipse1} />
            <img src={elipse1} style={{ marginLeft: -10 }} />
            contact
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
