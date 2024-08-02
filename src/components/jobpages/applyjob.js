import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Button } from '@mui/material';
import { useAuth } from '../context/auth';
const Applyjob = ({ jobId, }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
const {userId}=useAuth()
  const applyForJob = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Send a POST request to the backend endpoint
      await axios.post(`https://jobserver-1.onrender.com/api/route/appliedjob/apply/${jobId}`, { userId,jobId });
      toast.success("Application submitted successfully")
    //   setSuccessMessage('Application submitted successfully');

    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("You have already applied for this job")
        // setError('You have already applied for this job');
      } else {
        toast.error("Failed to apply for the job")
        // setError('Failed to apply for the job');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        {/* <p>{userId}</p> */}
      <Button variant='contained' onClick={applyForJob} disabled={loading}>
        {loading ? 'Applying...' : 'Apply for Job'}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Applyjob;

// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { Button } from '@mui/material';
// import { useAuth } from '../context/auth';

// const Applyjob = ({ jobId, isAdmin }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const { userId } = useAuth();

//   const applyForJob = async () => {
//     setLoading(true);
//     setError(null);
//     setSuccessMessage(null);

//     try {
//       // Send a POST request to the backend endpoint
//       await axios.post(`https://jobserver-1.onrender.com/api/route/appliedjob/apply/${jobId}`, { userId, jobId });
//       toast.success("Application submitted successfully");
//       // setSuccessMessage('Application submitted successfully');

//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         toast.error("You have already applied for this job");
//         // setError('You have already applied for this job');
//       } else {
//         toast.error("Failed to apply for the job");
//         // setError('Failed to apply for the job');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       {!isAdmin && (
//         <>
//           <p>{userId}</p>
//           <Button variant='contained' onClick={applyForJob} disabled={loading}>
//             {loading ? 'Applying...' : 'Apply for Job'}
//           </Button>
//         </>
//       )}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//     </div>
//   );
// };

// export default Applyjob;

