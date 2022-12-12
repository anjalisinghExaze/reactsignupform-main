import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../src/App.css'
import axios, { AxiosHeaders } from 'axios'
const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = async (e) => {
        e.preventDefault();
        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {
            if (getuserArr && getuserArr.length) {
                //connect to api

                const data = {
                    email: email,
                    password: password
                }

                const response = await axios.post("http://localhost:8088/api/travelportal/logInUser",
                                        data, 
                                        {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        })
                                        
                console.log(response)
                if(response.status === 200){
                    //redirect to welcome page
                    localStorage.setItem("user_login", data)
                    history("/details")
                }
                else {
                    //need to show the error message
                    toast.error('Please enter valid email and password', {
                        position: "top-center",
                    });
                }

                // const userdata = JSON.parse(getuserArr);
                // const userlogin = userdata.filter((el, k) => {
                //     return el.email === email && el.password === password
                // });
                // if (userlogin.length === 0) {
                //     alert("Invalid email or password")
                // } else {
                //     console.log("user login succesfully");
                //     alert("Sign in Succesfully")
                

                //     history("/details")
                // }
            }
        }

    }
    const signup = () => {
        history('/login')
    }
    return (
        <>
            <Button variant="primary
            " className='signup-btn'  onClick={signup} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                SignUp
                            </Button> 

            <div className="container mt-4">
                <div className="row">
                    <div className='col-md-8'>
                        <SIgn_img />
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-center '>Sign In</h3>
                        <Form >

                            <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary"  onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>   </Form>

                        <p className='mt-3'>You Don't have an Account <span><NavLink to="/login" >Register here </NavLink></span> </p>
                    </div>
                </div>
               


                <ToastContainer />
            </div>
        </>
    )
}

export default Login