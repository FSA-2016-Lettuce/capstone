import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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
  avatarBadge: {
    "border-radius": '50%',
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
  welcomeText: {
    marginRight: '.5em',
  },
  toolbar: {
    minHeight: 56,
    justifyContent: 'space-between',
  },
  link: {
    color: 'white',
  },
}));

const MainDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  // console.log('user from drawer', user);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItemList = user.username
    ? [
        {
          label: 'Find Run',
          clickHandler: () => {
            handleDrawerClose();
          },
          path: '/',
        },
        {
          label: 'Create Run Event',
          clickHandler: () => {
            handleDrawerClose();
          },
          path: '/runs/create',
        },
        {
          label: 'Create Route Path',
          clickHandler: () => {
            handleDrawerClose();
          },
          path: '/routes/create',
        },
        {
          label: 'View Stats',
          clickHandler: () => {
            handleDrawerClose();
          },
          path: `/users/stats/${user.id}`,
        },
        {
          label: 'Meet the Team',
          clickHandler: () => {
            handleDrawerClose();
          },
          path: '/meet-the-team',
        },
        {
          label: 'Logout',
          clickHandler: () => {
            dispatch(logout());
            handleDrawerClose();
          },
          path: '/',
        },
      ]
    : [
        {
          label: 'Home',
          clickHandler: () => {
            handleDrawerClose();
          },
          path: '/',
        },
        {
          label: 'Login/Sign Up',
          clickHandler: () => {
            handleDrawerClose();
          },
          path: '/login',
        },
        {
          label: 'Meet the Team',
          clickHandler: () => {
            handleDrawerClose();
          },
          path: '/meet-the-team',
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
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography variant="h6" noWrap className={classes.link}>
              flock
            </Typography>
          </Link>
          {user.username ? (
            <Link to={`/users/${user.id}/profile`}>
              <img className= {classes.avatarBadge}id="profile-img" src={user.profileImg}></img>
            </Link>
          ) : (
            <img src="/lettuce-logo.png" id="profile-img" />
          )}
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
      ></main>
    </div>
  );
};

export default withRouter(MainDrawer);
