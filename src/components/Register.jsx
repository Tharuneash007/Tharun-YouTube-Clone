import React, { useState } from 'react'
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { logo } from '../utilities/constants'

const Signup = () => {

    const [input,setInput] = useState({
        name : "",
        email : "",
        password : "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        navigate("/login");
    }

    const navigate = useNavigate()
    const paperStyle = { padding: 20,height:400, width: 300, margin: "50px auto",background:'black',boxShadow:'2px 9px 15px black' }
    const headerStyle = { margin: '15px 0' }
    const labelstyle = {margin: '8px 0',background:'white',borderRadius:'5px'}
    const btnstyle1={margin:'8px 0',background:'red'}
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center' style={{color:'red'}}>
                    <img src={logo} alt="logo" height={45} style={{margin:'auto'}} />
                    <h2 style={headerStyle}>Sign Up</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <div>
                    <TextField type='text' fullWidth value = {input.name} name ='name' placeholder="Enter your name" style={labelstyle} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})} required/>
                    </div>
                    <div>
                    <TextField type='email' fullWidth value = {input.email} name = "email" placeholder="Enter your email" style={labelstyle} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})} required/>
                    </div>
                    <div>
                    <TextField type='password' fullWidth value = {input.password} name = "password" placeholder="Enter your password" style={labelstyle} onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})} required/>
                    </div>
                    <Button type='submit' variant='contained' color='primary' style={btnstyle1} fullWidth> Sign up </Button>
                    <Typography style={{color:'white',marginLeft:'50px'}}>Already an user ? 
                    <Link href="" onClick={()=>navigate('/login')} style={{color:'red',marginLeft:'15px'}} > Log In </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;