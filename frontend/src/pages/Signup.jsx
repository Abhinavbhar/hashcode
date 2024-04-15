import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata={name,email,password}
    const response = axios.get('http://localhsot:3000/auth/signup',formdata)

    // Implement form submission logic here (e.g., send data to server)
    console.log('Form submitted:', { name, email, password });

    // Reset form after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-green-700 mb-10">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
