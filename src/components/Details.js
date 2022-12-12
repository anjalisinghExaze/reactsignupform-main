import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import SIgn_img from "./SIgn_img";

const Details = () => {
  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();
  const [show, setShow] = useState(false);
  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = getuser;

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    const getuserArr = localStorage.getItem("useryoutube");
    console.log(JSON.parse(getuserArr));

    if (getuserArr && getuserArr.length) {
      history("/edit", {
        state: { userData: JSON.parse(getuserArr) },
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

  const details = (e) => {
    history('/Users')
  }
  return (
    <>
      {logindata.length === 0 ? (
        "Error"
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className='col-md-12' style={{textAlign:'right'}}>
                <Button onClick={userlogout}>LogOut</Button>
                <Button onClick={details}>Admin</Button>
                <h1 style={{ textAlign: 'center' }}>Welcome To Exaze</h1>
                <h1>{logindata[0].name}</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <SIgn_img />
              </div>
            </div>
          </div>


          {logindata[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Wish you many many happy returns of the day ! 🍰
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
