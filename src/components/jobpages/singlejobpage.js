
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { Button } from '@mui/material';
// // import { Layout } from 'antd';
// import Layout from '../layout/layout';

// function SingleJobPage() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [relatedjobs,setrelatedjobs]=useState()


//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const response = await axios.get(`https://jobserver-1.onrender.com/api/route/jobs/getjob/${id}`);
//         setJob(response.data);
//       } catch (error) {
//         console.error('Error fetching job:', error);
//       }
//     };
//     fetchJob();
//   }, [id]);

//   if (!job) {
//     return <div>Loading...</div>;
//   }
// // get similar jobs


//   return (
//     <Layout className="mt-5">
//       <Card>
//         <Card.Body>
//           <Card.Title>{job.title}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">Location: {job.location}</Card.Subtitle>
//           <Card.Subtitle className="mb-2 text-muted">Salary: {job.salary}</Card.Subtitle>
//           <Card.Text>{job.description}</Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroupItem>Job Type: {job.jobtype}</ListGroupItem>
//           <ListGroupItem>Role: {job.role}</ListGroupItem>
//           <ListGroupItem>Education Level: {job.educationLevel}</ListGroupItem>
//           <ListGroupItem>Experience Level: {job.experienceLevel}</ListGroupItem>
//           <ListGroupItem>Location: {job.location}</ListGroupItem>
//           <li className="list-group-item">Skills: {job.skills.join(', ')}</li>
//           <li className="list-group-item">Application Deadline: {job.applicationDeadline}</li>
//           <li className="list-group-item">Date Posted: {job.datePosted}</li>
//           {/* Add more job details as needed */}
//         </ListGroup>
//         <Button>Apply Now</Button>
//       </Card>
//     </Layout>
//   );
// }

// export default SingleJobPage;


// main some better working code 

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Button } from '@mui/material';
import Layout from '../layout/layout';
import { useAuth } from '../context/auth';
// import { toast } from 'react-toastify';
import { toast } from "react-hot-toast";
// import Applyjob from "./"
import Applyjob from './applyjob';
function SingleJobPage() {
  // const toaster = useToaster();
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`https://jobserver-1.onrender.com/api/route/jobs/getjob/${id}`);
        setJob(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };

    fetchJob();
  }, [id]);

  const jobId = id
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout className="mt-5">
      <Card>
        <Card.Body className='w-10'>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Location: {job.location}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Salary: {job.salary}</Card.Subtitle>
          <Card.Text>{job.description}</Card.Text>
        </Card.Body>
        <ListGroup  className="list-group-flush ">
          <ListGroupItem>Job Type: {job.jobtype}</ListGroupItem>
          <ListGroupItem>Role: {job.role}</ListGroupItem>
          {/* <ListGroupItem>id: {userId}</ListGroupItem> */}
          <ListGroupItem>Education Level: {job.educationLevel}</ListGroupItem>
          <ListGroupItem>Experience Level: {job.experienceLevel}</ListGroupItem>
          <ListGroupItem>Location: {job.location}</ListGroupItem>
          <li className="list-group-item">Skills: {job.skills.join(', ')}</li>
          <li className="list-group-item">Application Deadline: {job.applicationDeadline}</li>
          <li className="list-group-item">Date Posted: {job.datePosted}</li>
          {/* Add more job details as needed */}
        </ListGroup>
        {/* <br></br> */}
        
      </Card>
      <br></br>
      <div className='cont'>
        {/* <p>{userId}</p> */}
      <Applyjob jobId={jobId} userId={userId}/>

{/* <a href="/applied-jobs/${userId}">get the list of aplied jobs</a> */}
      {/* <button onClick={}></button> */}
      {/* <Button  style={{maxWidth:"10%" ,}} variant="contained" onClick={}>Apply Now</Button> */}
      </div> 
    </Layout>
  );
}

export default SingleJobPage;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { Button } from '@mui/material';
// import Layout from '../layout/layout';
// import { toast } from "react-hot-toast";

// function SingleJobPage() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3002/api/route/jobs/getjob/${id}`);
//         setJob(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching job:', error);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   const applyForJob = async () => {
//     try {
//       // Make a POST request to apply for the job with both job ID and user ID
//       const response = await axios.post(`https://jobserver-1.onrender.com/api/route/appliedjob/apply/${id}`, { jobId: id });
//       // Extract user ID from the response if needed
//       const userId = response.data.userId;
//       // Display success message
//       toast.success('Successfully applied for the job!');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         // If the error status is 400, it means the user has already applied for the job
//         toast.error('You have already applied for this job');
//       } else {
//         console.error('Error applying for job:', error);
//         toast.error(`Failed to apply for the job because ${error}`);
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Layout className="mt-5">
//       <Card>
//         <Card.Body className='w-10'>
//           <Card.Title>{job.title}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">Location: {job.location}</Card.Subtitle>
//           <Card.Subtitle className="mb-2 text-muted">Salary: {job.salary}</Card.Subtitle>
//           <Card.Text>{job.description}</Card.Text>
//         </Card.Body>
//         <ListGroup  className="list-group-flush ">
//           <ListGroupItem>Job Type: {job.jobtype}</ListGroupItem>
//           <ListGroupItem>Role: {job.role}</ListGroupItem>
//           <ListGroupItem>Education Level: {job.educationLevel}</ListGroupItem>
//           <ListGroupItem>Experience Level: {job.experienceLevel}</ListGroupItem>
//           <ListGroupItem>Location: {job.location}</ListGroupItem>
//           <li className="list-group-item">Skills: {job.skills.join(', ')}</li>
//           <li className="list-group-item">Application Deadline: {job.applicationDeadline}</li>
//           <li className="list-group-item">Date Posted: {job.datePosted}</li>
//           {/* Add more job details as needed */}
//         </ListGroup>
//       </Card>
//       <br></br>
//       <div className='cont'>
//         <Button style={{maxWidth:"10%"}} variant="contained" onClick={applyForJob}>Apply Now</Button>
//       </div>
//     </Layout>
//   );
// }

// export default SingleJobPage;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import Layout from '../layout/layout';
// import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

// // Function to extract user ID from login response data
// const getUserIdAfterLogin = (responseData) => {
//   if (responseData && responseData.success && responseData.user && responseData.user._id) {
//     return responseData.user._id;
//   } else {
//     return null;
//   }
// };

// function SingleJobPage() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [userId, setUserId] = useState(null); // State to store the authenticated user's ID

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const response = await axios.get(`https://jobserver-1.onrender.com/api/route/jobs/getjob/${id}`);
//         setJob(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching job:', error);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   useEffect(() => {
//     const loginUser = async () => {
//       try {
//         // Make the API call to login and obtain the user ID after successful login
//         const response = await axios.post('https://jobserver-1.onrender.com/api/route/auth/login', { "email":"praneethvvsss@gmail.com" ,"password":"123456789"});
//         const loggedInUserId = getUserIdAfterLogin(response.data); // Extract user ID from login response
//         setUserId(loggedInUserId); // Set the user ID obtained after login
//       } catch (error) {
//         console.error('Error logging in:', error);
//       }
//     };

//     loginUser();
//   }, []);

//   // Function to handle applying for a job
//   const applyForJob = async () => {
//     try {
//       // Send a POST request to apply for the job with the authenticated user's ID
//       await axios.post(`http://localhost:3002/api/route/appliedjob/apply`, { jobId: id, userId });
//       toast.success('Successfully applied for the job!');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         toast.error('You have already applied for this job');
//       } else {
//         console.error('Error applying for job:', error);
//         toast.error('Failed to apply for the job');
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Layout className="mt-5">
//       <Card>
//         <Card.Body>
//           <Card.Title>{job.title}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">Location: {job.location}</Card.Subtitle>
//           <Card.Subtitle className="mb-2 text-muted">Salary: {job.salary}</Card.Subtitle>
//           <Card.Text>{job.description}</Card.Text>
//         </Card.Body>
//         <ListGroup className="list-group-flush">
//           <ListGroupItem>Job Type: {job.jobtype}</ListGroupItem>
//           <ListGroupItem>Role: {job.role}</ListGroupItem>
//           <ListGroupItem>Education Level: {job.educationLevel}</ListGroupItem>
//           <ListGroupItem>Experience Level: {job.experienceLevel}</ListGroupItem>
//           <ListGroupItem>Location: {job.location}</ListGroupItem>
//           <li className="list-group-item">Skills: {job.skills.join(', ')}</li>
//           <li className="list-group-item">Application Deadline: {job.applicationDeadline}</li>
//           <li className="list-group-item">Date Posted: {job.datePosted}</li>
//         </ListGroup>
//         <Button variant="contained" onClick={applyForJob}>Apply Now</Button>
//       </Card>
//     </Layout>
//   );
// }

// export default SingleJobPage;

