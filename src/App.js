import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Sticky navbar */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        {/* Top row: logo + business name */}
        <div className="flex items-center justify-between px-6 py-4">
          <img src="/barker sanitation logo.png" alt="Tom Barker Sanitation Logo" className="w-20 h-auto" />
          <h1 className="text-2xl sm:text-3xl font-bold text-green-800 text-right">
            Tom Barker Sanitation
          </h1>
        </div>

        {/* Bottom row: navigation links */}
        <div className="flex justify-center gap-6 bg-green-800 text-white text-sm sm:text-base py-2">
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button onClick={() => setShowLogin(true)} className="hover:underline">Log In</button>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4 text-green-700">Customer Login</h2>
            <input
              placeholder="Email"
              className="border p-2 mb-3 w-full rounded"
            />
            <input
              placeholder="Password"
              type="password"
              className="border p-2 mb-4 w-full rounded"
            />
            <button
              className="bg-green-700 text-white w-full py-2 rounded hover:bg-green-800"
              onClick={() => {
                alert('Login clicked!');
                setShowLogin(false);
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
