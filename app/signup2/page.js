


"use client"
import React, { useState } from 'react';

function Page() {
  const [registrationUser, setRegistrationUser] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userfirstname') {
      setFirstName(value);
    } else if (name === 'userlastname') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'height') {
      setHeight(value);
    } else if (name === 'weight') {
      setWeight(value);
    }
  };

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100; // Convert height to meters
    const weightInKg = parseFloat(weight);

    if (!isNaN(heightInMeters) && !isNaN(weightInKg) && heightInMeters > 0 && weightInKg > 0) {
        const bmi = weightInKg / (heightInMeters * heightInMeters);
      return bmi.toFixed(2); // Round BMI to two decimal places
    }

    return '';
  };

  const handleSubmit = () => {
    const bmi = calculateBMI();
    setRegistrationUser([...registrationUser, { first: firstName, last: lastName, email, bmi }]);
    console.log(registrationUser);

    // Clear input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setHeight('');
    setWeight('');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">User Registration</h1>

      {/* Input fields */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">First Name:</label>
        <input
          type="text"
          name="userfirstname"
          placeholder="First Name"
          onChange={handleInputChange}
          value={firstName}
          className="border rounded w-full py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name:</label>
        <input
          type="text"
          name="userlastname"
          placeholder="Last Name"
          onChange={handleInputChange}
          value={lastName}
          className="border rounded w-full py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={email}
          className="border rounded w-full py-2 px-3"
        />
      </div>      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm):</label>
        <input
          type="text"
          name="height"
          placeholder="Height"
          onChange={handleInputChange}
          value={height}
          className="border rounded w-full py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg):</label>
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          onChange={handleInputChange}
          value={weight}
          className="border rounded w-full py-2 px-3"
        />
      </div>

      {/* ... (existing button) */}
<button onClick={()=>{
    handleSubmit()
}} className='bg-blue-500 text-white rounded p-4 '>Submit</button>
      {/* Table displaying registration user data */}
      <table className="mt-8 w-full table-auto border-collapse border border-blue-500">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">BMI</th>
          </tr>
        </thead>
        <tbody>
          {registrationUser.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{user.first}</td>
              <td className="border px-4 py-2">{user.last}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.bmi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
