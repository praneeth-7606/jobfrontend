

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Card,Dropdown, CardBody } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';
import Layout from '../layout/layout';

const Profile = () => {
  const { userId, auth } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const [formData, setFormData] = useState({
    Education: '',
    Gender: '',
    AadhaarNo: '',
    State: '',
    country: '',
    passportnumber: '',
    phonenumber: '',
    Age: 0
  });

  useEffect(() => {
    if (userId) {
      axios.get(`https://jobserver-1.onrender.com/api/route/profile/getprofiles/${userId}`)
        .then(response => {
          const userProfile = response.data.profile;
          if (userProfile) {
            setProfileData(userProfile);
            setFormData({
              Education: userProfile.Education,
              Gender: userProfile.Gender,
              AadhaarNo: userProfile.AadhaarNo,
              State: userProfile.State,
              country: userProfile.country,
              passportnumber: userProfile.passportnumber,
              phonenumber: userProfile.phonenumber,
              Age: userProfile.Age
            });
          } else {
            console.error('Profile not found for user:', userId);
          }
        })
        .catch(error => {
          console.error('Error fetching profile details:', error);
        });
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile
    axios.put(`https://jobserver-1.onrender.com/api/route/profile/profiles/${profileData._id}`, formData)
      .then(response => {
        console.log('Profile updated successfully:', response.data);
        toast.success('Profile updated successfully');
        setSubmitted(true);
        setIsUpdating(false);
        setProfileData(response.data.profile);
        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        toast.error('Error updating profile');
      });
  };

  return (
    <Layout>
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <Card className='text-center p-2'>
                <h3>User Details</h3>
                <p><strong>Name:</strong> {auth.user.name}</p>
                <p><strong>Email:</strong> {auth.user.email}</p>
                <p><strong>userId:</strong> {userId}</p>
              </Card>
            </div>
            <div className="col-md-6">
              {profileData && !isUpdating ? (
                <div>
                  <Card style={{width:"65%"}}>
                    <CardBody >
                  <h3>Profile Details</h3>
                 <p><strong>Education:</strong> {profileData.Education}</p>
                 <p><strong>Gender:</strong> {profileData.Gender}</p>
                 <p><strong>Aadhaar Number:</strong> {profileData.AadhaarNo}</p>
                 <p><strong>State:</strong> {profileData.State}</p>
                 <p><strong>Country:</strong> {profileData.country}</p>
                 <p><strong>Passport Number:</strong> {profileData.passportnumber}</p>
                 <p><strong>Phone Number:</strong> {profileData.phonenumber}</p>
                 <p><strong>Age:</strong> {profileData.Age}</p>
                 {/* <Button variant="primary" onClick={handleUpdate}>Update</Button> */}
                  {/* Display profile details */}
                  <Button variant="success" onClick={handleUpdate}>Update</Button>
                  </CardBody>
                  </Card>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>

                  {/* Form fields */}
                  <Form.Group controlId="education">
              <Form.Label>Education:</Form.Label>
              <Form.Control type="text" name="Education" value={formData.Education} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender:</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-gender">
                  {formData.Gender || 'Select Gender'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Male' })}>Male</Dropdown.Item>
                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Female' })}>Female</Dropdown.Item>
                  <Dropdown.Item onClick={() => setFormData({ ...formData, Gender: 'Other' })}>Other</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group controlId="aadhaarNo">
              <Form.Label>Aadhaar Number:</Form.Label>
              <Form.Control type="text" name="AadhaarNo" value={formData.AadhaarNo} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="state">
               <Form.Label>State:</Form.Label>
               <Form.Control type="text" name="State" value={formData.State} onChange={handleChange} />
             </Form.Group>
             <Form.Group controlId="country">
               <Form.Label>Country:</Form.Label>
               <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
             </Form.Group>
             <Form.Group controlId="passportNumber">
               <Form.Label>Passport Number:</Form.Label>
               <Form.Control type="text" name="passportnumber" value={formData.passportnumber} onChange={handleChange} />
             </Form.Group>
             <Form.Group controlId="phoneNumber">
               <Form.Label>Phone Number:</Form.Label>
               <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
             </Form.Group>
             <Form.Group controlId="age">
               <Form.Label>Age:</Form.Label>
               <Form.Control type="number" name="Age" value={formData.Age} onChange={handleChange} />
             </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
      {submitted && <p>Form submitted successfully! Refreshing...</p>}
    </Layout>
  );
};

export default Profile;
