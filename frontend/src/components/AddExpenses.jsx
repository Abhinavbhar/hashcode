<<<<<<< Updated upstream
=======
import axios from 'axios';
import {motion} from 'framer-motion';
>>>>>>> Stashed changes
import React, { useState } from 'react';

const AddExpenses = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
<<<<<<< Updated upstream
  };

  return (
    <div className="flex justify-end h-screen item-start">
      {/* Outlined box taking 25% of the screen with editable background */}
      <div className="w-2/6 h-2/4 mr-40 p-4 border border-black rounded-lg" style={{ 
        backgroundImage: "url('/src/assets/back_track.jpg')",
        backgroundSize: "cover" }}>
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-7 ml-20 mt-5">Add Expenses</h1>
        {/* "+" button to toggle form */}
        <button className="bg-blue-500 text-white px-5 ml-20 py-2 rounded-md" onClick={handleToggleForm}>
          +
        </button>
        {/* Form */}
        {showForm && (
          <form className="mt-5 ml-20">
            {/* Input for expense name */}
            <div className="flex items-center mb-4">
              <img src="YOUR_IMAGE_URL" alt="icon" className="w-6 h-6 mr-2" />
              <input type="text" placeholder="Expense Name" className="border border-gray-400 rounded-md px-2 py-1" />
            </div>
            {/* Input for currency */}
            <div className="flex items-center mb-4">
              <input type="text" placeholder="Currency" className="border border-gray-400 rounded-md px-2 py-1" />
            </div>
            {/* Input for description */}
            <div className="flex items-center mb-4">
              <input type="text" placeholder="Description" className="border border-gray-400 rounded-md px-2 py-1" />
            </div>
            {/* Submit button */}
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
          </form>
        )}
=======
    // console.log(calculateExpense);
  };

  const addUser = (event) => {
    event.preventDefault();
    const newUserName = event.target.elements.userName.value.trim();
    const newAmount = event.target.elements.amount.value.trim();

    if (newUserName && newAmount) {
      setUsers([...users, { name: newUserName, amount: newAmount }]);
      event.target.elements.userName.value = '';
      event.target.elements.amount.value = '';
    } else {
      alert('Please enter a user name and amount.');
    }
  };

  const removeUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const data = { users, description, totalAmount };
  
      const sendExpense = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/split`, data, {
        headers: { authorization: token }
      });
  
      if (sendExpense.status === 200 || sendExpense.status === 201) {
        alert("Expense added successfully");
        // console.log(sendExpense.data);
        window.location.href = '/dashboard';
      } else {
        alert("Failed to add expense. Please try again.");
        console.error(sendExpense.data);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    }
  };

  const handleCalculateExpense = () => {
    if (users.length === 0) {
      alert('Please add at least one user with an expense amount.');
      return;
    }

    setCalculateExpense(true);
    const totalAmount = users.reduce((acc, user) => acc + parseFloat(user.amount), 0);
    setTotalAmount(totalAmount); // Update the totalAmount state
    const averageExpense = users && users.length > 0 ? totalAmount / users.length : 0;

    // Calculate balance for each user
    const balances = users.map(user => ({
      name: user.name,
      balance: parseFloat(user.amount) - averageExpense
    }));

    // Determine payments
    const payments = [];
    let sortedBalances = [...balances].sort((a, b) => a.balance - b.balance);
    let i = 0;
    let j = sortedBalances.length - 1;

    while (i < j) {
      const debtor = sortedBalances[i];
      const creditor = sortedBalances[j];
      const paymentAmount = Math.min(Math.abs(debtor.balance), creditor.balance);

      if (paymentAmount > 0) {
        payments.push({
          from: debtor.name,
          to: creditor.name,
          amount: paymentAmount
        });

        debtor.balance += paymentAmount;
        creditor.balance -= paymentAmount;

        if (debtor.balance === 0) {
          i++;
        }
        if (creditor.balance === 0) {
          j--;
        }
      }
    }

    setCalculated(payments);
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <motion.div
      className="w-2/3 p-8 border border-black rounded-lg"
      style={{
        backgroundImage: "url('/src/assets/back_track.jpg')",
        backgroundSize: "cover",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 className="text-7xl ml-80 mt-5 font-bold mb-7" style={{ fontFamily: 'cursive' }}>
        Add Expenses
      </motion.h1>
      <form onSubmit={addUser} className={showForm ? 'visible' : 'hidden'}>
        <div className="flex items-center mb-4">
          <label htmlFor="description" className="font-bold ml-40 mr-2" style={{fontSize: '40px'}}>Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Enter a Description"
            className="border-4 border-blue-400 rounded-md px-20 py-2"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="userName" className="font-bold ml-40 mr-2" style={{fontSize: '40px'}}>User Name:</label>
          <input
            type="text"
            id="userName"
            placeholder="Enter User Name"
            className="border-4 border-blue-400 rounded-md px-20 py-2"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="amount" className="font-bold ml-40 mr-16"style={{fontSize:'40px'}}>Amount:</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amount"
            className="border-4 border-blue-400 rounded-md px-20 py-2"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 ml-40 text-white px-10 py-4 rounded-md" style={{fontSize:'20px'}}>
          Add User
        </button>
        {users.length > 0 && (
          <ul className="list-none ml-20 mt-4" style={{fontSize: '20px'}}>
            {users.map((user, index) => (
              <li key={index} className="flex items-center px-10 mb-2">
                <span className='px-10 py-2'>{user.amount} - </span>
                {user.name}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md ml-10"
                  onClick={() => removeUser(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </form>

      {!showForm && (
        <button className="bg-blue-500 text-white ml-80 px-10 py-4 rounded-md" style={{fontSize:'30px'}} onClick={handleToggleForm}>
          +
        </button>
      )}

      {/* Render calculated expenses */}
      {calculateExpense && (
        <div className="mt-4">
          <h2 className="ml-40 font-bold" style={{fontSize:'30px'}}>Calculated Expenses:</h2>
          <ul className="list-none">
              {calculated.map((payment, index) => (
                <li key={index}>
                  {payment.from} owes {payment.to} {payment.amount.toFixed(2)}
                </li>
              ))}
            </ul>
        </div>
      )}

      <div className="mt-4">
        <h2 className="font-bold ml-40" style={{fontSize:'30px'}}>Total Expense:</h2>
        <p className='font-bold ml-40 mb-10' style={{fontSize:'30px'}}>{totalAmount.toFixed(2)}</p>
>>>>>>> Stashed changes
      </div>
    </motion.div>

    {/* Improved buttons design */}
    <motion.div
      className="flex flex-col justify-center items-center ml-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="bg-blue-500 text-white px-10 py-5 rounded-md mb-4" style={{fontSize:'30px'}}
        onClick={handleCalculateExpense}
      >
        Calculate Expense
      </button>
      <button
        className="bg-green-500 text-white px-5 py-2 rounded-md" style={{fontSize:'30px'}}
        onClick={handleSubmit}
      >
        Add to History
      </button>
    </motion.div>
  </div>
  );
};

export default AddExpenses;
