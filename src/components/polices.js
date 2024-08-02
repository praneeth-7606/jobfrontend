// import { Layout } from 'antd'
import Layout from './layout/layout'
import React from 'react'

function Polices() {
  return (
    <Layout>
      {/* <h1>welcome to policies</h1> */}
    <div className="container mt-3">
  <div className="row">
    <div className="col-12">
      <h1 className="">Global Policy</h1>
      <p className="lead">This is all over details</p>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="placementPolicyHeading">
            <h2 className="mb-0">
              <button style={{textDecoration:"none"}}className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#placementPolicyCollapse" aria-expanded="true" aria-controls="placementPolicyCollapse">
                Placement Policy Rules
              </button>
            </h2>
          </div>
          <div id="placementPolicyCollapse" className="collapse show" aria-labelledby="placementPolicyHeading" data-bs-parent="#accordion">
            <div className="card-body">
              <p>At any point of time, a Student can have maximum <span className="fw-bold">1</span> offer(s).</p>
              <p>Student is allowed <span className="fw-bold">unlimited</span> attempts to obtain the first offer.</p>
              <p>Student is allowed <span className="fw-bold">unlimited</span> attempts to get additional offers after obtaining the first offer.</p>
            </div>
          </div>
        </div>
        {/* Add more cards for different policy categories */}
      </div>
      <br></br>
      <div className="card">
          <div className="card-header" id="placementPolicyHeading">
            <h2 className="mb-0">
              <button style={{textDecoration:"none"}}className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#placementPolicyCollapse" aria-expanded="true" aria-controls="placementPolicyCollapse">
                Placement Policy Rules
              </button>
            </h2>
          </div>
          <div id="placementPolicyCollapse" className="collapse show" aria-labelledby="placementPolicyHeading" data-bs-parent="#accordion">
            <div className="card-body">
              <p>At any point of time, a Student can have maximum <span className="fw-bold">1</span> offer(s).</p>
              <p>Student is allowed <span className="fw-bold">unlimited</span> attempts to obtain the first offer.</p>
              <p>Student is allowed <span className="fw-bold">unlimited</span> attempts to get additional offers after obtaining the first offer.</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="card">
          <div className="card-header" id="placementPolicyHeading">
            <h2 className="mb-0">
              <button style={{textDecoration:"none"}}className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#placementPolicyCollapse" aria-expanded="true" aria-controls="placementPolicyCollapse">
                Placement Policy Rules
              </button>
            </h2>
          </div>
          <div id="placementPolicyCollapse" className="collapse show" aria-labelledby="placementPolicyHeading" data-bs-parent="#accordion">
            <div className="card-body">
              <p>At any point of time, a Student can have maximum <span className="fw-bold">1</span> offer(s).</p>
              <p>Student is allowed <span className="fw-bold">unlimited</span> attempts to obtain the first offer.</p>
              <p>Student is allowed <span className="fw-bold">unlimited</span> attempts to get additional offers after obtaining the first offer.</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="card">
          <div className="card-header" id="placementPolicyHeading">
            <h2 className="mb-0">
              <button style={{textDecoration:"none"}}className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#placementPolicyCollapse" aria-expanded="true" aria-controls="placementPolicyCollapse">
                Placement Policy Rules
              </button>
            </h2>
          </div>
          <div id="placementPolicyCollapse" className="collapse show" aria-labelledby="placementPolicyHeading" data-bs-parent="#accordion">
            <div className="card-body">
              <p>At any point of time, a Student can have maximum <span className="fw-bold">1</span> offer(s).</p>
              <p>Student is allowed <span className="fw-bold">unlimited</span> attempts to obtain the first offer.</p>
              <p>Student is allowed <span className="fw-bold">unlimited</span> attempts to get additional offers after obtaining the first offer.</p>
            </div>
          </div>
        </div>
       
        {/* Add more cards for different policy categories */}
      {/* </div> */}
    </div>
  </div>
</div>
<br></br>
{/* </div> */}
    </Layout>
  )
}

export default Polices
