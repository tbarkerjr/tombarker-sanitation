import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="bg-white min-h-screen text-gray-800 p-6 max-w-4xl mx-auto font-sans">
      {/* Sticky navbar */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        {/* Top row: logo + business name */}
        <div className="flex items-center justify-between px-6 py-4">
          <img src="/barker sanitation logo.png" alt="Tom Barker Sanitation Logo" className="w-40 mr-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-green-800 text-right">
            Tom Barker Sanitation
          </h1>
        </div>

        {/* Bottom row: navigation links */}
        <div className="flex justify-center gap-6 bg-green-800 text-white text-sm sm:text-base py-2">
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button onClick={() => setShowLogin(true)} className="hover:underline">
            Log In
          </button>
        
        </div>
      </div>
      <p className="text-lg text-gray-600 text-center mt-6 mb-10">
        Serving the Town of Jefferson and Schoharie County Area Since 1997
      </p>

      {/*
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
          Tom Barker Sanitation
        </h1>
        <p className="text-lg text-gray-600">Serving Jefferson, NY — Reliable garbage and recycling pickup</p>
      </header>
      */} 
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Services</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Weekly residential garbage pickup</li>
          <li>Recycling services</li>
          <li>Bulk trash removal</li>
          <li>Seasonal yard waste collection</li>
          <li>Clean-up jobs</li>
          <li>Special pickups available upon request</li>
        </ul>
      </section>

      <section id="pricing" className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Pricing</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Weekly Pickup – <strong>$35/month</strong></li>
          <li>Biweekly Pickup – <strong>$25/month</strong></li>
          <li>On-Call Bulk Removal – <strong>Starting at $50</strong></li>
        </ul>
      </section>

      <section id="contact" className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact</h2>
        <p>You can reach us at (607) 652-7884 or info@drofgarbology.com</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">About Us</h2>
        <p>
          Tom Barker Sanitation is a family-owned and operated garbage collection company proudly serving the Jefferson, NY area.
          We believe in dependable service, honest pricing, and treating every customer like a neighbor.
        </p>
      </section>

      <section id="login" className="mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Customer Login</h2>
        {user ? (
          <div className="space-y-3">
            <p>Welcome back, {user.name}!</p>
            <button
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
              onClick={() => alert('Redirecting to payment...')}
            >
              Make a Payment
            </button>
            <button
              className="ml-4 text-red-600 underline"
              onClick={() => setUser(null)}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-2 max-w-sm">
            <input
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            <input
              placeholder="Password"
              type="password"
              className="border p-2 rounded w-full"
            />
            <button
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 w-full"
              onClick={() => setUser({ name: 'Customer' })}
            >
              Login
            </button>
          </div>
        )}
      </section>
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
    </div>
  );
}

export default App;