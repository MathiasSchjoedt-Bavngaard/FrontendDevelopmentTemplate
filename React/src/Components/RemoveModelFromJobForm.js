import React from "react";
import { useState } from "react"
import { deleteModelFromJob } from "../Services/HttpRequest/httpService";
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    backgroundColor: '#FF7979',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  /*
const RemoveModelFromJob = { 
    JobID: "JOB ID",
    ModelID: "Model ID",
};
*/




export default function RemoveJobSubmit(){

   // const [remove,setRemove] = useState(RemoveModelFromJob);
    const [JobID, setJobID] = useState("");
    const [ModelID, setModelID] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(remove);
        let res = await deleteModelFromJob(JobID, ModelID);

        if(res.status === 200){
            alert('removed model from job')
        }
        else{
            alert('Error in posting remove' + res.error) 
        }
    }

    function handleChangeJobID(event) {
        setJobID(event.target.value);
    }

    function handleChangeModelID(event) {
        setModelID(event.target.value);
      }
    /*
    const handleFieldChange = (e) => {
        const {name, value} = e.target;
        setRemove({...remove, [name]: value});
    }
*/
    return (
    <div>
        
        <Box sx={style}>
        <h1>Remove Model From Job</h1>

        <form onSubmit={handleSubmit}>
            <div className="Job ID">   
                <h3>Job ID:</h3>
                <TextField
                    JobID="Job ID"
                    label="Job ID"
                    type="text"
                    required
                    autoFocus
                    autoComplete="Job ID"
                    name="Job ID"
                    variant="filled"
                    onChange={(e) => handleChangeJobID(e)}
                />

            </div>
            <div className="Model ID">
                <h3>Model ID:</h3>
                <TextField
                    ModelID="Model ID"
                    label="Model ID"
                    type="text"
                    required
                    autoFocus
                    autoComplete="Model ID"
                    name="Model ID"
                    variant="filled"
                    onChange={(e) => handleChangeModelID(e)}
                />               
            </div>
            <div className="RemoveJobSubmit">
                <Button variant="contained" type="submit">Submit</Button>
            </div>
        
        </form>
        </Box>

    </div>
    )
}