import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/login';


export default function Login() {
    const [dataLogin, setDataLogin] = useState({ email: '', password: '' })
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errorMessage, isError, isLoading } = useSelector((state) => state.login);

    const onChange = (e) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (isError) {
            toast.error(errorMessage)
        }
    }, [isError, errorMessage])

    const loginClick = () => {
        if (agree) {
            dispatch(loginAction(dataLogin, navigate));
        } else {
            toast.warning('Click "I agree to terms & conditions" first!')

        }

    }


    return (
        <>
            <div className="container">
                <ToastContainer />
                <h1 className="Title">Recipe...</h1>
                <h2 className="text1">Welcome</h2>
                <p className="text2">Log in into your exiting account</p>
                <div className="form-login">
                    <form>
                        <label>Email</label>
                        <br />
                        <input type="email" placeholder="examplexxx@gmail.com" value={dataLogin.email} onChange={onChange} name='email' />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" placeholder="Password" value={dataLogin.password} onChange={onChange} name='password' />
                    </form>
                </div>
                <div className="form-check">
                    <input type="checkbox" value={agree} onChange={(e) => setAgree(!agree)} />
                    <label id="">I agree to terms & conditions</label>
                </div>
                {
                    !isLoading ?
                        <div className="user-agree">
                            <button type="button" onClick={loginClick}>Login</button>
                        </div>
                        :
                        <div className="spinner-border text-warning mt-3" role="status"></div>
                }
                <div className="sign-link">
                    <p>
                        Don’t have an account? <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit' }}><a href="#">Sign Up</a> </Link>
                    </p>
                </div>
            </div>
        </>

    )
}