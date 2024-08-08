import React from 'react';
import SocialSignIn from './SocialSignIn';
import InputField from './InputField';
import Button from './Button';

function SignInForm() {
  return (
    <div className="flex flex-col items-center p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center text-black">Sign In</h2>
      
      <SocialSignIn />
      
      <form className="w-full">
        <InputField label="Email" placeholder="Enter your email" type="email" />
        <InputField label="Password" placeholder="Enter your password" type="password" />
        
        <Button text="Sign In" />
      </form>
    </div>
  );
}

export default SignInForm;
