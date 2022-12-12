import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const Users = () => {
    const history = useNavigate();
    const data = [
        {
            id: 1,
            address: "Bihar,city",
            confirmpassword: "12345678",
            email: "test1@gmail.com",
            firstname: "Anjali",
            lastName: "Singh",
            linkedIn: "test@linkedin.com",
            mobileNumber: "7654432256",
            password: "12345678"
        },
        {
            id: 2,
            address: "Bihar,city",
            confirmpassword: "12345678",
            email: "test2@gmail.com",
            firstname: "Shivani",
            lastName: "Singh",
            linkedIn: "test@linkedin.com",
            mobileNumber: "7654432256",
            password: "12345678"
        },
        {
            id: 3,
            address: "Bihar,city",
            confirmpassword: "12345678",
            email: "test3@gmail.com",
            firstname: "Harshal",
            lastName: "Singh",
            linkedIn: "test@linkedin.com",
            mobileNumber: "7654432256",
            password: "12345678"
        },
        {
            id: 4,
            address: "Bihar,city",
            confirmpassword: "12345678",
            email: "test4@gmail.com",
            firstname: "Shayan",
            lastName: "Singh",
            linkedIn: "test@linkedin.com",
            mobileNumber: "7654432256",
            password: "12345678"
        },
        {
            id: 5,
            address: "Bihar,city",
            confirmpassword: "12345678",
            email: "test@gmail.com",
            firstname: "Shri",
            lastName: "Singh",
            linkedIn: "test@linkedin.com",
            mobileNumber: "7654432256",
            password: "12345678"
        },
        {
            id: 6,
            address: "Bihar,city",
            confirmpassword: "12345678",
            email: "test@gmail.com",
            firstname: "Jyothi",
            lastName: "Singh",
            linkedIn: "test@linkedin.com",
            mobileNumber: "7654432256",
            password: "12345678"
        },
    ]

    const updateUser = (firstname, lastName, email, mobileNumber, password,confirmpassword,address,linkedIn) => {
        //e.preventDefault();
        const getuserArr = [{
            firstname: firstname,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            password: password,
            confirmpassword: confirmpassword,
            address: address,
            linkedIn: linkedIn
        }]
        //console.log(JSON.parse(getuserArr));
    
        if (getuserArr && getuserArr.length) {
          history("/edit", {
            state: { userData: getuserArr },
          });
        }
      };
    
      const deleteUserYes = (e) => {
        //delete user function
        //getuserArr.email
      };
      const deleteUser = (e) => {
        confirmAlert({
          title: "Confirm to submit",
          message: "Are you sure you want to delete user ",
          buttons: [
            {
              label: "Yes",
              onClick: deleteUserYes(),
            },
            {
              label: "No",
              onClick: () => alert("Click No"),
            },
          ],
        });
      };

    return (
        <div>
            <h1>Users Info</h1>
            {/* <Table>
                <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Mobile no</th>
                    <th>Email</th>
                    <th>LinkedIn</th>
                    
                </tr>
                </thead>
                <tbody>
                
                    {data.map(user => {  
                        <tr key={user.email}>
                             <td>ANimal</td>
                            <td>{user.email}</td>
                        </tr>
                       
                    })}
                
                </tbody>
            </Table> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Mobile no</th>
                    <th>Email</th>
                    <th>LinkedIn</th>
                    <th>Address</th>
                    <th>Password</th>
                    <th>ConfirmPassword</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                    {data.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.lastName}</td>
                                <td>{user.mobileNumber}</td>
                                <td>{user.email}</td>
                                <td>{user.linkedIn}</td>
                                <td>{user.address}</td>
                                <td>{user.password}</td>
                                <td>{user.confirmpassword}</td>
                                
                                <td>
                                    <Button
                                        variant="primary"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            updateUser(user.firstname, user.lastName, user.email, user.mobileNumber, user.password,user.confirmpassword,user.address,user.linkedIn)
                                        }}
                                        //onClick={updateUser(user.firstname, user.email)}
                                        style={{background: "rgb(67, 185, 127)"}}
                                        type="submit"
                                    >
                                        update
                                    </Button>

                               
                                    <Button
                                        variant="primary"
                                        //className="col-lg-6"
                                        onClick={deleteUser}
                                        style={{ background: "rgb(67, 185, 127)" }}
                                        type="submit"
                                    >
                                        delete
                                    </Button>
                                </td>
                            </tr>)

                    })}
                    {/* </tr> */}
                </tbody>
            </Table>
        </div>
    )
}

export default Users