
'use client'
import { useEffect, useState } from "react"

export default function Home() {

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