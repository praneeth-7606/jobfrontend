// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { JobTypesContext } from '../context/JobTypesContext';
// import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// const NewJobForm = () => {
//     const { jobTypes } = useContext(JobTypesContext);
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         location: '',
//         salary: '',
//         jobType: '', // Changed from 'role' to 'jobType'
//         applicationDeadline: '',
//         company: '',
//         skills: '',
//         datePosted: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://jobserver-1.onrender.com/api/route/jobs/addjob', formData);
//             console.log('New job created:', response.data);
//             // Optionally, redirect to another page or display a success message
//         } catch (error) {
//             console.error('Error creating job:', error);
//             // Handle error, e.g., display error message to the user
//         }
//     };

//     return (
//         <div style={{textAlign:"center"}}>
//             <h2>Create New Job</h2>
//             <form onSubmit={handleSubmit}>
//                 <TextField label="Title" name="title" value={formData.title} onChange={handleChange} required />
//                 <br />
//                 <TextField label="Description" name="description" value={formData.description} onChange={handleChange} required />
//                 <br />
//                 <TextField label="Location" name="location" value={formData.location} onChange={handleChange} required />
//                 <br />
//                 <TextField label="Salary" name="salary" value={formData.salary} onChange={handleChange} required />
//                 <br />
//                 <FormControl>
//                     <InputLabel>Job Type</InputLabel>
//                     {/* <Select
//   placeholder="Select a job type"
//   size="large"
//   value={formData.jobType || ''}
//   onChange={(e) => {
//     setFormData({ ...formData, jobType: e.target.value });
//   }}
// >
//   {jobTypes.map((jobType, index) => (
//     <MenuItem key={index} value={jobType}>
//       {jobType}
//     </MenuItem>
//   ))}
// </Select> */}
// <Select
//                         name="jobType"
//                         value={formData.jobType}
//                         onChange={handleChange}
//                         required
//                     >
//                         {jobTypes.map((jobTypes) => (
//                             <MenuItem key={jobTypes.id} value={jobTypes.id}>{jobTypes.name}</MenuItem>
//                         ))}
//                     </Select>

//                 </FormControl>
//                 <br />
//                 <TextField label="Application Deadline" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} required />
//                 <br />
//                 <TextField label="Company" name="company" value={formData.company} onChange={handleChange} required />
//                 <br />
//                 <TextField label="Skills" name="skills" value={formData.skills} onChange={handleChange} required />
//                 <br />
//                 <TextField label="Date Posted" name="datePosted" value={formData.datePosted} onChange={handleChange} required />
//                 <br />
//                 <Button type="submit">Create Job</Button>
//             </form>
//         </div>
//     );
// };

// export default NewJobForm;

import toast from 'react-hot-toast';
// import {toast} from "react-toastify"
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { JobTypesContext } from '../context/JobTypesContext';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const NewJobForm = () => {
    const { jobTypes } = useContext(JobTypesContext);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        salary: '',
        jobtype: '',
        company: '',
        skills: [],
        role:"",
        educationLevel:"",
        experienceLevel:"",

    });
    const [allJobTypes, setAllJobTypes] = useState([]);

    useEffect(() => {
        fetchAllJobTypes();
    }, []);

    const fetchAllJobTypes = async () => {
        try {
            const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobtypes/get-jobtype');
            setAllJobTypes(response.data.category);
        } catch (error) {
            console.error('Error fetching job types:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name==="skills"){
            const skillsArray = value.split(',').map(skill => skill.trim());
            setFormData({...formData,[name]:skillsArray})
        }
        else{
            setFormData({ ...formData, [name]: value });
    };
        }
        

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const skillsArray = formData.skills.split(",").map(skill => skill.trim());
            // const jobData = { ...,  };
            const response = await axios.post('https://jobserver-1.onrender.com/api/route/jobs/addjob', formData);
            console.log('New job created:', response.data);
            if (response.data.success) {
                toast.success(response.data.message);
                // alert("New job created successfully!")
                console.log('Job created successfully:', response.data.job);
                
                // Optionally, reset form fields after successful submission
                setFormData({
                  title: '',
                  description: '',
                  location: '',
                salary: '',
                jobtype: '',
                company: '',
                skills: [],
                role:"",
                educationLevel:"",
                experienceLevel:"",
                  // Reset other fields as needed
                });
              } else {
                console.error('Error creating job:', response.data.message);
              }



            // Optionally, redirect to another page or display a success message
        } catch (error) {
            console.error('Error creating job:', error);
            // Handle error, e.g., display error message to the user
        }
    };

    return (
        <div style={{textAlign:"center"}}>
            <h2>Create New Job</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Title" name="title" value={formData.title} onChange={handleChange} required />
                <br />
                <TextField label="Description" name="description" value={formData.description} onChange={handleChange} required />
                <br />
                <TextField label="Location" name="location" value={formData.location} onChange={handleChange} required />
                <br />
                <TextField label="Salary" name="salary" value={formData.salary} onChange={handleChange} required />
                <br />
                <FormControl>
                    <InputLabel>Job Type</InputLabel>
                    <Select
                        name="jobtype"
                        value={formData.jobtype}
                        onChange={handleChange}
                        required
                    >
                        {allJobTypes.map((jobtype) => (
                            <MenuItem key={jobtype._id} value={jobtype.name}>{jobtype.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/* <TextField label="J" name="salary" value={formData.salary} onChange={handleChange} required /> */}
                <br />
                {/* <TextField label="Application Deadline" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} required /> */}
                <br />
                <TextField label="Company" name="company" value={formData.company} onChange={handleChange} required />
                <br />
                <TextField label="Skills" name="skills" value={formData.skills.join(",")} onChange={handleChange} required />

                <br />
<TextField label="experienceLevel" name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} required />
<br>
</br>
<TextField label="educationLevels" name="educationLevel" value={formData.educationLevel} onChange={handleChange} required />
<br></br>
{/* <TextField label="Skills" name="skills" value={formData.skills} onChange={handleChange} required /> */}
<br></br>

                {/* <TextField label="Date Posted" name="datePosted" value={formData.datePosted} onChange={handleChange} required /> */}
                <br></br>
                <TextField label="Role" name="role" value={formData.role} onChange={handleChange} required />
                <br />
                <Button type="submit">Create Job</Button>
            </form>
        </div>
    );
};

export default NewJobForm;





