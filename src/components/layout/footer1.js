// // import React from 'react'

// // function Footer1() {
// //   return (
// //     <div>
// //      <section>
// //   <div className="container">
// //     <div className="banner">
// //       <div className="flex">
// //         <div className="banner-content">
// //           <h2 className="banner-heading">Grow your business fast with AndiiCodes .. 🥰</h2>
// //         </div>
// //         <div className="banner-action">
// //           <div className="cta-button">
// //             <a href="#" className="cta-link">Try 14 Days Free Trial</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="footer-links">
// //       <div className="footer-column">
// //         <h3 className="footer-heading">Company</h3>
// //         <ul>
// //           <li><a href="#">About</a></li>
// //           <li><a href="#">Features</a></li>
// //           <li><a href="#">Works</a></li>
// //           <li><a href="#">Career</a></li>
// //         </ul>
// //       </div>
// //       <div className="footer-column">
// //         <h3 className="footer-heading">Help</h3>
// //         <ul>
// //           <li><a href="#">Customer Support</a></li>
// //           <li><a href="#">Delivery Details</a></li>
// //           <li><a href="#">Terms &amp; Conditions</a></li>
// //           <li><a href="#">Privacy Policy</a></li>
// //         </ul>
// //       </div>
// //       <div className="footer-column">
// //         <h3 className="footer-heading">Resources</h3>
// //         <ul>
// //           <li><a href="#">Free eBooks</a></li>
// //           <li><a href="#">Development Tutorial</a></li>
// //           <li><a href="#">How to - Blog</a></li>
// //           <li><a href="#">Youtube Playlist</a></li>
// //         </ul>
// //       </div>
// //       <div className="footer-column">
// //         <h3 className="footer-heading">Links</h3>
// //         <ul>
// //           <li><a href="#">Free eBooks</a></li>
// //           <li><a href="#">Development Tutorial</a></li>
// //           <li><a href="#">How to - Blog</a></li>
// //           <li><a href="#">Youtube Playlist</a></li>
// //         </ul>
// //       </div>
// //     </div>
// //   </div>
// // </section>

// //     </div>
// //   )
// // }

// // export default Footer1
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// function Footer() {
//   return (
//     <footer className="bg-dark text-light py-5">
//       <Container>
//         <Row>
//           <Col md={6}>
//             <h3>Company</h3>
//             <ul className="list-unstyled">
//               <li><a href="#">About</a></li>
//               <li><a href="#">Features</a></li>
//               <li><a href="#">Works</a></li>
//               <li><a href="#">Career</a></li>
//             </ul>
//           </Col>
//           <Col md={3}>
//             <h3>Help</h3>
//             <ul className="list-unstyled">
//               <li><a href="#">Customer Support</a></li>
//               <li><a href="#">Delivery Details</a></li>
//               <li><a href="#">Terms &amp; Conditions</a></li>
//               <li><a href="#">Privacy Policy</a></li>
//             </ul>
//           </Col>
//           <Col md={3}>
//             <h3>Resources</h3>
//             <ul className="list-unstyled">
//               <li><a href="#">Free eBooks</a></li>
//               <li><a href="#">Development Tutorial</a></li>
//               <li><a href="#">How to - Blog</a></li>
//               <li><a href="#">Youtube Playlist</a></li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
       
        <Row className="footer-links">
          <Col md={3} sm={6}>
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul className="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="footer-column">
              <h3 className="footer-heading">Help</h3>
              <ul className="list-unstyled">
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="footer-column">
              <h3 className="footer-heading">Resources</h3>
              <ul className="list-unstyled">
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
              </ul>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className="footer-column">
              <h3 className="footer-heading">Links</h3>
              <ul className="list-unstyled">
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        <Container className="text-center">
          <Row>
            <Col>
            <a className="instagram-link"href="https://www.instagram.com/"><InstagramIcon size={30} className="text-light mx-3" /></a>
            <a  className="instagram-link" href="https://www.facebook.com/"><FacebookIcon size={30} className="text-light mx-3" /></a>
            <a className="instagram-link" href="https://github.com/"><GitHubIcon size={30} className="text-light mx-3" /></a>
            <a  className="instagram-link" href="https://twitter.com/?lang=en"><XIcon size={30} className="text-light mx-3" /></a>
            <a  className="instagram-link" href="https://www.youtube.com/"><YouTubeIcon size={30} className="text-light mx-3" /></a>
            </Col>
          </Row>
        </Container>
        {/* <Row className="footer-links">

        </Row > */}
      </Container>
    </footer>
  );
}

export default Footer;
