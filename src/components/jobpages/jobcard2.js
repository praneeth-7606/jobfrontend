// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card, Accordion } from 'react-bootstrap';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Layout from '../layout/layout';

// const JobCard = ({ job }) => {
//     const navigate = useNavigate();
//     const [image, setImage] = useState(null);

//     useEffect(() => {
//         // Fetch image when the component mounts
//         fetchImage();
//     }, []);

//     const handleJobClick = () => {
//         navigate(`/my/${job._id}`);
//     };

//     const fetchImage = async () => {
//         try {
//             // Fetch image from the backend
//             const response = await axios.get(`https://jobserver-1.onrender.com/api/route/jobs/uploads/${job._id}`, {
//                 responseType: 'arraybuffer' // Set the response type to arraybuffer
//             });
//             // Convert the received image data to base64 format
//             const base64Image = Buffer.from(response.data, 'binary').toString('base64');
//             // Set the base64 image data to the state
//             setImage(`data:image/png;base64,${base64Image}`);
//         } catch (error) {
//             console.error('Error fetching image:', error);
//         }
//     };

//     return (
//         <div title="Job Details">
//             <button onClick={handleJobClick} style={{ border: "none" }}>
//                 <Accordion defaultActiveKey="1">
//                     <Accordion.Item eventKey="0">
//                         <Accordion.Header className="bg-light">
//                             <div className="card-body">
//                                 <Row>
//                                     <Col>
//                                         {image && <img src={image} alt="Job" style={{ width: '100px', height: '100px', marginRight: '10px' }} />}
//                                     </Col>
//                                     <Col className="card-title">
//                                         <h3>{job.title}</h3>
//                                         <Row>
//                                             <Col>Company: {job.company}</Col>
//                                             <Col>Location: {job.location}</Col>
//                                         </Row>
//                                     </Col>
//                                 </Row>
//                                 <Row>
//                                     <Col className="bg-light px-1  rounded m-2" style={{ textAlign: "center" }}><p className="text-primary">{job.jobtype}</p></Col>
//                                     <Col className="bg-light px-1  rounded m-2" style={{ textAlign: "center", backgroundColor: "#F0F8FF" }}> <p className="text-primary">{job.role}</p></Col>
//                                     <Col className="bg-light px-1  rounded m-2" style={{ textAlign: "center", backgroundColor: "#F0F8FF" }}> <p className="text-primary">{job.educationLevel}</p></Col>
//                                 </Row>
//                             </div>
//                         </Accordion.Header>
//                         <Accordion.Body>
//                             <p className="card-text">{job.description}</p>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item">Salary: {job.salary}</li>
//                                 <li className="list-group-item">Skills: {job.skills.join(', ')}</li>
//                                 <li className="list-group-item">Experience Level: {job.experienceLevel}</li>
//                                 <li className="list-group-item">Role: {job.role}</li>
//                                 <li className="list-group-item">Application Deadline: {job.applicationDeadline}</li>
//                                 <li className="list-group-item">Date Posted: {job.datePosted}</li>
//                             </ul>
//                         </Accordion.Body>
//                     </Accordion.Item>
//                 </Accordion>
//             </button>
//         </div>
//     );
// };

// export default JobCard;
