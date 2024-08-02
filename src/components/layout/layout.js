// import React from 'react'
// // import Header from './header'
// // import Footer1 from './footer1'
// import Footer1 from './footer1'
// // import footer1
// // import { Footer } from 'flowbite-react';
// import Header1 from './header1'
// import {Helmet} from "react-helmet"
// import { ToastContainer } from 'react-toastify'
// import "react-toastify/dist/ReactToastify.css"
// function Layout({children,title,description,keywords,author}) {
//   return (
//     <div>
//       <Helmet>
//       <meta charSet='utf-8'/>
//   <meta name="description" content={description} />
//   <meta name="keywords" content={keywords} />
//   <meta name="author" content={author} />
// <title>{title}</title>

//          </Helmet>
//       <Header1 />
//       <br></br>
//       <main style={{minHeight:"50.7vh"}}>
//       {/* <h5>hello this is layout page indication</h5> */}
//       <ToastContainer/>
//       {children}
//       </main >
//       <Footer1/>
     
//     </div>
//   )
// }

// export default Layout
import React from 'react';
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header1 from './header1';
import Footer1 from './footer1';

function Layout({ children, title, description, keywords, author }) {
  return (
    <div style={{ position: 'relative' }}>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header1 style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} />
      <main style={{ minHeight: "50.7vh", paddingTop: "70px" }}>
        {/* <h5>hello this is layout page indication</h5> */}
        <ToastContainer />
        {children}
      </main>
      <Footer1 style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100 }} />
    </div>
  )
}

export default Layout;

