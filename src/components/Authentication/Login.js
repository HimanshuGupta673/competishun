import React from 'react'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
function Login() {

    const LoginInitialValues = {
        email: '',
        password: ''
    };

    const [Login, setLogin] = useState(LoginInitialValues)
    const [passShow, setPassShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const onInputChange = (e) => {
        setLogin({ ...Login, [e.target.name]: e.target.value })
    }

    // const navigate = useNavigate()
    // const generateError = (error) => {
    //     toast.error(error, {
    //         position: "top-center",
    //     });
    // }

    const loginUser = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
      
        const user = users.find((user) => user.email === login.email);
      
        if (!user) {
          toast.error("User does not exist");
        } else if (user.password !== login.password) {
          toast.error("Incorrect email or password");
        } else {
          setIsLoading(true);
      
          setTimeout(() => {
            setIsLoading(false);
            setUser(login.email);
            localStorage.setItem('login', login.email);
            setLogin(loginInitialValues);
            toast.success('Login Successful!', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          }, 1000); 
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
                color: 'green'
            }} ><Loader /></div>}
            <div className="container">
                <div className="form">
                    <h1 className="text-xl font-bold">Sign in to your account</h1>
                    <form className="space-y-4" action="#">
                        <div>
                            <label htmlFor="email" className="label">Your email</label>
                            <input
                                type="email"
                                name="email"
                                value={login.email}
                                onChange={(e) => onValueChange(e)}
                                id="email"
                                autoComplete="email"
                                className="input"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="label">Password</label>
                            <div className="flex relative">
                                <input
                                    type={!passShow ? "password" : "text"}
                                    value={login.password}
                                    onChange={(e) => onValueChange(e)}
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
                        <a to="/forgot-password" className="forgot-password">
                            Forgot password?
                        </a>
                        <button
                            type="submit"
                            onClick={(e) => loginUser(e)}
                            className="submit-button"
                        >
                            Sign in
                        </button>
                        <p className="text-sm font-light">
                            Don’t have an account yet?{' '}
                            <a to="/signUp" className="dont-have-account">
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>   
             </>
    )
}

export default Login
