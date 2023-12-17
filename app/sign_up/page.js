
'use client'


import React, { useState } from 'react'

export default function page() {


    const [registrationData, setregistrationData] = useState([])
    const [userData, setuserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })
    function handleChange(event) {
        var inputNames = event.target.name
        var inputValues = event.target.value
        console.log(inputNames, event);
        if (inputNames === 'userfirstname') {
            userData.firstName = inputValues
        }
        else if (inputNames === 'userlastname') {
            userData.lastName = inputValues
        }
        else if (inputNames === 'email') {
            userData.email = inputValues
        }
    }
    const userTable = () => {
        setregistrationData([...registrationData, userData])
        console.log(registrationData);
        setuserData({
            firstName: null,
            lastName: null,
            email: null,
        })
    }

    // const [registrationData, setregistrationData] = useState([])
    // const [userData, setuserData] = useState({
    //     firsName : "",
    //     lastName : "",
    //     email : "",
    // })
    // function handleChange(event) {
    //     var inputNames = event.target.name
    //     var inputValues = event.target.value
    //     if (inputNames === "firstname") {
    //         userData.firsName = inputValues
    //     }
    //     else if (inputNames === "lastname") {
    // userData.lastName = inputValues        
    //     }
    //     else if (inputNames === "email") {
    //         userData.email =inputValues
    //     }
    // }
    // const [userTable, setuserTable] = useState()
    // setregistrationData([...registrationData, userData])
    // setuserData({
    //     firsName : null,
    //     lastName : null,
    //     email : null,
    // })
    return (
        <div>
            {/* <h1>First Name</h1>
            <input type='text' name='userfirstname' placeholder='First Name' onChange={handleChange} />
            <h1>Last Name</h1>
            <input type='text' name='userlastname' placeholder='last Name' onChange={handleChange} />
            <h1>Email</h1>
            <input type='text' name='email' placeholder='email' onChange={handleChange} />
            <br />
            <button onClick={userTable}>Submit</button>

            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {registrationData.map((data, index) => <tr key={index}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                    </tr>)}
                </tbody>
            </table> */}

            {/* <h4>First Name</h4>
            <input type='text' name='firstname' placeholder='First Name' onChange={handleChange} />
            <h4>Last Name</h4>
            <input type='text' name='lastname' placeholder='Last Name' onChange={handleChange} />
            <h4>Email</h4>
            <input type='text' name='email' placeholder='Email' onChange={handleChange} />
            <br />
            <button onClick={userTable}>Table Buttton</button>
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {registrationData.map((information, index) => <tr key={index}>
                        <td>{information.firstName}</td>
                        <td>{information.lastName}</td>
                        <td>{information.email}</td>
                    </tr>)}
                </tbody>
            </table> */}










        </div>
    )
}
