import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/auth.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  spacing: 1,
  root: {
    display: 'flex',
    minHeight: 56,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
  welcomeText: {
    marginRight: '.5em',
  },
  toolbar: {
    minHeight: 56,
  },
}));

const MainDrawer = (props) => {
  console.log('MainDrawer props: ', props);
  // const { user } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItemList = [
    {
      label: 'Find Run',
      clickHandler: () => {
        handleDrawerClose();
      },
      path: '/',
    },
    {
      label: 'Create Run',
      clickHandler: () => {
        handleDrawerClose();
      },
      path: '/',
    },
    {
      label: 'View Stats',
      clickHandler: () => {
        handleDrawerClose();
      },
      path: '/',
    },
    {
      label: 'Logout',
      clickHandler: () => {
        dispatch(logout());
        handleDrawerClose();
        // history.push('/login');
      },
      path: '/login',
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Flock Of Lettuce
          </Typography>

          <Typography variant="h6" noWrap className={classes.welcomeText}>
            {user.firstName}
          </Typography>
          <Link to="/profile">
            <img id="lettuce-logo" src="/lettuce-logo.png"></img>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItemList.map((menuItem, index) => (
            <div key={menuItem.label}>
              {console.log('Path in Main Drawer', menuItem.path)}
              <Link to={menuItem.path}>
                <ListItem button onClick={menuItem.clickHandler}>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <DirectionsRunIcon />
                    ) : (
                      <DirectionsRunIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={menuItem.label} />
                </ListItem>
              </Link>
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
      </main>
    </div>
  );
};

// const mapState = (state) => ({
//   user: state.auth,
// });

export default withRouter(MainDrawer);
