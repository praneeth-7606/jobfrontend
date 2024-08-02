import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { JobTypesContext } from '../context/JobTypesContext';
import { Form } from 'react-bootstrap';
import { TextField, Typography, Container, Grid, Snackbar,Box,Button } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { toast } from 'react-hot-toast';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

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
        photo:null
    });
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [allJobTypes, setAllJobTypes] = useState([]);

    useEffect(() => {
        fetchAllJobTypes();
    }, []);

    const fetchAllJobTypes = async () => {
        try {
            const response = await axios.get('https://jobserver-1.onrender.com/api/route/jobtypes/get-jobtype');
            
            setAllJobTypes(response.data.category);
        } catch (error) {
            setOpenError(true);
            setErrorMessage(error.message);
            console.error('Error fetching job types:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === "skills") {
            const skillsArray = value.split(',').map(skill => skill.trim());
            setFormData({...formData, [name]: skillsArray });
        } else if (name === "photo") {
            setFormData({ ...formData, photo: e.target.files[0] }); }
        else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleCloseSuccess = () => {
        setOpenSuccess(false);
    };

    const handleCloseError = () => {
        setOpenError(false);
    };

    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }
            const response = await axios.post('https://jobserver-1.onrender.com/api/route/jobs/addjob', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set content type as multipart/form-data for file upload
                }
            });
            console.log('New job created:', response.data);
            if (response.data.success) {
                setOpenSuccess(true);
                console.log('Job created successfully:', response.data.job);
                setFormData({
                    title: '',
                    description: '',
                    location: '',
                    salary: '',
                    jobtype: '',
                    company: '',
                    skills: [],
                    role: "",
                    educationLevel: "",
                    experienceLevel: "",
                    photo: null
                });
            } else {
                setOpenError(true);
                setErrorMessage(response.data.message);
                console.error('Error creating job:', response.data.message);
            }
        } catch (error) {
            setOpenError(true);
            setErrorMessage(error.message);
            console.error('Error creating job:', error);
        }
    };

    return (
        <div className="container">
            <h2>Create New Job</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" value={formData.title} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter location" name="location" value={formData.location} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="salary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" placeholder="Enter salary" name="salary" value={formData.salary} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="jobtype">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Select name="jobtype" value={formData.jobtype} onChange={handleChange} required>
                        <option value="">Select job type</option>
                        {allJobTypes.map((jobtype) => (
                            <option key={jobtype._id} value={jobtype.name}>{jobtype.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter company" name="company" value={formData.company} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="skills">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control type="text" placeholder="Enter skills separated by commas" name="skills" value={formData.skills.join(",")} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="experienceLevel">
                    <Form.Label>Experience Level</Form.Label>
                    <Form.Control type="text" placeholder="Enter experience level" name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="educationLevel">
                    <Form.Label>Education Level</Form.Label>
                    <Form.Control type="text" placeholder="Enter education level" name="educationLevel" value={formData.educationLevel} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="Enter role" name="role" value={formData.role} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="file" name="photo" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Create Job</Button>
            </Form>
            

<Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          elevation={2}
          variant="filled"
          onClose={handleCloseSuccess}
          severity="success"
        >
          New job created successfully!
        </MuiAlert>
      </Snackbar>
            

<Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          elevation={2}
          variant="filled"
          onClose={handleCloseError}
          severity="error"
        >
          {/* New job created successfully! */}
          {errorMessage}
        </MuiAlert>
      </Snackbar>
        </div>
    );
};

export default NewJobForm;
