//Inspired by Tissemat
import { useState } from "react";
import { postJob } from "../Services/HttpRequest/httpService";
import { Button, TextField, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";

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

const JobInit = {
  customer: "",
  startDate: "",
  days: 0,
  location: "",
  comments: "",
};

export default function AddJob() {
  const [Job, setJob] = useState(JobInit);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Job);
    let res = await postJob(Job);

    if (res.status === 201) {
      alert("New Job added");
    } else {
      alert("Error in posting Job" + res.error);
    }

    //quick and dirty way of refreshing the job list
    window.location.reload();
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...Job, [name]: value });
  };

  return (
    <div>
      <Box sx={style}>
        <h1>Add new Job</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Customer</h3>
            <TextField
              id="Customer"
              label="Customer name"
              type="text"
              required
              autoComplete="customerName"
              name="customer"
              variant="filled"
              onChange={(e) => handleFieldChange(e)}
            />
            <h3>Start date</h3>
            <TextField
              id="Date"
              type="date"
              required
              autoComplete="date"
              name="startDate"
              variant="filled"
              onChange={(e) => handleFieldChange(e)}
            />
            <h3>Days</h3>
            <TextField
              id="Days"
              label="Days"
              type="text"
              required
              autoComplete="days"
              name="days"
              variant="filled"
              onChange={(e) => handleFieldChange(e)}
            />
            <h3>Location</h3>
            <TextField
              id="Location"
              label="Location name"
              type="text"
              required
              autoComplete="locationName"
              name="location"
              variant="filled"
              onChange={(e) => handleFieldChange(e)}
            />
            <h3>Comments</h3>
            <TextareaAutosize
              id="Comments"
              label="Comments"
              type="text"
              required
              autoFocus
              autoComplete="comments"
              name="comments"
              variant="outlined"
              onChange={(e) => handleFieldChange(e)}
            />
          </div>

          <Button variant="contained" type="submit">Add new job</Button>
        </form>
      </Box>
    </div>
  );
}
