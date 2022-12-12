import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        firstname: "",
        lastName: "",
        mobileNumber: "",
         email: "",
         linkedIn:"",
         address:"",
         password: "",
        confirmpassword: ""
    })

   
    var pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);

    const [data,setData] = useState([]);
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

    const addData = (e) => {
        e.preventDefault();

        const { firstname, lastName,mobileNumber,linkedIn,address,email, confirmpassword, password } = inpval;

        if (firstname === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        }   else if (lastName === "") {
            toast.error(' lastname field is requred!',{
                position: "top-center",
            });
        } else if(mobileNumber===""){ 
            toast.error('MobileNumber field is requred!',{
            position: "top-center",
        });}
        else if (pattern.mobileNumber) {
            toast.error('MobileNumber Shuold be  ten digit',{
               position: "top-center",
           });
       }
      else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (address === "") {
             toast.error('Address field is requred',{
                position: "top-center",
            });
        }else if (password === "") {
            toast.error('Password field is requred',{
               position: "top-center",
           });
       }
         else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        }else if (confirmpassword === "") {
            toast.error('confirmpassword field is requred',{
               position: "top-center",
           });
       }else if (confirmpassword !=password ) {
        toast.error('confirmpassword field is should be match',{
           position: "top-center",
       });
   }  else {
            console.log("data added succesfully");
            history("/login")
            alert("Signup Successfull!")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container mt-4">
            <div className="row">
                    <div className='col-md-8'>
                    <SIgn_img />
                    </div>
                    <div className='col-md-4'>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                        <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="text" name='firstname' onChange={getdata} placeholder="FirstName" />
                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="text" name='lastName' onChange={getdata} placeholder="LastName" />
                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="text" name='mobileNumber' onChange={getdata} placeholder="Mobile Number" />
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="text" name='linkedIn' onChange={getdata} placeholder=" LinkedIn" />
                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="text" name='address' onChange={getdata} placeholder="Address" />
                                </Form.Group>

                                <Form.Group className="mb-3 " controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                                </Form.Group>
                                  <Form.Group className="mb-3 " controlId="formBasicPassword">

                                <Form.Control type="password" name='confirmpassword' onChange={getdata} placeholder="Confirm Password" />
                                </Form.Group>

                            <Button variant="primary" className='col-lg-3' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                            <Button variant="primary" className='col-lg-3' onChange={getdata} type="forget">
                                Reset
                            </Button>

                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/">SignIn</NavLink></span> </p>
                    </div>
                    </div>
                    
                
                <ToastContainer />
            </div>
            
        </>
    )
}

export default Signup