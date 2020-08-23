import React, { useContext } from "react";

// mui
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

// components
import { MessageContext } from "./contexts/MessageContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      zIndex: 9999,
    },
    grow: {
      flexGrow: 1,
    },
    logo: {
      display: "block",
      marginRight: 40,
      padding: 8,
      border: "2px solid #000",
      borderRadius: 4,
      fontWeight: "bold",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "block",
    },
    sectionDesktop: {
      display: "flex",
    },
  })
);

interface Props {
  toggleMenu: () => any;
}

const Header = ({ toggleMenu }: Props) => {
  const context = useContext(MessageContext);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <Hidden smUp implementation="css">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown implementation="css">
            <Typography className={classes.logo} variant="h5" noWrap>
              Planktonics
            </Typography>
          </Hidden>
          <Typography className={classes.title} variant="h6" noWrap>
            {"#" + context.currentChannel}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <MailIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
