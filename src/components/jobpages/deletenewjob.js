
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ShowAppliedJobs() {
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [deletedJob, setDeletedJob] = useState(null);

//   useEffect(() => {
//     fetchAppliedJobs();
//   }, []);

//   const fetchAppliedJobs = async () => {
//     try {
//       const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobs/getjobs');
//       setAppliedJobs(response.data);
//     } catch (error) {
//       console.error('Error fetching applied jobs:', error);
//     }
//   };

//   const deleteJob = async (jobId) => {
//     try {
//       const response = await axios.delete(`https://jobserver-1.onrender.com/api/route/jobs/deletejob/${jobId}`);
//       setDeletedJob(response.data); // Store the deleted job
//       setAppliedJobs(appliedJobs.filter(job => job._id !== jobId)); // Remove the deleted job from the list
//     } catch (error) {
//       console.error('Error deleting job:', error);
//     }
//   };
//   const updateJob = async (jobId, updatedJob) => {
//     try {
//       await axios.put(`http://localhost:3002/api/route/appliedjob/apply/${jobId}`, updatedJob);
//       // You may choose to refetch all jobs here or just update the specific job in the local state
//       fetchAppliedJobs();
//     } catch (error) {
//       console.error('Error updating job:', error);
//     }
//   };

//   const handleUpdate = (jobId, updatedFields) => {
//     const updatedJobs = appliedJobs.map(job => {
//       if (job._id === jobId) {
//         return { ...job, ...updatedFields };
//       }
//       return job;
//     });
//     setAppliedJobs(updatedJobs);
//     updateJob(jobId, updatedFields);
//   };


//   return (
//     <div className="container">
//     <h1 className="mt-5">Applied Jobs</h1>
//     <div className="row mt-4">
//       {appliedJobs.map((job) => (
//         <div key={job._id} className="col-md-4 mb-4">
//           <div className="card h-100">
//             <div className="card-body">
//               <h5 className="card-title">{job.title}</h5>
//               <p className="card-text"><strong>Company:</strong> {job.company}</p>
//               <p className="card-text"><strong>Location:</strong> {job.location}</p>
//               <p className="card-text"><strong>Salary:</strong> {job.salary}</p>
//               <p className="card-text"><strong>Experience:</strong> {job.experience}</p>
//               <p className="card-text"><strong>Posted Date:</strong> {job.postedDate}</p>
//               <button className="btn btn-danger" onClick={() => deleteJob(job._id)}>Delete</button>
//               <UpdateJobForm jobId={job._id} handleUpdate={handleUpdate} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// }

// export default ShowAppliedJobs;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import './ShowAppliedJobs.css'; // Import CSS file for custom styling

// function ShowAppliedJobs() {
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [updatedJob, setUpdatedJob] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     company: '',
//     location: '',
//     salary: '',
//     experienceLevel: '',
//     role: '',
//     skills:[],
//     educationLevel:''
//   });

//   useEffect(() => {
//     fetchAppliedJobs();
//   }, []);

//   const fetchAppliedJobs = async () => {
//     try {
//       const response = await axios.get('http://localhost:3002/api/route/jobs/getjobs');
//       setAppliedJobs(response.data);
//     } catch (error) {
//       console.error('Error fetching applied jobs:', error);
//     }
//   };

//   const deleteJob = async (jobId) => {
//     try {
//       await axios.delete(`http://localhost:3002/api/route/jobs/deletejob/${jobId}`);
//       setAppliedJobs(appliedJobs.filter(job => job._id !== jobId)); // Remove the deleted job from the list
//     } catch (error) {
//       console.error('Error deleting job:', error);
//     }
//   };

//   const handleUpdate = (job) => {
//     setUpdatedJob(job);
//     setFormData({
//       title: job.title,
//       company: job.company,
//       location: job.location,
//       salary: job.salary,
//       experienceLevel: job.experienceLevel,
//       role: job.role,
//       educationLevel:job.educationLevel,
//       skills:job.skills.join(",")
//     });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const updateJob = async () => {
//     try {
//       const skillsArray = formData.skills.split(',').map(skill => skill.trim());
//       const updatedData = { ...formData, skills: skillsArray };
//       const response = await axios.put(`http://localhost:3002/api/route/jobs/updatejob/${updatedJob._id}`, updatedData);
//       console.log('Job updated successfully:', response.data);

//       // Update the job in the appliedJobs list
//       setAppliedJobs(appliedJobs.map(job => (job._id === updatedJob._id ? response.data : job)));
//       setUpdatedJob(null); // Clear the updatedJob state
//     } catch (error) {
//       console.error('Error updating job:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1  style={{textAlign:"center"}}className="mt-5 ">Created  Jobs</h1>
//       <div className="row mt-4">
//         {appliedJobs.map((job) => (
//           <div key={job._id} className="col-md-4 mb-4">
//             <div className="card h-100">
//               <div className="card-body">
//                 <h5 className="card-title" style={{textTransform:"uppercase"}}>{job.title}</h5>
//                 <p className="card-text"><strong>Company:</strong> {job.company}</p>
//                 <p className="card-text"><strong>Location:</strong> {job.location}</p>
//                 <p className="card-text"><strong>Salary:</strong> {job.salary}</p>
//                 <p className="card-text"><strong>Experience:</strong> {job.experienceLevel}</p>
//                 <p className="card-text"><strong>Job Role:</strong> {job.role}</p>
//                 <p className="card-text"><strong>Skills:</strong> {job.skills.join(', ')}</p>
//                 <p className="card-text"><strong>Education Level:</strong> {job.educationLevel}</p>
//                 <div className="button-group" style={{display: "flex",justifyContent:"space-between",gap:"10%"}}>
//                 <button className="btn btn-primary " onClick={() => handleUpdate(job)}>Update</button>
//                 <button className="btn btn-danger " onClick={() => deleteJob(job._id)}>Delete</button>  
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {updatedJob && (
//         <div className="update-form">
//           <h2>Update Job</h2>
//           <form onSubmit={(e) => { e.preventDefault(); updateJob(); }}>
//             <div className="form-group">
//               <label>Title:</label>
//               <input type="text" className="form-control" name="title" value={formData.title} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Company:</label>
//               <input type="text" className="form-control" name="company" value={formData.company} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Location:</label>
//               <input type="text" className="form-control" name="location" value={formData.location} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Salary:</label>
//               <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Experience:</label>
//               <input type="text" className="form-control" name="experienceLevel" value={formData.experienceLevel} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Skills:</label>
//               <input type="text" className="form-control" name="skills" value={formData.skills} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label> Job Role:</label>
//               <input type="text" className="form-control" name="role" value={formData.role} onChange={handleInputChange} />
//             </div>
//             <div className="form-group">
//               <label>Education Level:</label>
//               <input type="text" className="form-control" name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} />
//             </div>
            
//             <button type="submit" className="btn btn-success">Save</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShowAppliedJobs;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toast } from 'react-bootstrap';
// import { ToastBar } from '';
import { toast } from 'react-hot-toast';
function Deletenewjob() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [updatedJob, setUpdatedJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    experienceLevel: '',
    role: '',
    skills:'',
    educationLevel:''
  });

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/route/jobs/getjobs');
      setAppliedJobs(response.data);
    } catch (error) {
      console.error('Error fetching applied jobs:', error);
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await axios.delete(`http://localhost:3002/api/route/jobs/deletejob/${jobId}`);
      setAppliedJobs(appliedJobs.filter(job => job._id !== jobId)); // Remove the deleted job from the list
      toast.success("the given job is deleted")
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleUpdate = (job) => {
    setUpdatedJob(job);
    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      experienceLevel: job.experienceLevel,
      role: job.role,
      educationLevel:job.educationLevel,
      skills:job.skills ? job.skills.join(',') : '' 
      //  // Convert skills array to string for input field
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'skills') {
      // If skills is an array, join it into a string
      if (Array.isArray(value)) {
        setFormData({
          ...formData,
          [name]: value.join(',') // Assuming skills are separated by a comma and space
        });
      } else {
        setFormData({
          ...formData,
          [name]: value // Otherwise, set it as is
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const updateJob = async () => {
    try {
      let skillsArray = [];
    if (formData.skills) {
      skillsArray = formData.skills.split(',').map(skill => skill.trim());
    }
      // const skillsArray = formData.skills.split(',').map(skill => skill.trim());
      const updatedData = { ...formData, skills: skillsArray };
      const response = await axios.put(`http://localhost:3002/api/route/jobs/updatejob/${updatedJob._id}`, updatedData);
      console.log('Job updated successfully:', response.data);
      // Toast.success("GIVEN JOB IS UPDATED ")
      // ToastBar
      toast.success('Job updated successfully');
      // Update the job in the appliedJobs list
      setAppliedJobs(appliedJobs.map(job => (job._id === updatedJob._id ? response.data : job)));
      setUpdatedJob(null); // Clear the updatedJob state
    } catch (error) {
      console.error('Error updating job:', error);
      toast.error("error in  updaing the job ",error)
    }
  };

  return (
    <div className="container">
      <h1  style={{textAlign:"center"}}className="mt-5 ">Created  Jobs</h1>
      <div className="row mt-4">
        {appliedJobs.map((job) => (
          <div key={job._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title" style={{textTransform:"uppercase"}}>{job.title}</h5>
                <p className="card-text"><strong>Company:</strong> {job.company}</p>
                <p className="card-text"><strong>Location:</strong> {job.location}</p>
                <p className="card-text"><strong>Salary:</strong> {job.salary}</p>
                <p className="card-text"><strong>Experience:</strong> {job.experienceLevel}</p>
                <p className="card-text"><strong>Job Role:</strong> {job.role}</p>
                <p className="card-text"><strong>Skills:</strong> {job.skills ? job.skills.join(',') : ''}</p>
                <p className="card-text"><strong>Education Level:</strong> {job.educationLevel}</p>
                <div className="button-group" style={{display: "flex",justifyContent:"space-between",gap:"10%"}}>
                <button className="btn btn-primary " onClick={() => handleUpdate(job)}>Update</button>
                <button className="btn btn-danger " onClick={() => deleteJob(job._id)}>Delete</button>  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {updatedJob && (
        <div className="update-form">
          <h2>Update Job</h2>
          <form onSubmit={(e) => { e.preventDefault(); updateJob(); }}>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" className="form-control" name="title" value={formData.title} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Company:</label>
              <input type="text" className="form-control" name="company" value={formData.company} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input type="text" className="form-control" name="location" value={formData.location} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Salary:</label>
              <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Experience:</label>
              <input type="text" className="form-control" name="experienceLevel" value={formData.experienceLevel} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Skills:</label>
              <input type="text" className="form-control" name="skills" value={formData.skills} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label> Job Role:</label>
              <input type="text" className="form-control" name="role" value={formData.role} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Education Level:</label>
              <input type="text" className="form-control" name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} />
            </div>
            
            <button type="submit" className="btn btn-success">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Deletenewjob;


