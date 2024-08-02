
// import HomeIcon from '@mui/icons-material/Home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

// import { red } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import toast from "react-hot-toast";
import { DropdownButton,Dropdown } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Sidenavbar from '../sidenavbar';
import Searchinput from '../form/searchinput';
import { Badge } from "antd";
function Header1() {
  const {auth,setauth,userId}=useAuth()


  const handlelogout=()=>{
    setauth({
      ...auth,user:null,token:""
    })
    localStorage.removeItem("auth")
    toast.success("sucessfully saved")
  }

  return (
    <>
      <Navbar style={{	backgroundColor:"#f18f66"}}  data-bs-theme="dark">
        <Container>
            <div className='logo'>
        
         <Sidenavbar/>
        <Navbar.Brand href="/">NAVBAR</Navbar.Brand>
         
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className="me-3 d-flex align-items-center">
                <Searchinput/>
              
                <Nav.Link href="/" style={{ color: "black" }}>Home</Nav.Link>
              </Nav.Item>
              <Nav className="mr-auto">
  
</Nav>


              {
                !auth.user? (<>
                <Nav.Item className="me-3">
                <Nav.Link href="/login" style={{ color: "orange" }}>Login</Nav.Link>
              </Nav.Item>
                <Nav.Item className="me-3">
                <Nav.Link href="/signup" style={{ color: "orange" }}>Sign up</Nav.Link>
              </Nav.Item>
              </>): (<>
  
    <NavDropdown
              id="nav-dropdown-dark-example"
              title={auth?.user?.name}
              style={{color:"green"}}
              menuVariant="primary"
              
            >
              <NavDropdown.Item href={`/dashboard/${auth?.user?.role===1?"admin":"user"}`}>Dashboard</NavDropdown.Item>
              <NavDropdown.Item onClick={handlelogout} href="/login">
                Logout
              </NavDropdown.Item>
              
            </NavDropdown>

              </>)
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header1;
