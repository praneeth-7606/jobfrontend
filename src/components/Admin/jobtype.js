// import React, { useState, useEffect } from 'react';
// import { Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { Card } from 'react-bootstrap';

// function Jobtype() {
//     const [jobTypes, setJobTypes] = useState(() => {
//         const storedJobTypes = localStorage.getItem('jobTypes');
//         return storedJobTypes ? JSON.parse(storedJobTypes) : [];
//     });
//     const [newJobType, setNewJobType] = useState('');
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         localStorage.setItem('jobTypes', JSON.stringify(jobTypes));
//     }, [jobTypes]);

//     const addJobType = () => {
//         if (newJobType.trim() !== '') {
//             setJobTypes([...jobTypes, newJobType]);
//             setNewJobType('');
//         }
//     };

//     const deleteJobType = (index) => {
//         const updatedJobTypes = [...jobTypes];
//         updatedJobTypes.splice(index, 1);
//         setJobTypes(updatedJobTypes);
//         setEditIndex(null); // Reset editIndex when deleting
//     };

//     const handleEdit = (index) => {
//         setEditIndex(index);
//     };

//     const handleSave = (index, updatedValue) => {
//         const updatedJobTypes = [...jobTypes];
//         updatedJobTypes[index] = updatedValue;
//         setJobTypes(updatedJobTypes);
//         setEditIndex(null); // Reset editIndex after saving
//     };

//     return (
//         <div style={{textAlign:"center"}}>
//             <h2>Job Types</h2>
//             <List style={{width:"20%",alignContent:"center",textAlign:"center",alignItems:'center',justifyContent:'center'}}>
//                 {jobTypes.map((type, index) => (
//                     <ListItem key={index}>
//                         {editIndex === index ? (
//                             <TextField
//                                 value={type}
//                                 onChange={(e) => handleSave(index, e.target.value)}
//                                 autoFocus
//                             />
//                         ) : (
//                             <>
//                                 <ListItemText primary={type} />
//                                 <ListItemSecondaryAction>
//                                     <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(index)}>
//                                         <EditIcon />
//                                     </IconButton>
//                                     <IconButton edge="end" aria-label="delete" onClick={() => deleteJobType(index)}>
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </ListItemSecondaryAction>
//                             </>
//                         )}
//                     </ListItem>
//                 ))}
//             </List>
//             <Card style={{width:"20%"}}>
//                 <TextField
//                     label="New Job Type"
//                     variant="outlined"
//                     value={newJobType}
//                     onChange={(e) => setNewJobType(e.target.value)}
//                     placeholder="Enter new job type"
//                 />
//                 <br></br>
//                 <Button variant="contained" onClick={addJobType}>Add</Button>
//             </Card>
//         </div>
//     );
// }

// export default Jobtype;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Card } from 'react-bootstrap';

function Jobtype() {
    // const jobTypes=[]
    const [jobTypes, setJobTypes] = useState([]);
    const [newJobType, setNewJobType] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        fetchJobTypes();
    }, []);

    const fetchJobTypes = async () => {
        try {
            const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobtypes/get-jobtype');
            setJobTypes(response.data);
        } catch (error) {
            console.error('Error fetching job types:', error);
        }
    };

    const addJobType = async () => {
        if (newJobType.trim() !== '') {
            try {
                await axios.post('https://jobserver-1.onrender.com/api/route/jobtypes/createjobtype', { name: newJobType });
                setNewJobType('');
                fetchJobTypes();
            } catch (error) {
                console.error('Error adding job type:', error);
            }
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

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    const handleSave = async (index, updatedValue, id) => {
        try {
            await axios.put(`https://jobserver-1.onrender.com/api/route/jobtypes/update-jobtype/${id}`, { name: updatedValue });
            fetchJobTypes();
            setEditIndex(null);
        } catch (error) {
            console.error('Error updating job type:', error);
        }
    };

    return (
        <div style={{textAlign:"center"}}>
            <h2>Job Types</h2>
            <List style={{width:"20%",alignContent:"center",textAlign:"center",alignItems:'center',justifyContent:'center'}}>
            {console.log("jobTypes:", jobTypes)}
                {jobTypes.map((type, index) => (
                    <ListItem key={type._id}>
                        {editIndex === index ? (
                            <TextField
                                value={type.name}
                                onChange={(e) => handleSave(index, e.target.value, type._id)}
                                autoFocus
                            />
                        ) : (
                            <>
                                <ListItemText primary={type.name} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(index)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteJobType(type._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
            <Card style={{width:"20%"}}>
                <TextField
                    label="New Job Type"
                    variant="outlined"
                    value={newJobType}
                    onChange={(e) => setNewJobType(e.target.value)}
                    placeholder="Enter new job type"
                />
                <br></br>
                <Button variant="contained" onClick={addJobType}>Add</Button>
            </Card>
        </div>
    );
}

export default Jobtype;


// import React, { useEffect, useState } from "react";
// import Layout from "../layout/layout";
// // import Adminmenu from "../layout/adminmenu";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { Modal } from "antd";
// // import Categoryform from "../form/categoryform";

// const CreateJobType = () => {
//   const [jobTypes, setJobTypes] = useState([]);
//   const [jobTypeName, setJobTypeName] = useState("");
//   const [visible, setVisible] = useState(false);
//   const [selectedJobType, setSelectedJobType] = useState(null);
//   const [updatedJobTypeName, setUpdatedJobTypeName] = useState("");

//   const handleCreateJobType = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post("http://localhost:3002/api/route/jobtypes/createjobtype", {
//         name: jobTypeName,
//       });
//       if (data?.success) {
//         toast.success(`${jobTypeName} job type is created`);
//         getAllJobTypes();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong while creating job type");
//     }
//   };

//   const getAllJobTypes = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3002/api/route/jobtypes/get-jobtype");
//       if (data.success) {
//         setJobTypes(data.jobTypes);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong while getting job types");
//     }
//   };

//   useEffect(() => {
//     getAllJobTypes();
//   }, []);

//   const handleUpdateJobType = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(
//         `http://localhost:3002/api/route/jobtypes/update-jobtype/${id}`,
//         { name: updatedJobTypeName }
//       );
//       if (data.success) {
//         toast.success(`${updatedJobTypeName} is updated`);
//         setSelectedJobType(null);
//         setUpdatedJobTypeName("");
//         setVisible(false);
//         getAllJobTypes();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong while updating job type");
//     }
//   };

//   const handleDeleteJobType = async (id) => {
//     try {
//       const { data } = await axios.delete(
//         `http://localhost:3002/api/route/jobtypes/delete-jobtype/${id}`
//       );
//       if (data.success) {
//         toast.success(`Job type is deleted`);
//         getAllJobTypes();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong while deleting job type");
//     }
//   };

//   return (
//     <Layout title={"Dashboard - Create Job Type"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             {/* <Adminmenu /> */}
//           </div>
//           <div className="col-md-9">
//             <h1>Manage Job Types</h1>
//             <div className="p-3 w-50">
//               <Categoryform
//                 handleSubmit={handleCreateJobType}
//                 value={jobTypeName}
//                 setValue={setJobTypeName}
//               />
//             </div>
//             <div className="w-75">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {jobTypes?.map((jobType) => (
//                     <tr key={jobType._id}>
//                       <td>{jobType.name}</td>
//                       <td>
//                         <button
//                           className="btn btn-primary ms-2"
//                           onClick={() => {
//                             setVisible(true);
//                             setUpdatedJobTypeName(jobType.name);
//                             setSelectedJobType(jobType);
//                           }}
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="btn btn-danger ms-2"
//                           onClick={() => {
//                             handleDeleteJobType(jobType._id);
//                           }}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <Modal
//               onCancel={() => setVisible(false)}
//               footer={null}
//               visible={visible}
//             >
//               <Categoryform
//                 value={updatedJobTypeName}
//                 setValue={setUpdatedJobTypeName}
//                 handleSubmit={handleUpdateJobType}
//               />
//             </Modal>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateJobType;

