// frontend/src/components/ResumeDownload.js

import React, { useState } from 'react';
import axios from 'axios';

const Getresume = ({ resumeId }) => {
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    try {
      const response = await axios.get(`https://jobserver-1.onrender.com/api/resume/${resumeId}`, {
        responseType: 'blob', // Important to receive binary data
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf'); // Set the filename
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      setError('Error downloading resume');
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Resume</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Getresume;
