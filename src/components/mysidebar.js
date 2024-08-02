// import React from 'react'
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem,  SubMenu} from 'react-pro-sidebar';
// import { HomeOutlinedIcon, PeopleOutlinedIcon } from '@ant-design/icons';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Mysidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <Sidebar collapsed={isCollapsed} onCollapse={handleCollapse}>
        <Menu>
          <MenuItem icon={<DehazeIcon />} >Home</MenuItem>
   
          <MenuItem icon={<DehazeIcon />} label="Home" />
          <MenuItem icon={<DehazeIcon />} label="Home" />
          <SubMenu icon={<DehazeIcon />} label="About Us">
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Mysidebar




// const App = () => {
  

//   return (
//     <div className="App">
      
//       <div className="main-content">
//         <h1>This is the main content</h1>
//       </div>
//     </div>
//   );
// };

// export default App;