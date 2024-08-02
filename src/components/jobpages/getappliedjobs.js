// // http://localhost:3002/api/route/apply/${userId}

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import { useAuth } from '../context/auth';

// // const Getappliedjobs = () => {
// //   const [auth,setAuth,userId]   = useAuth() // Fetching userId from URL params
// //   const [appliedJobs, setAppliedJobs] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchAppliedJobs = async () => {
// //       try {
// //         const response = await axios.get(`https://jobserver-1.onrender.com/api/route/appliedjob/apply/${userId}`);
// //         setAppliedJobs(response.data.appliedJobs);
// //         console.log(userId)
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching applied jobs:', error);
// //       }
// //     };

// //     fetchAppliedJobs();
// //   }, [userId]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>Applied Jobs</h2>
      
// //       <ul>
// //         {appliedJobs.map((job) => (
// //           <li key={job._id}>
// //             <p>Job Title: {job.title}</p>
// //             <p>Description: {job.description}</p>
// //             {/* Add more job details as needed */}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Getappliedjobs;



// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// // import { useAuth } from '../context/auth';

// // const Getappliedjobs = () => {
// //   const {auth,userId} = useAuth(); // Fetching userId from context
// // //   const { userId } = auth.user; // Assuming your user object has a userId field
// //   const [appliedJobs, setAppliedJobs] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchAppliedJobs = async () => {
// //       try {
// //         const response = await axios.get(`https://jobserver-1.onrender.com/api/route/appliedjob/apply/${userId}`, {
// //           headers: {
// //             Authorization: `Bearer ${auth.token}` // Include the JWT in the Authorization header
// //           }
// //         });
// //         setAppliedJobs(response.data.appliedJobs);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching applied jobs:', error);
// //       }
// //     };

// //     fetchAppliedJobs();
// //   }, [auth.token, userId]); // Include auth.token and userId in the dependencies array

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>Applied Jobs</h2>
      
// //       <ul>
// //         {appliedJobs.map((job) => (
// //           <li key={job._id}>
// //             <p>Job Title: {job.title}</p>
// //             <p>Description: {job.description}</p>
// //             {/* Add more job details as needed */}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Getappliedjobs;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../context/auth';

// // const Getappliedjobs = () => {
// //   const { auth, userId  } = useAuth(); // Fetching auth context
// // //   const {} = auth.user; // Assuming your user object has a userId field
// //   const [appliedJobs, setAppliedJobs] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchAppliedJobs = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:3002/api/route/appliedjob/apply/${userId}`, {
// //           headers: {
// //             Authorization: `Bearer ${auth.token}` // Include the JWT in the Authorization header
// //           }
// //         });
// //         setAppliedJobs(response.data.appliedJobs);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching applied jobs:', error);
// //       }
// //     };

// //     fetchAppliedJobs();
// //   }, [auth.token, userId]); // Include auth.token and userId in the dependencies array

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>Applied Jobs</h2>
      
// //       <ul>
// //         {appliedJobs.map((job) => (
// //           <li key={job._id}>
// //             <p>Job Title: {job.title}</p>
// //             <p>Description: {job.description}</p>
// //             {/* Add more job details as needed */}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Getappliedjobs;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../context/auth';

// // const GetAppliedJobs = () => {
// //   const { auth } = useAuth();
// //   const { userId } = auth;
// //   const [appliedJobs, setAppliedJobs] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchAppliedJobs = async () => {
// //       try {
// //         const response = await axios.get(`https://jobserver-1.onrender.com/api/route/appliedjob/apply/${userId}`, {
// //           headers: {
// //             Authorization: `Bearer ${auth.token}`
// //           }
// //         });
// //         setAppliedJobs(response.data.appliedJobs);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching applied jobs:', error);
// //       }
// //     };

// //     fetchAppliedJobs();
// //   }, [auth.token, userId]); // Include auth.token and userId in the dependencies array

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>Applied Jobs</h2>
      
// //       <ul>
// //         {appliedJobs.map((job) => (
// //           <li key={job._id}>
// //             <p>Job Title: {job.title}</p>
// //             <p>Description: {job.description}</p>
// //             {/* Add more job details as needed */}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default GetAppliedJobs;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../context/auth';

// // const GetAppliedJobs = () => {
// //   const { auth } = useAuth();
// //   const { userId, token } = auth;
// //   const [appliedJobs, setAppliedJobs] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchAppliedJobs = async () => {
// //       try {
// //         const response = await axios.get(`https://jobserver-1.onrender.com/api/route/appliedjob/apply/${userId}`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         setAppliedJobs(response.data.appliedJobs);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching applied jobs:', error);
// //       }
// //     };

// //     fetchAppliedJobs();
// //   }, [userId, token]); // Include userId and token in the dependencies array

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>Applied Jobs</h2>
      
// //       <ul>
// //         {appliedJobs.map((job) => (
// //           <li key={job._id}>
// //             <p>Job Title: {job.title}</p>
// //             <p>Description: {job.description}</p>
// //             {/* Add more job details as needed */}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default GetAppliedJobs;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/auth';
// import { Spinner, Alert, ListGroup } from 'react-bootstrap';
// import { Row,Col ,Card} from 'react-bootstrap';
// import Accordion from 'react-bootstrap/Accordion';
// // import { Layout } from 'antd';
// import Layout from '../layout/layout';

// const AppliedJobsList = () => {
//   const { auth ,userId} = useAuth();
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
 
  
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAppliedJobs = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3002/api/route/appliedjob/apply/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${auth.token}`
//           }
//         });
//         setAppliedJobs(response.data.appliedJobs);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching applied jobs:', error);
//       }
//     };

//     fetchAppliedJobs();
//   }, [auth.token, userId]);
//   if (loading) {
//     return (
//       <div className="text-center mt-5">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     // <Layout title={"list of applied jobs"}>
//     <Accordion defaultActiveKey="1">
//         <h1 style={{textAlign:"center"}}> List Of Applied Jobs</h1>
//       {appliedJobs.map((job, index) => (
//         <Accordion.Item key={index} eventKey={index.toString()}>
//           <Accordion.Header style={{textDecoration:"capitalize"}}>{` ${job.jobId.title}`}</Accordion.Header>
//           <Accordion.Body>
//             <p>{` ${job.jobId.description}`}</p>
//             <p>{` ${job.jobId.company}`}</p>
//             <p>{` ${job.jobId.location}`}</p>
//             <p>{` ${job.jobId.role}`}</p>
//             <p>{` ${job.jobId.jobtype}`}</p>
//           </Accordion.Body>
//         </Accordion.Item>
//       ))}
//       {error && (
//         <Accordion.Item eventKey={(appliedJobs.length + 1).toString()}>
//           <Accordion.Header>Error</Accordion.Header>
//           <Accordion.Body>
//             <Alert variant="danger">{error}</Alert>
//           </Accordion.Body>
//         </Accordion.Item>
//       )}
//     </Accordion>
//     // </Layout>
//   );
// };

// export default AppliedJobsList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { Spinner, Alert, Accordion, Card, Button } from 'react-bootstrap';

const AppliedJobsList = () => {
  const { auth, userId } = useAuth();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await axios.get(`https://jobserver-1.onrender.com/api/route/appliedjob/apply/${userId}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        });
        setAppliedJobs(response.data.appliedJobs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };

    fetchAppliedJobs();
  }, [auth.token, userId]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Card style={{paddingTop:"2%",justifyContent:"center"}}>
      <Card.Header>
        <h1 className="text-center">List Of Applied Jobs</h1>
      </Card.Header>
      <Card.Body >
        <Accordion defaultActiveKey="0" style={{ width: '80%', margin: 'auto' }}>
          {appliedJobs.map((job, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header style={{ textDecoration: "capitalize" }}>{` ${job.jobId.title}`}</Accordion.Header>
              <Accordion.Body>
                <p><strong>Description:</strong>{` ${job.jobId.description}`}</p>
                <p><strong>Company:</strong>{` ${job.jobId.company}`}</p>
                <p><strong>Location:</strong>{` ${job.jobId.location}`}</p>
                <p><strong>Jobrole:</strong>{` ${job.jobId.role}`}</p>
                <p><strong>Jobtype:</strong>{` ${job.jobId.jobtype}`}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
          {error && (
            <Accordion.Item eventKey={(appliedJobs.length + 1).toString()}>
              <Accordion.Header>Error</Accordion.Header>
              <Accordion.Body>
                <Alert variant="danger">{error}</Alert>
              </Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default AppliedJobsList;
