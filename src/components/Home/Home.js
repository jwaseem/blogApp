import React from 'react';
import './Home.css';

function Home() {
    const login = () => {
        window.location.href = "/login";
      }
      const signup = () => {
        window.location.href = "/signup";
      }
  return (

    <div className='center'>
    <div className='loginBox'>
      
          <div className='heading'>
              <h3>welcome</h3>
              <p id='homepara'>read my  blogs...</p>
          </div>
          <div>
              <button onClick={login} className='loginButton'>Sign In</button>
              <button  onClick={signup} className='signupButton'>Sign Up</button>
          </div>
          </div></div>
          
     
  );
}

export default Home;
