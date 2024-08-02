import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobImage = ({ jobId }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobImage = async () => {
      try {
        const response = await axios.get(`https://jobserver-1.onrender.com/api/route/jobs/uploads/${jobId}`);
        setImageUrl(response.data); // Assuming your backend sends the image data as response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job image:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchJobImage();
  }, [jobId]);

  if (loading) return <p>Loading image...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {imageUrl && (
        <img src={`data:image/png;base64,${imageUrl}`} alt="Job Image" />
      )}
    </div>
  );
};

export default JobImage;
