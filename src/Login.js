import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [paswordData, setPaswordData] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const StudentList = JSON.parse(localStorage.getItem("list"));
    if (StudentList && location.state?.fromRegister) {
      setUser(location.state?.email);
      setPaswordData(location.state?.password);
    }
  }, []);

  const CheckUser = () => {
    const StudentList = JSON.parse(localStorage.getItem("list"));
    if (StudentList.length <= 0) {
      return false;
    }
    const findUser = StudentList.find(
      (i) =>
        i.email.trim().toLowerCase() === user.trim().toLowerCase() &&
        i.password.trim().toLowerCase() === paswordData.trim().toLowerCase()
    );
    console.log(StudentList);
    return !!findUser;
  };

  const loginBtn = (e) => {
    e.preventDefault();
    const elements = new FormData(e.currentTarget);
    const email = elements.get("email");
    const password = elements.get("password");
    console.log(email);
    if (email === "" && password === "") {
      alert("please fill Email and password");
    } else {
      const result = CheckUser();
      console.log(result);
      if (result) {
        setUser("");
        setPaswordData("");
        navigate("/studentdata");
      } else {
        alert("user not found");
      }
    }
  };
  return (
    <>
      <div className="container-fluid ">
        <form className="mx-auto" onSubmit={loginBtn}>
          <h1 className="text-center">Login</h1>
          <div className="mb-2 mt-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={paswordData}
              onChange={(e) => setPaswordData(e.target.value)}
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="mb-2 mt-5">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
