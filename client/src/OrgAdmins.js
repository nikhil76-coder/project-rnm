// import React from 'react';
// import { withRouter } from "react-router-dom";
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import Button from '@material-ui/core/Button';




// import {
//     Drawer as MUIDrawer,
   
//   } from "@material-ui/core";



// const drawerWidth = 190;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
  
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   Button: {
//     marginLeft: theme.spacing(128),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   title: {
//     flexGrow: 1,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));

// function Dash(props) {
//     console.log(props)

//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const { history } = props;
  
//   const itemsList = [
//     {
//       text: "Home",
//       icon: <InboxIcon />,
//       onClick: () => history.push("/")
//     },
//     {
//       text: "Admins",
//       icon: <InboxIcon />,
//       onClick: () => history.push("/admins")
//     },
//     {
//       text: "Users",
//       icon: <InboxIcon />,
//       onClick: () => history.push("/users")
//     },
//     {
//       text: "Organizations",
//       icon: <InboxIcon />,
//       onClick: () => history.push("/organizations")
//     },
//     {
//       text: "Roles",
//       icon: <InboxIcon />,
//       onClick: () => history.push("/roles")
//     }
//   ];

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={clsx(classes.menuButton, open && classes.hide)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Project 
//           </Typography>
//           <Button color="inherit" className={clsx(classes.Button)}>Logout</Button>
         
//         </Toolbar>
        
//       </AppBar>
//       <Drawer  
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </div>
//         <Divider />

      
//         <List>
//         {itemsList.map((item, index) => {
//           const { text,icon, onClick } = item;
//           return (
//             <ListItem button key={text} onClick={onClick}>
//               {icon && <ListItemIcon>{icon}</ListItemIcon>}
//               {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
//               <ListItemText primary={text} />
//             </ListItem>
//           );
//         })}
//       </List>
      
      
//         {/* <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List> */}
//         {/* <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List> */}
//       </Drawer>
//       <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: open,
//         })}
//       >
//         <div className={classes.drawerHeader} />
        
//         {/* <ListItemText primary={text} /> */}
      
        
//       </main>
//     </div>
//   );
// }
// export default withRouter(Dash);

 
import React, { useState, Fragment } from "react";
import clsx from "clsx";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@material-ui/core/Button';

// import Home from "../pages/Home";
// import Grid from "../pages/Grid";

import Users from "./components/users/Users";


import Roles from "./components/roles/Roles";
import Docform from './Pages/Userdocucemntpage'
import Home from './Pages/home/Home';
const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick }) => (
  <Fragment>
    <AppBar className={classes.aboveDrawer}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        <Button color="inherit" onClick={()=>{
                localStorage.clear()
                 // dispatch({type:"CLEAR"})
                  history.push('/signin')
                window.location.reload()
               }}> Logout</Button>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
  </Fragment>
));

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
      <Drawer
        variant={variant}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === "persistent"
          })}
        />
        <List>
          {/* <ListItem
            button
            component={Link}
            to="/"
            onClick={onItemClick("Home")}
          >
            <ListItemText>Home</ListItemText>
          </ListItem> */}
          <ListItem
            button
            component={Link}
            to="/users"
            onClick={onItemClick("Users")}
          >
            <ListItemText>Users</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/roles"
            onClick={onItemClick("Roles")}
          >
            <ListItemText>Roles</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/Docform"
            onClick={onItemClick("Document center")}
          >
            <ListItemText>Document center</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/Home"
            onClick={onItemClick("Dashboard")}
          >
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Route exact path="/users" component={Users} />
        <Route path="/roles" component={Roles} />
        <Route path="/Docform" component={Docform} />
        <Route path="/Home" component={Home} />
      </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);




