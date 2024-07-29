import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        
    };

    const handleSub = (event) => {
      
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&])(?=.*[0-9]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must contain at least one uppercase letter, one special character, one number, and be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        console.log('Form submitted successfully!');
        navigate("/");
    };

    return (
        <div>
            <style>
                {`
                    
                                    * {
                                        margin: 0;
                                        padding: 0;
                                        /* user-select: none; */
                                        box-sizing: border-box;
                                        font-family: 'Poppins', sans-serif;
                                    }
                                    html, body {
                                        height: 100%;
                                    }
                                    body {
                                        display: grid;
                                        place-items: center;
                                        background: #dde1e7;
                                        text-align: center;
                                    }
                                    .content {
                                        width: 330px;
                                        padding: 40px 30px;
                                        background: #dde1e7;
                                        border-radius: 10px;
                                        box-shadow: -3px -3px 7px #ffffff73,
                                                    2px 2px 5px rgba(94,104,121,0.288);
                                    }
                                    .content .text {
                                        font-size: 33px;
                                        font-weight: 600;
                                        margin-bottom: 35px;
                                        color: #595959;
                                    }
                                    .field {
                                        height: 50px;
                                        width: 100%;
                                        display: flex;
                                        position: relative;
                                    }
                                    .field:nth-child(2) {
                                        margin-top: 20px;
                                    }
                                    .field input {
                                        height: 100%;
                                        width: 100%;
                                        padding-left: 45px;
                                        outline: none;
                                        border: none;
                                        font-size: 18px;
                                        background: #dde1e7;
                                        color: #595959;
                                        border-radius: 25px;
                                        box-shadow: inset 2px 2px 5px #BABECC,
                                                    inset -5px -5px 10px #ffffff73;
                                    }
                                    .field input:focus {
                                        box-shadow: inset 1px 1px 2px #BABECC,
                                                    inset -1px -1px 2px #ffffff73;
                                    }
                                    .field span {
                                        position: absolute;
                                        color: #595959;
                                        width: 50px;
                                        line-height: 50px;
                                    }
                                    .field label {
                                        position: absolute;
                                        top: 50%;
                                        transform: translateY(-50%);
                                        left: 45px;
                                        pointer-events: none;
                                        color: #666666;
                                    }
                                    .field input:valid ~ label {
                                        opacity: 0;
                                    }
                                    .forgot-pass {
                                        text-align: left;
                                        margin: 10px 0 10px 5px;
                                    }
                                    .forgot-pass a {
                                        font-size: 16px;
                                        color: #3498db;
                                        text-decoration: none;
                                    }
                                    .forgot-pass:hover a {
                                        text-decoration: underline;
                                    }
                                    button {
                                        margin: 15px 0;
                                        width: 100%;
                                        height: 50px;
                                        font-size: 18px;
                                        line-height: 50px;
                                        font-weight: 600;
                                        background: #dde1e7;
                                        border-radius: 25px;
                                        border: none;
                                        outline: none;
                                        cursor: pointer;
                                        color: #595959;
                                        box-shadow: 2px 2px 5px #BABECC,
                                                    -5px -5px 10px #ffffff73;
                                    }
                                    button:focus {
                                        color: #3498db;
                                        box-shadow: inset 2px 2px 5px #BABECC,
                                                    inset -5px -5px 10px #ffffff73;
                                    }
                                    .sign-up {
                                        margin: 10px 0;
                                        color: #595959;
                                        font-size: 16px;
                                    }
                                    .sign-up a {
                                        color: #3498db;
                                        text-decoration: none;
                                    }
                                    .sign-up a:hover {
                                        text-decoration: underline;
                                    }
                                 
                    
                `}
            </style>
            <div className="content">
                <div className="text">
                    Sign Up Form
                </div>
                <form onSubmit={handleSub}>
                    <div className="field">
                        <input
                            type="text"
                            
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <span className="fas fa-user"></span>
                        <label>Email</label>
                    </div>
                    <div className="field">
                        <input
                            type="password"
                           
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <span className="fas fa-lock"></span>
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input
                            type="password"
                          
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        <span className="fas fa-lock"></span>
                        <label>Confirm Password</label>
                    </div>
                    <br></br>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
