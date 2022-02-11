import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import "./Trial.css";

function Trial(props) {
  const [formValues,setFormValues] = useState({ username: "", password:""});
  
  

  const handleChange = (event) => {
    const {name, value}= event.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  }
  const handleSubmit = (event)=>{
      event.preventDefault();
      alert("Great Shot!");
  }
  const next = () => {
    alert("Great Shot!");
  }
  return (
    <>
    <div className='center'>
    <div className='loginBox'>
    <div className='headline'>
    <h3>Sign In</h3>
    </div>
    <form onSubmit={handleSubmit}>
    <div className=''>
    <label size="small">Username</label></div>
    <div className=''>
      <input type="text" name="username"  required="" value={formValues.username} onChange={handleChange}/>
    </div>
     <div className='row'>   
    <label size="small">Password</label></div>
    <div className=''>     
    <input type="password" name="password" required="" value={formValues.password} onChange={handleChange} />
        </div>
        <div className='checkbox'>
        <FormGroup>
        <FormControlLabel control={<Checkbox  sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }} />}  label="show password" />
        </FormGroup></div>
        <div className='SinginButton'>
        <Button variant="contained" onClick={next}>Sign In</Button></div>
        
        </form>
        <div className='link'>
          <Link href="/signup" underline="hover">
          {"Dont have an account?"}
          </Link>
          <Link href="#" underline="hover" paddingLeft={1}>
          {"Forgot password"}
          </Link>
          
        </div>
        </div>   
    </div>
    </>  
  );
}

export default Trial;
