import { useState } from 'react'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";


export default function Register() {
    const [dataRegister, setDataRegister] = useState({ name: '', email: '', password: '' })
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()

    const onChange = (e) => {
        setDataRegister({
            ...dataRegister,
            [e.target.name]: e.target.value
        })
    }


    const registerClick = () => {
        if (agree) {
            axios.post(`${import.meta.env.VITE_API_URL}/users`, { name: dataRegister.name, email: dataRegister.email, password: dataRegister.password })
                .then((res) => {
                    console.log(res)
                    confirmAlert({
                        title: 'Account has been set up',
                        message: `Account activated successfully, please login`,
                        buttons: [
                            {
                                label: "Ok",
                                onClick: () => {
                                    navigate("/login");
                                }
                            }
                        ]
                    });
                })
                .catch((err) => {
                    toast.error(err.response.data.message)
                })
        } else {
            toast.warning('Click "I agree to terms & conditions" first!')

        }

    }



    return (
        <>
            <div className="container">
                <ToastContainer />
                <h1 className="Title">Recipe...</h1>
                <h2 className="text1">Let’s Get Started !</h2>
                <p className="text2">Create new account to access all features</p>
                <div className="form-register">
                    <form>
                        <label>Name</label>
                        <br />
                        <input type="name" placeholder="Name" value={dataRegister.name} onChange={onChange} name='name' />
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="email" placeholder="examplexxx@gmail.com" value={dataRegister.email} onChange={onChange} name='email' />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" placeholder="Password" value={dataRegister.password} onChange={onChange} name='password' />
                    </form>
                </div>
                <div className="form-check">
                    <input type="checkbox" value={agree} onChange={(e) => setAgree(!agree)} />
                    <label id="">I agree to terms & conditions</label>
                </div>
                <div className="user-agree">
                    <button type="button" onClick={registerClick}>Register Account</button>
                </div>
                <div className="sign-link">
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <p>
                            Already have account?<a href="#">Log in Here</a>
                        </p>
                    </Link>
                </div>
            </div>
        </>

    )
}