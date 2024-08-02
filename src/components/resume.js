// import React, { useState } from 'react';
// import axios from 'axios';
// import { Card } from '@mui/material';
// import Layout from './layout/layout';
// import {Altert}  from '@mui/material'

// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';

// function ResumeUpload() {
//   const [resume, setResume] = useState(null);
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     setResume(e.target.files[0]);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('resume', resume);
//     formData.append('email', email);

//     try {
//       const response = await axios.post('https://jobserver-1.onrender.com/api/route/resume/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
      
//       setMessage(response.data);
//     } catch (error) {
//       console.error('Error uploading resume:', error);
//       setMessage('Error uploading resume. Please try again.');
//     }
//   };

//   return (
    
// //     <div className="container pt-4  d-flex justify-content-center align-items-center ">
// //     <div className="card p-4">
// //       <h2 className="mb-4">Upload Resume</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-3">
// //           <label htmlFor="resume" className="form-label">Choose Resume:</label>
// //           <input type="file" className="form-control" id="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="email" className="form-label">Email:</label>
// //           <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
// //         </div>
       
// //       {/* {buttons} */}
      
      
// //     <Button type="submit" variant='contained' className="btn btn-primary">Upload</Button>
// //       </form>
   
// //   {message && <p className="mt-3">{message}</p>}

      
// //     </div>
// //   </div>
 
// //   );
// // }
import React, { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import { useAuth } from './context/auth';
import Getresume from './getresume';

function ResumeUpload() {
  const [resume, setResume] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('email', email);

    try {
      const response = await axios.post('https://jobserver-1.onrender.com/api/route/resume/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setMessage(response.data);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error uploading resume:', error);
      setMessage('Error uploading resume. Please try again.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="card p-4">
        <h2 className="mb-4">Upload Resume</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="resume" className="form-label">Choose Resume:</label>
            <input type="file" className="form-control" id="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
          <br></br>
          
          <a  style={{textDecoration:"none"}}href="/">go to home</a>
          <Getresume/>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={message}
        autoHideDuration={4000}
      />
    
    </Box>
    
  );
}

export default ResumeUpload;

// export default ResumeUpload;
