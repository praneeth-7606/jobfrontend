// import React from 'react'

// function Jobcard() {
//     const [jobDetails, setJobDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchJobDetails = async () => {
//             try {
//                 const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobs/getjobs');
//                 setJobDetails(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };

//         fetchJobDetails();
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;
//     if (!jobDetails) return <p>No job details found.</p>;

//   return (
//     <div>
//         <h1>Job Details</h1>
//             <ul>
//                 {jobDetails.map(job => (
//                     <li key={job.id}>
//                         <h2>{job.title}</h2>
//                         <p>Company: {job.company}</p>
//                         <p>Location: {job.location}</p>
//                         <p>Description: {job.description}</p>
//                         <p>Role: {job.role}</p>
//                         <p>Salary:{job.salary}</p>
//                         <p>Jobtype:{job.jobtype}</p>
//                         <p>Skills:{job.skills}</p>
//                         <p>educationLevel:{job.educationLevel}</p>
//                         <p>experienceLevel:{job.experienceLevel}</p>
//                     </li>
//                 ))}
//             </ul>
//     </div>
//   )
// }

// export default Jobcard
// import { useState,useEffect } from 'react'
// import axios from "axios"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//     const [jobDetails, setJobDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchJobDetails = async () => {
//             try {
//                 const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobs/getjobs');
//                 setJobDetails(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };

//         fetchJobDetails();
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;
//     if (!jobDetails) return <p>No job details found.</p>;

//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title></Card.Title>
//         <Card.Text>
//         <h1>Job Details</h1>
//           <ul>
//                 {jobDetails.map(job => (
//                     <li key={job.id}>
//                          <h2>{job.title}</h2>
//                         <p>Company: {job.company}</p>
//                         <p>Location: {job.location}</p>
//                        <p>Salary:{job.salary}</p>
//                          <p>Jobtype:{job.jobtype}</p>
//                          <p>Skills:{job.skills}</p>
//                          <p>educationLevel:{job.educationLevel}</p>
//                          <p>experienceLevel:{job.experienceLevel}</p>
//                      </li>
//                  ))}
//              </ul>
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;


import React from 'react';
import { Row,Col ,Card} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import SingleJobPage from './singlejobpage';
import { useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Layout from '../layout/layout';
import Jobimage from './jobimage';
import { Button } from '@mui/material';
const JobCard = ({ job,jobId }) => {
    const navigate=useNavigate()
    const showImage = job.path && job.path.trim() !== '';

    const handlechange=()=>{
        navigate(`my/${job._id}`);
    }
    
  return (
<Button variant='success' onClick={handlechange}style={{border:"none"}}>
      {/* <Accordion defaultActiveKey="1"> */}
      <Accordion.Item eventKey="0">
        <Accordion.Header className="bg-light">
        {/* <div className="card mb-3"> */}
      <div className="card-body"> 
        <Row>

        <Col className="card-title "><h3 style={{textTransform:'capitalize'}}>{job.title}</h3>
        <Row style={{textTransform:"cap"}}>
        <Col>Company: {job.company}</Col>
        <Col>Location: {job.location}</Col>
      </Row>
        </Col>
      </Row>
      <Row className='d-flex justify-content-between'> 
        {/* <Col className="bg-light px-1  rounded m-2" style={{textAlign:"center"}}><p className="text-primary">{job.jobtype}</p></Col>
        <Col className="bg-light px-1  rounded m-2" style={{textAlign:"center",backgroundColor: "#F0F8FF" }}> <p className="text-primary">{job.role}</p></Col>
        <Col className="bg-light px-2  rounded m-2" style={{textAlign:"center",backgroundColor: "#F0F8FF" }}> <p className="text-primary">{job.educationLevel}</p></Col> */}

<Col className="bg-light px-1 rounded m-2 d-flex align-items-center justify-content-center">
                <p style={{textTransform:"capitalize"}} className="text-primary m-0">{job.jobtype}</p>
            </Col>
            <Col className="bg-light px-1 rounded m-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#F0F8FF" }}>
                <p style={{textTransform:"capitalize"}} className="text-primary m-0">{job.role}</p>
            </Col>
            <Col className="bg-light px-2 rounded m-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#F0F8FF" }}>
                <p style={{textTransform:"capitalize"}} className="text-primary m-0">{job.educationLevel}</p>
            </Col>
      </Row>
      {/* <Stack className="bg-light px-1  rounded m-2" style={{textAlign:"center"}} direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack> */}
      </div>
      {/* </div> */}
            
        </Accordion.Header>
        <Accordion.Body>
        <p className="card-text">{job.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Salary: {job.salary}</li>
          <li className="list-group-item"></li>
          <li className="list-group-item">Skills: {job.skills.join(', ')}</li>
          <li className="list-group-item">Experience Level: {job.experienceLevel}</li>
          <li className="list-group-item"></li>
          <li className="list-group-item">Role: {job.role}</li>
          <li className="list-group-item">Application Deadline: {job.applicationDeadline}</li>
          <li className="list-group-item">Date Posted: {job.datePosted}</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      {/* </Accordion>  */}
       </Button>
      // </div>
    
  );
};

export default JobCard;

