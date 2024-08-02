import { Layout } from 'antd'
import React from 'react'
import { useSearch } from './context/search'
import JobCard from './jobpages/jobcard'
const  Search=()=> {
    const [values,setvalues]=useSearch()
  return (
    <Layout title={"search results "}>
        <div className='container'>
            <div className='text-center'>
                <h1>Search Results </h1>
                <h6>{values?.results.length < 1?'No Jobs Found':`Found results are ${values?.results.length}`}</h6>
                <div className="row">
                {values.results.map((job, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                                <JobCard job={job} />
                            </div>
                        ))}
        
      </div>
            </div>

        </div>
      
    </Layout>
  )
}

export default Search
