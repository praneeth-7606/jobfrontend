// JobTypesContext.js
import React, { createContext, useState } from 'react';

export const JobTypesContext = createContext();

export const JobTypesProvider = ({ children }) => {
    const [jobTypes, setJobTypes] = useState([]);

    return (
        <JobTypesContext.Provider value={{ jobTypes, setJobTypes }}>
            {children}
        </JobTypesContext.Provider>
    );
};
