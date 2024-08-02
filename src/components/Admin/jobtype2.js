// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const JobTypeManagement = () => {
//   const [jobTypes, setJobTypes] = useState([]);
//   const [newJobTypeName, setNewJobTypeName] = useState('');
//   const [editJobType, setEditJobType] = useState(null);
//   const [updatedJobTypeName, setUpdatedJobTypeName] = useState('');
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     fetchJobTypes();
//   }, []);

//   const fetchJobTypes = async () => {
//     try {
//       const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobtypes/get-jobtype');
//       setJobTypes(response.data.category);
//     } catch (error) {
//       console.error('Error fetching job types:', error);
//     }
//   };

//   const createJobType = async () => {
//     try {
//       await axios.post('https://jobserver-1.onrender.com/api/route/jobtypes/createjobtype', { name: newJobTypeName });
//       setNewJobTypeName('');
//       fetchJobTypes();
//     } catch (error) {
//       console.error('Error creating job type:', error);
//     }
//   };

  

//   const updateJobType = async () => {
//     try {
//       const response = await axios.put(`https://jobserver-1.onrender.com/api/route/jobtypes/update-jobtype/${editJobType._id}`, {
//         name: updatedJobTypeName,
//       });
//       if (response.data.success) {
//         console.log('Job type updated successfully');
//         fetchJobTypes(); // Refresh job types after update
//         setEditJobType(null); // Reset edit mode
//       } else {
//         console.error('Error updating job type:', response.data.message);
//       }
//     } catch (error) {
//       console.error('Error updating job type:', error);
//     }
//   };


//   const deleteJobType = async (id) => {
//     try {
//       await axios.delete(`https://jobserver-1.onrender.com/api/route/jobtypes/delete-jobtype/${id}`);
//       fetchJobTypes();
//     } catch (error) {
//       console.error('Error deleting job type:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Job Type Management</h1>
//       <div>
//         <input type="text" value={newJobTypeName} onChange={(e) => setNewJobTypeName(e.target.value)} />
//         <button onClick={createJobType}>Add Job Type</button>
//       </div>
//       <ul>
        
//         {jobTypes.map(jobType => (
//   <li key={jobType._id}>
//     {editJobType && editJobType._id === jobType._id ? (
//       <>
//         <input type="text" value={updatedJobTypeName} onChange={(e) => setUpdatedJobTypeName(e.target.value)} />
//         <button onClick={updateJobType}>Update</button>
//       </>
//     ) : (
//       <>
//         <span>{jobType.name}</span>
//         <button onClick={() => {
//           setEditJobType(jobType);
//           setUpdatedJobTypeName(jobType.name); // Set initial value for updatedJobTypeName
//         }}>Edit</button>
//         <button onClick={() => deleteJobType(jobType._id)}>Delete</button>
//       </>
//     )}
//   </li>
// ))}
//       </ul>
//     </div>
//   );
// };

// export default JobTypeManagement;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form ,Container,Row,Col} from 'react-bootstrap';
import Layout from '../layout/layout';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon  from '@mui/icons-material/Edit';
const JobTypeManagement = () => {
  const [jobTypes, setJobTypes] = useState([]);
  const [newJobTypeName, setNewJobTypeName] = useState('');
  const [editJobType, setEditJobType] = useState(null);
  const [updatedJobTypeName, setUpdatedJobTypeName] = useState('');

  useEffect(() => {
    fetchJobTypes();
  }, []);

  const fetchJobTypes = async () => {
    try {
      const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobtypes/get-jobtype');
      setJobTypes(response.data.category);
    } catch (error) {
      console.error('Error fetching job types:', error);
    }
  };

  const createJobType = async () => {
    try {
      await axios.post('https://jobserver-1.onrender.com/api/route/jobtypes/createjobtype', { name: newJobTypeName });
      setNewJobTypeName('');
      fetchJobTypes();
    } catch (error) {
      console.error('Error creating job type:', error);
    }
  };

  const updateJobType = async () => {
    try {
      const response = await axios.put(`https://jobserver-1.onrender.com/api/route/jobtypes/update-jobtype/${editJobType._id}`, {
        name: updatedJobTypeName,
      });
      if (response.data.success) {
        console.log('Job type updated successfully');
        fetchJobTypes(); // Refresh job types after update
        setEditJobType(null); // Reset edit mode
      } else {
        console.error('Error updating job type:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating job type:', error);
    }
  };

  const deleteJobType = async (id) => {
    try {
      await axios.delete(`https://jobserver-1.onrender.com/api/route/jobtypes/delete-jobtype/${id}`);
      fetchJobTypes();
    } catch (error) {
      console.error('Error deleting job type:', error);
    }
  };

  return (
    <Layout>
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '85vh' }}>
      <Card style={{ width: '50%' }}>
        <Card.Body>
          <h1 className="text-center">Job Type Management</h1>
          <Form>
            <Form.Group controlId="newJobTypeName">
              <Form.Label>Add New Job Type</Form.Label>
              <Row>
                <Col md={8}> {/* Use md={8} to allocate 8/12 width for the text field */}
                  <Form.Control type="text" value={newJobTypeName} onChange={(e) => setNewJobTypeName(e.target.value)} />
                </Col>
                <Col md={4}> {/* Use md={4} to allocate 4/12 width for the button */}
                  <Button variant="primary" onClick={createJobType}>Add JobType</Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
          {jobTypes.map(jobType => (
            <Card key={jobType._id} className="my-3">
              <Card.Body>
                {editJobType && editJobType._id === jobType._id ? (
                  <Form>
                    <Row>
                    <Col><Form.Group controlId="updatedJobTypeName">
                      <Form.Control type="text" value={updatedJobTypeName} onChange={(e) => setUpdatedJobTypeName(e.target.value)} />
                    </Form.Group></Col>
                    <Col><Button variant="success" onClick={updateJobType}>Update</Button></Col>
                    </Row>
                  </Form>
                ) : (
                  <>
                    <Row>
                      <Col>
                        <Card.Text>{jobType.name}</Card.Text>
                      </Col>
                      <Col>
                        <Button variant="info" onClick={() => {
                          setEditJobType(jobType);
                          setUpdatedJobTypeName(jobType.name); // Set initial value for updatedJobTypeName
                        }}><EditIcon/> Edit</Button>
                        
                      </Col>
                      <Col>
                        <Button variant="danger" onClick={() => deleteJobType(jobType._id)}><DeleteIcon/> Delete</Button>
                      </Col>
                    </Row>
                  </>
                )}
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </Container>
  </Layout>
  
  );
};


export default JobTypeManagement;
