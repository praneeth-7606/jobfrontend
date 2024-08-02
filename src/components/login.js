import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import axios from "axios";
import { toast } from "react-toastify"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Layout from "./layout/layout";
import { useAuth } from "./context/auth";
import image from "./login.gif"
import styles from "./styles.module.css";
// import { GoogleLogin } from 'react-google-login';
// import google from"./public/images/google.png"/
function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [verified, setVerified] = useState(false);
    const [error,seterror]=useState("")
    const navigate = useNavigate();
    const { auth, setAuth, userId } = useAuth(); 
    // Destructure auth, setAuth, and userId

    const responseGoogle = (response) => {
          // Handle the response from Google login
    console.log(response);
    if (!response.error) {
        // Handle successful login
        // For example, redirect to the profile page
        window.location.href = '/'; // Replace '/profile' with the actual URL of your profile page
    } else {
        // Handle login failure
        console.error(response.error);
    }
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `https://jobserver-1.onrender.com/api/route/auth/login`, { email, password });
            if (res.data.success) {
                toast.success(res.data.message);
                const { user, token } = res.data;
                console.log("User ID:", userId);
                setAuth({
                    user,
                    token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate("/");
            } else {
                toast.error(res.data.message)
                seterror(res.data.message)
            }
        }
        catch (error) {
            // console.log(res.data.message)
            seterror("something went wrong")
            toast.error("something went wrong")
        }
    };

    const handleRecaptchaChange = () => {
        setVerified(true);
    };

    return (
        <div title="loginform" className="mylogin">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center" style={{ minHeight: "4vh", paddingTop: "5%" }}>
                    <div className="col-md-3  pb-5 ">
                        <Card className="pl-2 mt-4">
                            <Card.Body>
                                <h1 className="text-center mb-4"> Login Form</h1>
                                {error && <p style={{ color: "red" ,textAlign:"center"}}>{error}</p>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <div className="input-group">
                                            <span className="input-group-text"><AccountCircleIcon /></span>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email or username"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setemail(e.target.value)}
                                            />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <div className="input-group">
                                            <span className="input-group-text"><KeyIcon /></span>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setpassword(e.target.value)}
                                            />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 " controlId="formBasicRecaptcha">
                                        <ReCAPTCHA
                                            sitekey="6LeiCHYpAAAAAHYT5MvUTWtsr8bno4uegMXsu9Um"
                                            onChange={handleRecaptchaChange}
                                        />
                                    </Form.Group>



                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={() => { navigate("/forgot") }}
                                        className="btn btn-primary  w-100"
                                    >
                                        Forgot password
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="btn btn-success mt-3 w-100"
                                        disabled={!verified}
                                    >
                                        Login
                                    </Button>
                                    <br></br>
                                    {/* <Button  variant="warning" className={styles.google_btn} onClick={responseGoogle}>
                                    <GoogleLogin
      clientId="1016756545794-j7evvv0t87gm452f7efk02ngok5l4qp1.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
     />  */}
					
						{/* <span>Sign in with Google</span>
					</Button> */}
                    {/* <br></br> */}
                                    <p style={{ textAlign: "center", paddingTop: "3%" }}>Not having account <a style={{ textDecoration: "none" }} href="/signup">Signup</a> here</p>


                        
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

