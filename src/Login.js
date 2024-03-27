import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const [user, setUser] = useState();
    const [paswordData, setPaswordData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('list'))

        let updateData = data[data.length - 1];

        localStorage.setItem("updateData", JSON.stringify(updateData));

        let updated = JSON.parse(localStorage.getItem("updateData"))

        const updatedlogin = [...data]
        updatedlogin[updated] = {
            user: updated.fullname,
            paswordData: updated.password,
        }
        setUser(updated.fullname)
        setPaswordData(updated.password)


    }, [])

    const loginBtn = () => {
        let allData = JSON.parse(localStorage.getItem('list'))
        console.log(allData, "allsssssssssssssssssss");
        if (user, paswordData === "") {
            alert("blank")
        }
        else {
            navigate('/studentdata')
        }
    }
    return (<>

        <div className="container-fluid">
            <form className="mx-auto">
                <h1 className="text-center">Login</h1>
                <div class="mb-2 mt-5">
                    <label for="exampleInputEmail1" class="form-label">User Name</label>
                    <input type="text" class="form-control" value={user} onChange={(e) => setUser(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-2">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" value={paswordData} onChange={(e) => setPaswordData(e.target.value)} id="exampleInputPassword1" />
                    <NavLink id="emailHelp" className="form-text" to="/">Forget Password</NavLink>
                </div>
                <div class="mb-2 mt-5">
                    <button type="submit" class="btn btn-primary" onClick={loginBtn} >Login</button>
                </div>
            </form>
        </div>
    </>)
}
export default Login;