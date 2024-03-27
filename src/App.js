import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import Studata from "./Studata";
import Navbar from "./Navbar";
// import Protected from "./Protected";
// import Modal from "./components/Modal"

import { Route, Routes, useNavigate } from "react-router-dom";
const App = () => {
    return (<>
        <Navbar />
        <Routes>
            <Route path="/" Component={Registration} />
            <Route path="/login" Component={Login}/>
            <Route path="/studentdata"  Component={Studata} />
        </Routes>
    </>)
}
export default App;