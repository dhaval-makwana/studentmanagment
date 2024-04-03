import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login";
import Registration from "./Registration";
import { useNavigate } from "react-router-dom";
const Studata = () => {
    const [editFullname, seteditFullname] = useState("")
    const [editLastname, seteditLastname] = useState("")
    const [editPhone, seteditPhone] = useState("")
    const [editEmail, seteditEmail] = useState("")
    const [editPassword, seteditPassword] = useState("")
    const [Datalist, setDatalist] = useState([])
    const [records, setRecords] = useState(Datalist);
    const navigate = useNavigate();

    useEffect(() => {
        let dasda = JSON.parse(localStorage.getItem('list'))
        if (dasda) {
            setDatalist(dasda)
            // setRecords(dasda)

        }
    }, [])



    // Delete //
    const Delete = (name) => {
        console.log(name, "name");
        let deleteItem = [...Datalist];
        const newdata = deleteItem.filter((da) => da.fullname !== name)
        //   after search field setRecords.... without search field setDatalist   // 
        setDatalist(newdata)
        localStorage.setItem("list", JSON.stringify(newdata));
    }



    // Edit //
    const Edit = (name) => {
        const editItem = [...Datalist]
        let index = editItem.findIndex((i) => i.fullname === name);

        seteditFullname(editItem[index].fullname)
        seteditLastname(editItem[index].lastname)
        seteditPhone(editItem[index].phone)
        seteditEmail(editItem[index].email)
        seteditPassword(editItem[index].password)
        localStorage.setItem("list", JSON.stringify(editItem))
        localStorage.setItem("editindex", index);
    }


    // Edited //
    const editedBtn = () => {
        let editindex = localStorage.getItem("editindex");
        console.log(editindex, "editindex");
        const EditedItem = [...Datalist]
        EditedItem[editindex] = {
            email: editEmail,
            fullname: editFullname,
            lastname: editLastname,
            password: editPassword,
            phone: editPhone
        }
        setDatalist(EditedItem);
        //   after search field setRecords.... without search setDatalist   // 
        localStorage.setItem("list", JSON.stringify(EditedItem))
        setTimeout(() => {

        }, 1000);
        seteditFullname('')
        seteditLastname('')
        seteditPhone('')
        seteditEmail('')
        seteditPassword('')

    }

    //search filter//
    // const Filter = (event) => {
    //     setRecords(Datalist.filter(f => f.fullname.toLowerCase().includes(event.target.value)));
    // };
    const logout = () => {
        navigate('/')
    }

    return (<>
        <div className="container-fluid">
            <div className="col-8 mx-auto">
                <div className="row parts p-3">
                    <div className="heading col-12 mx-auto" >
                        {/* <input id="search" type="text" className="inputitem" placeholder="search" onChange={Filter} /> */}
                        <h1 className=" title d-flex justify-content-center align-items-center">Students Data</h1>
                    </div>
                    <button className="btn btn-light logout" onClick={logout}>logout</button>
                    {editFullname !== "" &&
                        <div className="col-12 mx-auto  editbox">
                            <input type="text" className="inputBox" value={editFullname} onChange={(e) => seteditFullname(e.target.value)} placeholder="fullname" />
                            <input type="text" className="inputBox" value={editLastname} onChange={(e) => seteditLastname(e.target.value)} placeholder="lastname" />
                            <input type="text" className="inputBox" value={editPhone} onChange={(e) => seteditPhone(e.target.value)} placeholder="phone" />
                            <input type="text" className="inputBox" value={editEmail} onChange={(e) => seteditEmail(e.target.value)} placeholder="email" />
                            <input type="text" className="inputBox" value={editPassword} onChange={(e) => seteditPassword(e.target.value)} placeholder="password" />
                            <button className="edited" onClick={editedBtn}>edited</button>
                        </div>
                    }
                    <div className="maintable">


                        <table class="table table-striped col-12 mx-auto overflow-x:auto; mytable">
                            <thead>
                                <tr>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">email</th>
                                    <th scope="col">password</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Datalist.map((data, index) => {
                                    //after search filter records.map ...without search filter Datalist.map//
                                    return (
                                        <tr id={index}>
                                            <td>{data.fullname}</td>
                                            <td>{data.lastname}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.email}</td>
                                            <td>{data.password}</td>
                                            <td>
                                                <div className=" action ">
                                                    <button type="button" class="btn btn-outline-dark buttons" onClick={() => Edit(data.fullname)}><i class="fa fa-edit"></i></button>
                                                    <button type="button" class="btn btn-outline-danger buttons" onClick={() => Delete(data.fullname)}><i class="fa fa-trash" ></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}
export default Studata;

