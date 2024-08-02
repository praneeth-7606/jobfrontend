// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import reportWebVitals from './reportWebVitals';
// import { AuthProvider } from './components/context/auth';
// import { BrowserRouter} from 'react-router-dom';
// import { JobTypesProvider } from './components/context/JobTypesContext';
// import { SearchProvider } from './components/context/search';
// import { ToastContainer } from 'react-toastify';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   <AuthProvider>
//     <JobTypesProvider>
//       <SearchProvider>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar/>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//     </SearchProvider>
//     </JobTypesProvider>
//     </AuthProvider>,
//   document.getElementById('root')

// );


// // reportWebVitals();


// const container = document.createElement('div');
// document.body.appendChild(container);

// const root = ReactDOM.createRoot(container);

// root.unstable_renderSubtreeIntoContainer(
//   container,
//   <AuthProvider>
//     <JobTypesProvider>
//       <SearchProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </SearchProvider>
//     </JobTypesProvider>
//   </AuthProvider>,
//   () => {
//     ReactDOM.unstable_renderSubtreeIntoContainer(
//       container,
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />,
//       container
//     );
//   }
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './components/context/auth';
import { BrowserRouter } from 'react-router-dom';
import { JobTypesProvider } from './components/context/JobTypesContext';
import { SearchProvider } from './components/context/search';
import { Toaster} from 'react-hot-toast';
// import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <JobTypesProvider>
      <SearchProvider>
        <BrowserRouter>
        <Toaster position="top-center" autoClose={3000} hideProgressBar />
          <App />
          {/* </ToastContainer> */}
        </BrowserRouter>
      </SearchProvider>
    </JobTypesProvider>
    
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
