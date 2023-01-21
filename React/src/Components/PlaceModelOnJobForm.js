import { Button, TextField } from '@mui/material';
import {useState, useEffect} from 'react';
import { postModelonJob } from "../Services/HttpRequest/httpService";
import { Box } from '@mui/system';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    backgroundColor: "lightGreen",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


export default function AddModelToJobForm({jobId, handleModelClose}) {

    const [modelId, setModelId] = useState('');
    const [DisplayjobId, setDisplayJobId] = useState('');


    useEffect(() => {
        console.log("AddModelJobId passed from parent Jobs is: ", jobId);
        setDisplayJobId(jobId);            
      },[jobId]);

    const submitHandler = async (e) => {
        const result = await postModelonJob(jobId, modelId);
        if(result.status === 201){
            let message = "Model " + modelId + " added to job " + jobId;
            alert(message);
            handleModelClose();
        }
        else{
            alert('Error in adding model to job');
        }
    }

    return (
        <Box sx={style}>
        <div className="formTitle">
        <h3>Add Model to Job:  {DisplayjobId}</h3>
        </div>

        <TextField
            placeholder="e.g. 5"
            label="Model ID"
            description="The ID of the model to add to this job"
            radius="md"
            required
            size="md"
            value={modelId}
            onChange={(e) => setModelId(e.currentTarget.value)}
        />
        <br></br>
        <Button variant="contained" onClick={submitHandler}>Submit</Button>
    </Box>
    );
}