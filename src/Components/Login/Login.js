import './login.css';
import logo from "../Images/logoo.png";
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  useNavigate } from 'react-router';
export default function Login() {
    const [values, setValues] = useState({
        Email: '',
        Password: ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
            .then(res => {
                console.log("Login Successful!", res);
                // alert("Done");
                navigate("/nav")
            })
            .catch(err => {
                console.log("Login failed", err);
                // alert("Fail");
            });
    }
    const onHandleChange = (event) => {
        setValues({ ...values, [event.target.name]: [event.target.value] })
    }

    return (
        <div>

            {/* <div className='mainBg' style={{backgroundImage: `url(${bg})`} } > */}
            <div className='MainContainerLogin'>
                <div className='ContainerBoxLogin'>
                <img src={logo} alt='logo'/>
                    <div className='LoginContainer LoginBox'>
                        <form onSubmit={handleSubmit}>
                           
                            <h4>Welcome! Please login to continue</h4>

                            <div className="input">
                                <input type="text" name="Email" id="Email" required title="Please enter your email here" placeholder='Enter Email'
                                onChange={onHandleChange}/>
                                
                            </div>

                            <div className="input">
                                <input type="password" name="password" id="password" required title="Please enter your Password here" placeholder='Enter Password' onChange={onHandleChange}/>
                                
                            </div>

                            <Link to="/Home" ><input type="submit" value="Login" className="login-btn" /></Link>
                            <p>Not a member? <Link to="/register">SignUp</Link></p>
                           
                        </form>
                    </div>
                </div>
            </div>
         
        </div>
    );
}











