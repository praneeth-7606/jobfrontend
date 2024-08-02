
// import DehazeIcon from '@mui/icons-material/Dehaze';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function Sidenavbar() {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {['Resume', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText secondary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['Profile',"Calender","Polices","Feedback","Contacts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}><DehazeIcon/></Button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }
// // export default 

import DehazeIcon from '@mui/icons-material/Dehaze';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ResumeIcon from '@mui/icons-material/Description'; // Example custom icon
import ProfileIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
 // Example custom icon
// Import other required icons

export default function Sidenavbar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (route: string) => {
    navigate(route);
    setOpen(false); // Close the drawer after navigation
  };

  const DrawerList = (
    <Box sx={{ width: 250 ,display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align items to the center
    '& .MuiListItemButton-root': {
      justifyContent: 'center', // Center content horizontally
      marginBottom: '10px', }  }} role="presentation" onClick={toggleDrawer(false)}>
      <List style={{paddingBottom:"15%",paddingTop:"20%",}}>
        {[
          { text: 'Resume', icon: <ResumeIcon />, route: "/resume" },
          
          { text: 'Internships', icon: <WorkIcon />, route: '/internship' },
          { text: 'Starred', icon: <NotificationsIcon />, route: '/starred' },
          { text: 'Starred', icon: <NotificationsIcon />, route: '/starred' },
          { text: 'Jobs', icon: <WorkIcon />, route: '/internship' },
    
          // Add other menu items with appropriate icons and routes
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.route)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <hr></hr> */}
      <List style={{justifyContent:"space-between"}}>
        {[
          ,
          { text: 'Calendar', icon: <EventIcon  />, route: '/calender' },
          { text: 'Policies', icon: <EventIcon  />, route: '/pl' },
          { text: 'Profile', icon: <ProfileIcon />, route: "dashboard/user/profile" },
          { text: 'Contact', icon: <EventIcon  />, route: '/calendar' },
          { text: 'Feedback', icon: <EventIcon  />, route: '/calendar' },
          // Add other menu items with appropriate icons and routes
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.route)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><DehazeIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
