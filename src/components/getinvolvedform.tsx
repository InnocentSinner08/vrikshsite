"use client";
import React from "react";

const HelpdeskForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h3 className="font-bold text-center text-2xl mb-4 text-gray-800">Join Us</h3>
        <p className="text-center mb-6 text-gray-600">
         
        </p>
        
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
          <input type="hidden" name="access_key" value="c5a33988-58dd-461e-a9c0-61b07a71c8a8" />

          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input type="text" name="name" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" placeholder="Enter your name" required />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block font-semibold mb-1">Date of Birth</label>
            <input type="date" name="dob" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" required />
          </div>

          {/* Mobile & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Mobile No.</label>
              <input type="tel" name="mobile" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" placeholder="Phone number" required />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email ID</label>
              <input type="email" name="email" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" placeholder="Email address" required />
            </div>
          </div>

          {/* Designation & Latest Institution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Designation</label>
              <input type="text" name="designation" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" placeholder="Your designation" required />
            </div>
            <div>
              <label className="block font-semibold mb-1">Latest Institution</label>
              <input type="text" name="institution" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" placeholder="Institution name" required />
            </div>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block font-semibold mb-1">Role</label>
            <select name="role" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" required>
              <option value="">Select your role</option>
              <option value="volunteer">Volunteer</option>
              <option value="partner">Partner</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* Aadhar Number */}
          <div>
            <label className="block font-semibold mb-1">Aadhar No.</label>
            <input type="text" name="aadhar" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" placeholder="Enter Aadhar number" required />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-1">Address</label>
            <textarea name="address" rows={3} className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" placeholder="Enter your address" required />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block font-semibold mb-1">Upload Photo</label>
            <input type="file" name="photo" accept="image/*" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-gray-300" required />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HelpdeskForm;
