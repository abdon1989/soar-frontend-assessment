import React from 'react';
import { useState } from "react";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function EditProfileCard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  // Simulate a validation check
  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  
  const handleSave = () => {
    // Handle save logic here

  };
  return (
    <form className="flex flex-col items-center mb-6 lg:flex-row lg:items-start">
      <div className="w-24 h-24 m-4">
        <img src="/images/user/owner.png" alt="User" className="w-full h-full rounded-full" />
      </div>

      <div className='flex-1 w-full lg:ml-6'>
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 w-full">
          <div className="col-span-2 lg:col-span-1">
            <Label>Your Name</Label>
            <Input type="text" placeholder='Musharof' />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>User Name</Label>
            <Input type="text" placeholder="Chowdhury" />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>Email</Label>
            <Input 
              type="text" 
              value={email}
              error={error}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              hint={error ? "This is an invalid email address." : ""} />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>Password</Label>
            <Input type="password" placeholder="test" />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>Date of Birth</Label>
            <Input type="text" placeholder="25 January 1990" />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>Present Address</Label>
            <Input type="text" placeholder="San Jose, California, USA" />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>Permanent Address</Label>
            <Input type="text" placeholder="San Jose, California, USA" />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>City</Label>
            <Input type="text" placeholder="San Jose" />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>Postal Code</Label>
            <Input type="text" placeholder="45962" />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Label>Country</Label>
            <Input type="text" placeholder="USA" />
          </div>

          <div className="col-span-2 lg:col-span-2 flex justify-end mt-5">
            <button className="bg-black text-white py-2 px-12 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
