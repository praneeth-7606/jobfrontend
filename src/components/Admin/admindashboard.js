
import Layout from '../layout/layout'
import React from 'react'
import NewJobForm from './newjob1'
import Jobtype from './jobtype'
import { useNavigate } from 'react-router-dom'
import { Container,Row,Col, } from 'react-bootstrap'
import { Button} from '@mui/material'
import { useAuth } from '../context/auth'
// import 

function Admindashboard() {
  const { auth, setAuth }=useAuth()
  const navigate=useNavigate()


  const handleChange=()=>{
    navigate("newjob1")

  }
  const handleChange2=()=>{
    navigate("jobtype")

  }
  const handleChange3=()=>{
    navigate("delete")

  }
  return (
    
    <Layout>
      <h1>hi hello welcome to admin dashboard</h1>
      
      {/* <Container> */}
      {/* <Row style={{alignItems:"center",alignContent:"center",textAlign:"center",justifyContent:"center",gap={3}}}>
      <Button  style={{maxWidth:"10%"}} onClick={handleChange} variant="contained">newjob</Button>
      <Button  style={{maxWidth:"10%"}} onClick={handleChange2} variant="contained">jobtype</Button>
      </Row> */}
      <Row style={{ alignItems: "center", alignContent: "center", textAlign: "center", justifyContent: "center" }}>
  <Button style={{ marginRight: "10px", maxWidth: "10%" }} onClick={handleChange} variant="contained">newjob</Button>
  <Button style={{ maxWidth: "10%",marginRight: "10px" }} onClick={handleChange2} variant="contained">jobtype</Button>
  <Button style={{ maxWidth: "10%" }} onClick={handleChange3} variant="contained">deletejob</Button>

</Row>
<Row>
  {/* <Col><h3>Admin Name: {auth?.user?.name}</h3>
           </Col>
           <Col> <h3>Admin Email: {auth?.user?.email}</h3></Col> */}
</Row>
    </Layout>
  )
}

export default Admindashboard
