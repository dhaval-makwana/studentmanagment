import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/school.avif";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [fullname, setFullname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Submit = () => {
    if (fullname === "") {
      alert("enter fullname");
    } else if (lastname === "") {
      alert("enter lastname");
    } else if (phone === "") {
      alert("enter phone");
    } else if (email === "") {
      alert("enter email");
    } else if (password === "") {
      alert("enter password");
    } else {
      let data = {
        fullname: fullname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
      };
      console.log(data, "data");
      let names = JSON.parse(localStorage.getItem("list")) || [];
      console.log(names, "names");
      if (data === null) {
        names = [];
      } else {
        names.push(data);
        console.log(names, "names");
        localStorage.setItem("list", JSON.stringify(names));
        setTimeout(() => {
          navigate("/login", {
            state: { fromRegister: true, email: email, password: password },
          });
        }, 1000);
      }
    }
  };
  return (
    <>
      <div className="container-fluid">
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-8 mx-auto">
                <div className="row parts p-3">
                  <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column part_1">
                    <h1 className="text-center">Registration Form</h1>
                    <div className="mb-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        id="exampleFormControlInput1"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="form-label"
                      >
                        Lastname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        id="exampleFormControlInput2"
                        placeholder="Enter your Lastname"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="exampleFormControlInput3"
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="exampleFormControlInput3"
                        placeholder="Enter your Number"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="exampleFormControlInput4"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="exampleFormControlInput4"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="exampleFormControlInput5"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="exampleFormControlInput5"
                        placeholder="Enter your password"
                      />
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={Submit}
                    >
                      Submit
                    </button>
                    <NavLink
                      id="emailHelp"
                      className="form-text"
                      to="/login"
                      state={{ fromRegister: false }}
                    >
                      Already Logged in
                    </NavLink>
                  </div>
                  <div className="col-lg-6 order-lg-2 mx-auto header-img">
                    <img
                      src={web}
                      className="img-fluid animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* { <div className="showitems">
                {item?.map((elem, ind) => {
                    return <div className="eachitem" key={ind}>
                        <h3>{elem}</h3>
                    </div>
                })}

            </div> } */}
      </div>
    </>
  );
};
export default Registration;
