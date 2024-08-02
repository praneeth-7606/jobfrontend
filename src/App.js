// import logo from './logo.svg';
import { Route ,Routes,} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Homepage from './components/homepage';
import Forgot from './components/forgot';
import Polices from './components/polices';
import Contactus from './components/contactus';
import Aboutus from './components/aboutus';
import Myfile1 from './components/myfile1';
import PrivateRoute from './components/routes/privateroute';

import Dashboard from './components/user/dashboard';

import Mysidebar from './components/mysidebar';
import Mainjobpage from './components/jobpages/mainjobpage';
import Jobcard from './components/jobpages/jobcard';
import Admindashboard from './components/Admin/admindashboard';

import Adminroute from "./components/routes/adminroute"
import Jobtype2 from './components/Admin/jobtype2';
import NewJobForm from './components/Admin/newjob1';
import SingleJobPage from './components/jobpages/singlejobpage';
import { JobTypesProvider } from './components/context/JobTypesContext';
import Search from './components/search';
import Profile from './components/user/profile';
import ResumeUpload from './components/resume';

import Delete from '@mui/icons-material/Delete';

import Deletenewjob from './components/jobpages/deletenewjob';
import Notfound from './components/Notfound';

import Getresume from './components/getresume';
import Getappliedjobs from './components/jobpages/getappliedjobs';
import Calandar from './components/Admin/calander';
function App() {

  return ( 
  <>
  <Routes>
  <Route path ="/" element={<Homepage/>}/>
  <Route path ="/search" element={<Search/>}></Route>
  <Route path ="/dashboard" element={<PrivateRoute/>}>
  <Route path ="user" element={<Dashboard/>}/>
  <Route path ="user/profile" element={<Profile/>}/>
  <Route path ="user/my" element={<Mainjobpage/>}/>
  </Route>
  <Route path="resume"  element={<ResumeUpload/>}/>


  <Route path ="/dashboard" element={<Adminroute/>}>
  <Route path ="admin" element={<Admindashboard/>}/>
  <Route path ="admin/newjob1" element={<NewJobForm />}/>
  <Route path ="admin/profile" element={<Profile/>}/>
  <Route path ="admin/delete" element={<Deletenewjob/>}/>
  <Route path ="admin/jobtype" element={<Jobtype2/>}/>
  </Route>
  <Route path="/appliedjobs" element={<Getappliedjobs />} />

  <Route path ="/calender" element={<Calandar />}/>
  <Route path ="/login" element={<Login   />}/>
  <Route path="/my/:id" element={<SingleJobPage  />} />
  <Route path="/search/my/:id" element={<SingleJobPage  />} />
  
  {/* <Route path="/ap"  element={<Showappliedjobs/>}/> */}
    {/* <Routes> */}
  
  {/* <Route path ="/newjob1" element={<NewJobForm />}/> */}
  {/* <Route path ="/delete" element={<Deletenewjob/>}/> */}
  {/* </Routes> */}
  <Route path ="/gt" element={<Getresume/>}/>
  <Route path ="/s" element={<Mysidebar/>}/>
  
  
  <Route path ="*" element={<Notfound/>}/>

  {/* <Route path ="/" element={<Sidenavbar/>}/> */}
  <Route path ="/forgot" element={<Forgot/>}/>
    
  
    <Route path ="/pl" element={<Polices/>}/>
    <Route path ="/contact" element={<Contactus/>}/>
    <Route path ="/about" element={<Aboutus/>}/>
    <Route path ="/signup" element={<Signup/>}/>
    {/* <Route path ="/layout" element={<Layout/>}/> */}
  </Routes>
  </>
  );
}

export default App;
