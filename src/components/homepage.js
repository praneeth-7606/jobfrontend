import React from 'react'
import Layout from './layout/layout'
// import Mainjobpage from '../jobpages/mainjobpage'
import Mainjobpage from './jobpages/mainjobpage'
import { useNavigate } from 'react-router-dom'
// D:\mywebdevelopment\Job_portal\client\login\src\components\jobpages\mainjobpage.js
function Homepage() {
  const navigate=useNavigate()
  const handlechange=()=>{
    navigate("appliedjobs");
}
const handlechange2=()=>{
  navigate("dashboard/user/profile");
}
  return (
    <Layout>
      {/* <h1>This is the home page</h1> */}
      <Mainjobpage/>


{/* <a href="/calender">calander</a>
      <button onClick={handlechange}>get the list of applied jobs</button>
      <button onClick={handlechange2}>get the  profile</button> */}
    </Layout>
  )
}

export default Homepage
