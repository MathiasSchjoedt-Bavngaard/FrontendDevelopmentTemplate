import React from 'react';
import { useState, useEffect } from 'react';
import { postModel } from '../Services/HttpRequest/httpService';
import { Button, TextField, TextareaAutosize } from '@mui/material';
import { Box } from '@mui/system';

const style = {
    position: 'absolute',
    top: '30%',
    left: '30%',
    transform: 'translate(-30%, -30%)',
    width: '80%',
    bgcolor: 'background.paper',
    backgroundColor: 'pink',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const basicmodel =  {
    firstName: "firstName",
    lastName: "lastName",
    addresLine1: "address1",
    addresLine2: "address2",
    zip: "zip",
    city: "city",
    country: "country",
    birthDate: "2022-11-30T10:52:52.861Z",
    nationality: "nationality",
    height: 0,
    shoeSize: 0,
    hairColor: "hairColor",
    eyeColor: "eyeColor",
    comments: "comments",
    email: "email",
    phoneNo: "phoneNo",
    password: "password"
}

export default function AddModel(){

    const [model,setModel] = useState(basicmodel);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(model);
        let res = await postModel(model);

        if(res.status === 201){
            alert('New model added')
        }
        else{
            alert('Error in posting model' + res.error) 
        }
    }

    const handleFieldChange = (e) => {
        const {name, value} = e.target;
        setModel({...model, [name]: value});
    }
    

    return (
    <div>
        <h1>Add new model</h1>
        <Box sx={style}>

        <form onSubmit={handleSubmit}>
            <div className="ModelName">
                <h3>Model name</h3>
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
            <div>
                <h3>Address</h3>
                <TextField
                    id='addresLine1'
                    label='Address 1'
                    type='text'                
                    autoFocus
                    autoComplete='addresLine1'
                    name='addresLine1'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='addresLine2'
                    label='Address 2'
                    type='text'                
                    autoFocus
                    autoComplete='addresLine2'
                    name='addresLine2'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='zip'
                    label='Zip'
                    type='number'
                    required
                    autoFocus
                    autoComplete='zip'
                    name='zip'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='city'
                    label='City'
                    type='text'
                    required
                    autoFocus
                    autoComplete='city'
                    name='city'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='country'
                    label='Country'
                    type='text'
                    required
                    autoFocus
                    autoComplete='country'
                    name='country'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
            </div>

            <div>
                <h3>Personal information</h3>
                <TextField
                    id='birthDay'
                    label='Birth day'
                    type='date'
                    required
                    autoFocus
                    autoComplete='birthDay'
                    name='birthDay'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='Nationality'
                    label='Nationality'
                    type='text'
                    required
                    autoFocus
                    autoComplete='Nationality'
                    name='Nationality'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}

                />
            </div>
            <div>
                <h3>Physical information</h3>
                <TextField
                    id='height'
                    label='Height'
                    type='number'
                    required
                    autoFocus
                    autoComplete='height'
                    name='height'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='shoeSize'
                    label='Shoe size'
                    type='number'
                    required
                    autoFocus
                    autoComplete='shoeSize'
                    name='shoeSize'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='hairColor'
                    label='Hair color'
                    type='text'
                    required
                    autoFocus
                    autoComplete='hairColor'
                    name='hairColor'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='eyeColor'
                    label='Eye color'
                    type='text'
                    required
                    autoFocus
                    autoComplete='eyeColor'
                    name='eyeColor'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
            </div>
            <div>
                <h3>Comments</h3>
                <TextareaAutosize
                    id='comments'
                    label='Comments'
                    type='text'
                    required
                    autoFocus
                    autoComplete='comments'
                    name='comments'
                    variant='outlined'                    
                    onChange={(e) => handleFieldChange(e)}
                />
            </div>
            <div>
                <h3>Contact information</h3>
                <TextField
                    id='email'
                    label='Email'
                    type='email'
                    required
                    autoFocus
                    autoComplete='email'
                    name='email'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='phoneNo'
                    label='Phone number'
                    type='phoneNo'
                    required
                    autoFocus
                    autoComplete='phoneNo'
                    name='phoneNo'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
                <TextField
                    id='password'
                    label='Password'
                    type='password'
                    required
                    autoFocus
                    autoComplete='password'
                    name='password'
                    variant='outlined'
                    onChange={(e) => handleFieldChange(e)}
                />
            </div>
            
            <Button variant="contained" color="primary" type="submit">Submit  Model</Button>
            </form>
        </Box>
        
    </div>
    )
}
