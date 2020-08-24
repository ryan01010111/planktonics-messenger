import React, { useContext } from "react";

// mui
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BusinessSharpIcon from "@material-ui/icons/BusinessSharp";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

// components
import { MessageContext } from "./contexts/MessageContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: 240,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 240,
    },
  })
);

interface Props {
  window?: () => Window;
  mobileOpen: boolean;
  toggleMenu: () => any;
  logout: () => any;
}

const ResponsiveDrawer = ({
  window,
  mobileOpen,
  toggleMenu,
  logout,
}: Props) => {
  const context = useContext(MessageContext);
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {/* item 1 */}
        <ListItem button onClick={logout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Выход" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {/* item 2 */}
        <ListItem button onClick={() => context.setCurrentChannel("work")}>
          <ListItemIcon>
            <BusinessSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Работа" />
        </ListItem>
        {/* item 3 */}
        <ListItem button onClick={() => context.setCurrentChannel("casual")}>
          <ListItemIcon>
            <FreeBreakfastIcon />
          </ListItemIcon>
          <ListItemText primary="Общение" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={toggleMenu}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default ResponsiveDrawer;
