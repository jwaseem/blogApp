import React, { useState } from 'react';
import validation from './validation';
import { Link } from 'react-router-dom';
import './Signup.css'

function Signup(props) {
  const [formValues,setFormValues] = useState({ username: "", email:"", password:""});
  
  const [formErrorValues,setformErrorValues] = useState({});

  const handleChange = (event) => {
    const {name, value}= event.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  }
  const handleSubmit = (event)=>{
      event.preventDefault();
      setformErrorValues( validation(formValues));
  }
  
  return (

    <div>
      <div className='center'>
    <div className='loginBox'>
      <div className='signupalign'>
      <form onSubmit={handleSubmit}>
                
                  <h1>Sign up</h1><br />
                  <input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange} />
                  <p>{formErrorValues.username}</p>
                  <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
                  <p>{formErrorValues.email}</p>
                  <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                  <p>{formErrorValues.password}</p>
                  <br />
                  <button className='signupbtn1'>Sign up</button>
                  <br></br>
                  <br/>
                  <Link className="link2" to="/login">Sign In</Link>
            </form>
            </div>
            </div>

            </div>

        </div>
    
    );
}

export default Signup;

