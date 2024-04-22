import React, { useState } from 'react';

const AddExpenses = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
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
      </div>
    </div>
  );
};

export default AddExpenses;
