import { Layout } from 'antd';
import React, { useState } from 'react';
import { useSearch } from './context/search';
import JobCard from './jobpages/jobcard';

const Search = () => {
    const [values, setValues] = useSearch();
    const [filters, setFilters] = useState({
        title: '',
        company: '',
        jobType: '',
        description: '',
        role: '',
        location: '',
    });

    // Filter jobs based on the filter criteria
    const filteredResults = values.results.filter(job => {
        // Check if job matches the filter criteria for each field
        const titleMatch = job.title.toLowerCase().includes(filters.title.toLowerCase());
        const companyMatch = job.company.toLowerCase().includes(filters.company.toLowerCase());
        const jobTypeMatch = job.jobType.toLowerCase().includes(filters.jobType.toLowerCase());
        const descriptionMatch = job.description.toLowerCase().includes(filters.description.toLowerCase());
        const roleMatch = job.role.toLowerCase().includes(filters.role.toLowerCase());
        const locationMatch = job.location.toLowerCase().includes(filters.location.toLowerCase());

        // Return true if all filter criteria match
        return titleMatch && companyMatch && jobTypeMatch && descriptionMatch && roleMatch && locationMatch;
    });

    // Function to handle input change for each filter field
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <Layout title="Search Results">
            <div className="container">
                <div className="text-center">
                    <h1>Search Results</h1>
                    <div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={filters.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={filters.company}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="jobType"
                            placeholder="Job Type"
                            value={filters.jobType}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={filters.description}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="role"
                            placeholder="Role"
                            value={filters.role}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={filters.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <h6>{filteredResults.length < 1 ? 'No Jobs Found' : `Found results: ${filteredResults.length}`}</h6>
                    <div className="row">
                        {filteredResults.map((job, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                                <JobCard job={job} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Search;
