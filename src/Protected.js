import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
    const { component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("list");
        console.log(login ,"login");
        if (!login) {
            navigate("/login")
        }else{
            navigate('/studentdata')
        }
    })

    return (<>
        <div>
           
            <component />

        </div>
    </>)
}
export default Protected;