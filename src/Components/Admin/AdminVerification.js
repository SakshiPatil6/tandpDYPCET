import '../Login/login.css';
import logo from "../Images/logoo.png";
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AdminVerification() {
    const [values, setValues] = useState({
        code: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(process.env.REACT_APP_BASE_URL+'/adminLogin', values)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    console.log("Admin Login Successful!",res.data);
                    navigate("/adminPage");
                } else {
                    console.log("Wrong Code!",res.data);
                }
            })
            .catch(err => {
                console.log("Admin Login failed Something went wrong ! ", err);
            });
    }
    const onHandleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }
    return (
        <div>

            {/* <div className='mainBg' style={{backgroundImage: `url(${bg})`} } > */}
            <div className='MainContainerLogin'>
                <div className='ContainerBoxLogin'>
                    <img src={logo} alt='logo' />
                    <div className='LoginContainer AdminBox'>
                        <form onSubmit={handleSubmit}>

                            <h4>Administrator User</h4>

                            <div className="input">
                                <input type="password" name="code" id="Code" required title="Please enter your code here" placeholder='Enter Code' onChange={onHandleChange}
                                />
                            </div>
                            <input type="submit" value="Verify"  className="login-btn" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default AdminVerification;