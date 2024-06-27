import React from 'react';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
// import './style.css';

const SignIn = () => {
  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const handleMicrosoftSignIn = () => {
    window.location.href = 'http://localhost:5000/outlook/signin';
  };

  return (
    <div className="container">
      <h1>ReachIn-Box-Assignment</h1>
      <div className="option">Sign In With</div>
      <div className="google">
        <button onClick={handleGoogleSignIn} className="signin-btn-google">
          <FaGoogle /> Sign in With Google
        </button>
        <button onClick={handleMicrosoftSignIn} className="signin-btn-ms">
          <FaMicrosoft /> Sign in With Microsoft
        </button>
      </div>
    </div>
  );
};

export default SignIn;
