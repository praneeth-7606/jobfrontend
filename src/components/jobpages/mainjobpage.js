

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';

// import JobCard from './jobcard';

// const JobListPage = ({ job }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(4); // Change the number of items per page as needed

//   useEffect(() => {
//     // Fetch job data from the API
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobs/getjobs');
//         setJobs(response.data); // Assuming the API response is an array of job objects
//       } catch (error) {
//         console.error('Error fetching job data:', error);
//       }
//     };

//     fetchJobs();
//   }, []);

//   // Get current jobs
//   const indexOfLastJob = currentPage * itemsPerPage;
//   const indexOfFirstJob = indexOfLastJob - itemsPerPage;
//   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//   // Change page
//   const handleChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   return (
//     <div className="container">
//       <h1 className="" style={{ textAlign: "center",marginTop:"-2%" }}>Job Listings</h1>
//       <div className="row">
//         {currentJobs.map(job => (
//           <div className="col-lg-4 col-md-6 mb-4" key={job._id}>
//             <JobCard job={job} />
//           </div>
//         ))}
//       </div>
//       <Stack spacing={2} direction="row" justifyContent="center" style={{ marginTop: "20px" }}>
//         <Pagination count={Math.ceil(jobs.length / itemsPerPage)} page={currentPage} onChange={handleChange} color="primary" />
//       </Stack>
//     </div>
//   );
// };

// export default JobListPage;


// JobListPage.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';

// import JobCard from './jobcard';

// const JobListPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [jobTypeFilter, setJobTypeFilter] = useState('');
//   const [companyFilter, setCompanyFilter] = useState('');

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobs/getjobs', {
//           params: { jobType: jobTypeFilter, company: companyFilter }
//         });
//         setJobs(response.data);
//       } catch (error) {
//         console.error('Error fetching job data:', error);
//       }
//     };

//     fetchJobs();
//   }, [jobTypeFilter, companyFilter]);

//   return (
//     <div className="container">
//       {/* Filter options */}
//       <div>
//         <label>Job Type:</label>
//         <select value={jobTypeFilter} onChange={e => setJobTypeFilter(e.target.value)}>
//           <option value="">All</option>
//           <option value="Full-Time">Full-time</option>
//           <option value="Part-Time">Part-time</option>
//           <option value="Remote">Contract</option>
//         </select>
//       </div>
//       <div>
//         <label>Company:</label>
//         <input type="text" value={companyFilter} onChange={e => setCompanyFilter(e.target.value)} />
//       </div>

//       {/* Job cards */}
//       <div className="row">
//         {jobs.map(job => (
//           <div className="col-lg-4 col-md-6 mb-4" key={job._id}>
//             <JobCard job={job} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobListPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';
// import {  Col, Container, Form, Row } from 'react-bootstrap';
// import { Button } from '@mui/material';
// import JobCard from './jobcard';

// const JobListPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [jobTypeFilter, setJobTypeFilter] = useState('');
//   const [companyFilter, setCompanyFilter] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(4); // Change the number of items per page as needed

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobs/getjobs', {
//           params: { jobType: jobTypeFilter, company: companyFilter }
//         });
//         setJobs(response.data);
//       } catch (error) {
//         console.error('Error fetching job data:', error);
//       }
//     };

//     fetchJobs();
//   }, [jobTypeFilter, companyFilter]);

//   // Pagination
//   const indexOfLastJob = currentPage * itemsPerPage;
//   const indexOfFirstJob = indexOfLastJob - itemsPerPage;
//   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
//   const pageCount = Math.ceil(jobs.length / itemsPerPage);

//   const handleChangePage = (event, value) => {
//     setCurrentPage(value);
//   };

//   return (
//     <Container>
//       {/* Filter options */}
//       <Row className="mb-5">
//         <Col md={2}>
//           <Form.Group controlId="jobTypeFilter">
//             <Form.Label>Job Type:</Form.Label>
//             <Form.Select value={jobTypeFilter} onChange={e => setJobTypeFilter(e.target.value)}>
//               <option value="">All</option>
//               <option value="Full-Time">Full-Time</option>
//               <option value="Part-Time">Part-Time</option>
//               <option value="Remote">Remote</option>
//               <option value="Internship">Internship</option>
//             </Form.Select>
//           </Form.Group>
//         </Col>
//         <Col md={2}>
//           <Form.Group controlId="companyFilter">
//             <Form.Label>Company:</Form.Label>
//             <Form.Control type="text" value={companyFilter} onChange={e => setCompanyFilter(e.target.value)} />
//           </Form.Group>
//         </Col>
        
//       </Row>

//       {/* Job cards */}
//       <Row>
//         {currentJobs.map(job => (
//           <Col key={job._id} lg={4} md={6} className="mb-4">
//             <JobCard job={job} />
//           </Col>
//         ))}
//       </Row>

//       {/* Pagination */}
//       <Stack spacing={2} direction="row" justifyContent="center" className="mt-4">
//         <Pagination count={pageCount} page={currentPage} onChange={handleChangePage} color="primary" />
//       </Stack>
//     </Container>
//   );
// };

// export default JobListPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import JobCard from './jobcard';
import {  InputGroup } from 'react-bootstrap';

import BusinessIcon from '@mui/icons-material/Business';
const JobListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Change the number of items per page as needed

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobs/getjobs', {
          params: { jobType: jobTypeFilter, company: companyFilter, location: locationFilter }
        });
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobs();
  }, [jobTypeFilter, companyFilter, locationFilter]);

  // Pagination
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const pageCount = Math.ceil(jobs.length / itemsPerPage);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      
      {/* Filter options */}
      <Row className="mb-3 pb-3 justify-content-center ">
        <Col md={3}>
         
          <Form.Group controlId="jobTypeFilter">
            {/* <Form.Label><strong>Job Type:</strong></Form.Label> */}
            <Form.Select value={jobTypeFilter} onChange={e => setJobTypeFilter(e.target.value)}>
              <option value="">Select JobType</option>
              <option value="Full-Time">Full-time</option>
              <option value="Part-Time">Part-time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="companyFilter">
          {/* <Form.Label><strong>Company:</strong></Form.Label> */}
            <InputGroup>
    <InputGroup.Text><BusinessIcon /></InputGroup.Text> {/* Add icon inside InputGroup.Text */}
    <Form.Control type="text" placeholder="Select the company name" value={companyFilter} onChange={e => setCompanyFilter(e.target.value)} />
  </InputGroup>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="locationFilter">
            {/* <Form.Label><strong>Location:</strong></Form.Label> */}
            <InputGroup>
    <InputGroup.Text><MyLocationIcon /></InputGroup.Text>
            <Form.Control type="text" placeholder="Select  location " value={locationFilter} onChange={e => setLocationFilter(e.target.value)}/>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      {/* Job cards */}
      <Row>
        {currentJobs.map(job => (
          <Col key={job._id} lg={4} md={6} className="mb-4">
            <JobCard job={job} />
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Stack spacing={2} direction="row" justifyContent="center" className="mt-4">
        <Pagination count={pageCount} page={currentPage} onChange={handleChangePage} color="primary" />
      </Stack>
    </Container>
  );
};

export default JobListPage;
