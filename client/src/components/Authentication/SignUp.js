import React from 'react'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
function SignUp() {

    const signupInitialValues = {
        email: '',
        password: ''
    };

    const [signup, setSignup] = useState(signupInitialValues)
    const [passShow, setPassShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    // const navigate = useNavigate()
    // const generateError = (error) => {
    //     toast.error(error, {
    //         position: "top-center",
    //     });
    // }

    const signUpUser = async (e) => {
        e.preventDefault();
      
        if (signup.email === '' || !signup.email.includes("@")) {
          toast.error("Enter a valid email");
        } else if (signup.password === '') {
          toast.error("Enter your password");
        } else if (signup.password.length < 8) {
          toast.error("Password must contain at least 8 characters");
        } else {
          setIsLoading(true);
          const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
          const userExists = existingUsers.some((user) => user.email === signup.email);
      
          if (userExists) {
            toast.error("User with this email already exists");
            setIsLoading(false);
          } else {

            existingUsers.push(signup);
            localStorage.setItem("users", JSON.stringify(existingUsers));
            toast.succes("Sign Up Successfull");
            setIsLoading(false);
            setSignup(signupInitialValues);
          }
        }
      };      
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {isLoading && <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                background: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color:'green'
            }} ><Loader /></div>}
            <div className="container">
                <div className="form">
                    <h1 className="text-xl font-bold">Create a new account</h1>
                    <form className="space-y-4" action="#">
                        <div>
                            <label htmlFor="email" className="label">Your email</label>
                            <input
                                type="email"
                                name="email"
                                value={signup.email}
                                onChange={(e) => onInputChange(e)}
                                id="email"
                                autoComplete="email"
                                className="input"
                                placeholder="Enter your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="label">Password</label>
                            <div className="flex relative">
                                <input
                                    type={!passShow ? "password" : "text"}
                                    value={signup.password}
                                    onChange={(e) => onInputChange(e)}
                                    name="password"
                                    id="password"
                                    autoComplete="password"
                                    placeholder="••••••••"
                                    className="input"
                                />
                                <div
                                    className="show-password"
                                    onClick={() => setPassShow(!passShow)}
                                >
                                    <box-icon type="solid" name="show"></box-icon>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={(e) => signUpUser(e)}
                            className="submit-button"
                        >
                            Sign Up
                        </button>
                        <p className="text-small">
                            Already have an account?{' '}
                            <Link to="/" className="link">
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>    </>
    )
}

export default SignUp
