
'use client'
import { useEffect, useState } from "react"

export default function Home() {

  // useEffect(() => {
  // localStorage.setItem("newData", "675708460876YVCYS&^")
  // console.log(localStorage.getItem("newData"));

  // }, [])

  //   // var CurrentDate = new Date()
  //   // function getCurrentTime(time) {

  //   //   if (time === "Mounth") {
  //   //     getCurrentMounth()
  //   //   }
  //   //   else if (time === "Hours") {
  //   //     getCurrentHours()
  //   //   }
  //   //   else if (time === "Minutes") {
  //   //     getCurrentMinutes()
  //   //   }
  //   // }

  //   // function getCurrentMounth() {
  //   //   var CurrentMounth = CurrentDate.getMonth()
  //   //   alert(CurrentMounth)
  //   // }
  //   // function getCurrentHours() {
  //   //   var CurrentHours = CurrentDate.getHours()
  //   //   alert(CurrentHours)
  //   // }
  //   // function getCurrentMinutes() {
  //   //   var CurrentMinutes = CurrentDate.getMinutes()
  //   //   alert(CurrentMinutes)
  //   // }
  //   var registration = []

  // function addUser(){
  // var userDeta = {
  // name : prompt("Name?"),
  // phoneNumber : Number(prompt("Phone Number")),
  // Country : prompt("Country Name?"),
  // }
  // registration.push(userDeta)
  // setData(data+1)

  // console.log(data);
  // }

  // const [goodCount, setgoodCount] = useState(0)
  // const [neutralCount, setneutralCount] = useState(0)
  // const [badCount, setbadCount] = useState(0)

  // function goodCounter() {
  //   setgoodCount(goodCount + 1)
  // }
  // function neutralCounter() {
  //   setneutralCount(neutralCount + 1)
  // }
  // function badCounter() {
  //   setbadCount(badCount + 1)
  // }

  // const handleChange = (event) => {
  //   var inputData = event.target.value
  //   var inputName = event.target.name
  //   console.log("Typed in " + inputName + " input" , inputData);
  // }


  // const [listItems, setlistItems] = useState([])
  // const [num, setNum] = useState(0)

  // const addListItem = () => {
  //   setNum(num + 1)}

  //   let currentItems = listItems;
  //   currentItems.push(num)
  //   setlistItems(currentItems)
  //   console.log(listItems);
  // setlistItems([...listItems, num]);


  // const [registrationData, setRegistrationData] = useState([])
  // var [userDeta, setUserDeta] = useState({
  //   firstName: null,
  //   lastName: null,
  //   email: null,
  // })

  // function handleChange(event) {
  //   var inputValues = event.target.value
  //   var inputName = event.target.name
  //   if (inputName === "userfirstname") {
  //     userDeta.firstName = inputValues
  //   }
  //   else if (inputName === "userlasttname") {
  //     userDeta.lastName = inputValues
  //   }
  //   else if (inputName === "useremail") {
  //     userDeta.email = inputValues
  //   }
  // }
  // const creatTable = () => {
  //   setRegistrationData([...registrationData, userDeta]);
  //   console.log(registrationData, userDeta);
  //   setUserDeta({
  //     firstName: null,
  //     lastName: null,
  //     email: null,
  //   })
  // }
  const [userDeta, setUserDeta] = useState(JSON.parse(localStorage.getItem("currentUsers")) || []);
  const [firstName, setFirsName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const checkValues = (e) => {
    const { name, value } = e.target
    if (name === "userfirstname") {
      setFirsName(value)
    }
    else if (name === "userlastname") {
      setLastName(value)
    }
    else if (name === "useremail") {
      setEmail(value)
    }
    else if (name === "userheight") {
      setHeight(value)
    }
    else if (name === "userweight") {
      setWeight(value)
    }
  }
  useEffect(() => {
    localStorage.setItem('currentUsers', JSON.stringify(userDeta))
    // localStorage.removeItem('currentUsers')
    console.log(userDeta);
  }, [userDeta])
  function deleteUser(i) {
    if (confirm("Do you want to delete" + " " + userDeta[i].firstName + ", " + userDeta[i].lastName + ", " + userDeta[i].email + ", " + userDeta[i].bmi)) {

      // if (userDeta && userDeta.length>i) {
      const updateUserData = [...userDeta]
      updateUserData.splice(i, 1)
      setUserDeta(updateUserData)
      console.log(userDeta)
    }
  }
  const bmi = (weight / (height * height)).toFixed(2);
  const submit = () => {
    if (firstName !== "" && lastName !== "" && email !== "" && height !== "" && weight !== "") {
      setUserDeta([...userDeta, { firstName, lastName, email, bmi }])
    }
    else if (firstName === "" && lastName === "" && email === "" && height === "" && weight === "") {
      alert("Fill the form completely")
    }
    // else {
    //   const empty = []
    //   if (firstName === "") {
    //     empty.push("First Name")
    //   }
    //   if (lastName === "") {
    //     empty.push("Last Name")
    //   }
    //   if (email === "") {
    //     empty.push("Email")
    //   }
    //   if (height === "") {
    //     empty.push("Height")
    //   }
    //   if (weight === "") {
    //     empty.push("Weight")
    //   }
    //   var a = empty.join(" and ")
    //   alert("Fill " + a);
    // }

    // else {
    //   if (firstName === "") {
    //     alert("Fill fist name")
    //   }
    //   else if (lastName === "") {
    //     alert("Fill last name")
    //   }
    //   else if (email === "") {
    //     alert("Fill email")
    //   }
    //   else if (height === "") {
    //     alert("Fill height")
    //   }
    //   else if (weight === "") {
    //     alert("Fill weight")
    //   }
    // }
    // setFirsName("")
    // setLastName("")
    // setEmail("")
    // setHeight("")
    // setWeight("")
  }
  // console.log(userDeta);
  return (
    <div >
      {/* <input type="text" onChange={handleChange} name="username" placeholder="username" />
      <input type="text" onChange={handleChange} name="phoneNumber" placeholder="phone Number" />
      <input type="text" onChange={handleChange} name="country" placeholder="country" /> */}

      {/* <button onClick={() => getCurrentTime("Mounth")}>Current Mounth</button>
    <button onClick={() => getCurrentTime("Hours")}>Current Hours</button>
    <button onClick={() => getCurrentTime("Minutes")}>Current Minutes</button> */}
      {/* <button onClick={() => addUser()}>Add  User</button> */}
      {/* <h1>Good Count {goodCount}</h1> */}
      {/* <button onClick={() => goodCounter()}>Good Count</button> */}
      {/* <h1>Neutral Count {neutralCount}</h1> */}
      {/* <button onClick={() => neutralCounter()}>Neutral Count</button> */}
      {/* <h1>Bad Count {badCount}</h1> */}
      {/* <button onClick={() => badCounter()}>Bad Count</button> */}
      {/* <button onClick={() => addListItem()}>add List Item</button>
        <table border={1}>
          <thead>
            <tr>
              <th>Number</th>
              <th>index</th>
            </tr>
          </thead>
          {listItems.map((item, index) => <tr key={index}>

            <td>{item}</td><td>{index}</td>
          </tr>
          )}
        </table> */}


      {/* <h3>First Name:</h3>
      <input type="text" name="userfirstname" onChange={handleChange} value={userDeta.firstName} placeholder="First Name" />
      <h3>Last Name:</h3>
      <input type="text" name="userlasttname" onChange={handleChange} value={userDeta.lastName} placeholder="Last Name" />
      <h3>Email:</h3>
      <input type="text" name="useremail" onChange={handleChange} value={userDeta.email} placeholder="Email" />
      <br />
      <button onClick={creatTable}>sign Up</button> */}

      {/* <table border={1}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {registrationData.map((user, index) => <tr key={index}>

          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>

        </tr>)}
      </table>  */}
      <div class="font-sans bg-gray-100 p-4">

        <div class="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">

          <h3 class="text-lg font-semibold mb-2">First Name</h3>
          <input type="text" name="userfirstname" placeholder="First Name" value={firstName} class="w-full p-2 border border-gray-300 rounded-md mb-4" onChange={checkValues} />

          <h3 class="text-lg font-semibold mb-2">Last Name</h3>
          <input type="text" name="userlastname" placeholder="Last Name" value={lastName} class="w-full p-2 border border-gray-300 rounded-md mb-4" onChange={checkValues} />

          <h3 class="text-lg font-semibold mb-2">Email</h3>
          <input type="text" name="useremail" placeholder="Email" value={email} class="w-full p-2 border border-gray-300 rounded-md mb-4" onChange={checkValues} />

          <h3 class="text-lg font-semibold mb-2">Height in meters</h3>
          <input type="number" name="userheight" placeholder="Height" value={height} class="w-full p-2 border border-gray-300 rounded-md mb-4" onChange={checkValues} />

          <h3 class="text-lg font-semibold mb-2">Weight in KG</h3>
          <input type="number" name="userweight" placeholder="Weight" value={weight} class="w-full p-2 border border-gray-300 rounded-md mb-4" onChange={checkValues} />

          <button class="bg-green-500 text-white py-2 px-4 rounded-md mb-4" onClick={submit}>BMI</button>
          <br />
          <button class="bg-green-500 text-white py-2 px-4 rounded-md mb-4" onClick={() => {
            localStorage.removeItem('currentUsers')
            setUserDeta([])
          }}>Delete all</button>
          <table class="w-full border-collapse border-2 border-gray-500">
            <thead>
              <tr class="bg-green-500 text-white">
                <th class="py-2 px-4">First Name</th>
                <th class="py-2 px-4">Last Name</th>
                <th class="py-2 px-4">Email</th>
                <th class="py-2 px-4">BMI</th>
                <th class="py-2 px-4">Delete</th>
              </tr>
            </thead>
            <tbody>
              {userDeta && userDeta.map((data, index) => (
                <tr key={index} class="{index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200">
                  <td class="py-2 px-4">{data.firstName}</td>
                  <td class="py-2 px-4">{data.lastName}</td>
                  <td class="py-2 px-4">{data.email}</td>
                  <td class="py-2 px-4">{data.bmi}</td>
                  <td class="py-2 px-4"> <button onClick={() => deleteUser(index)}>Delete user</button></td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>

    </div>
  )
}