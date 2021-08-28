import { makeStyles } from "@material-ui/core/styles";

import { Col, Container, Row } from "react-grid-system";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    // background: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <AppBar color={"inherit"} position={"static"}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography>About</Typography>
        <Button></Button>
        <Button>Resume</Button>
        <Button>Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Home;
