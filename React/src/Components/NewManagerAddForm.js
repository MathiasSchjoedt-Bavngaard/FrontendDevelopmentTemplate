import React from "react";
import { useState } from "react"
import { postManager } from "../Services/HttpRequest/httpService";
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    backgroundColor: 'lightGreen',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const basicmanager = { 
    firstName: "FN",
    lastName: "LN",
    email: "e",
    password: "p",
}

export default function AddManager(){

    const [manager,setManager] = useState(basicmanager);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(manager);
        let res = await postManager(manager);

        if(res.status === 201){
            alert('New manager added')
        }
        else{
            alert('Error in posting manager' + res.error) 
        }
    }

    const handleFieldChange = (e) => {
        const {name, value} = e.target;
        setManager({...manager, [name]: value});
    }

    return (
    <div>
        
        <Box sx={style}>
        <h1>Add new manager</h1>

        <form onSubmit={handleSubmit}>
            <div className="ManegerName">   
                <h3>Manager name</h3>
                <TextField
                    id="firstName"
                    label="First name"
                    type="text"
                    required
                    autoFocus
                    autoComplete="firstName"
                    name="firstName"
                    variant="filled"
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id="lastName"
                    label="Last name"
                    type="text"
                    required
                    autoFocus
                    autoComplete="lastName"
                    name="lastName"
                    variant="filled"
                    onChange={(e) => handleFieldChange(e)}
                />

            </div>
            <div className="ManegerAccountInfo">
                <h3>Account info</h3>
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    required
                    autoFocus
                    autoComplete="email"
                    name="email"
                    variant="filled"
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    required
                    autoFocus
                    autoComplete="password"
                    name="password"
                    variant="filled"
                    onChange={(e) => handleFieldChange(e)}
                />                
            </div>
            <div className="ManegerSubmit">
                <Button variant="contained" type="submit">Submit</Button>
            </div>
        
        </form>
        </Box>

    </div>
    )
}


