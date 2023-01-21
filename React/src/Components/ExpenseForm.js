//Inspired by Tissemat
import React, { useEffect } from "react";
import { useState } from "react";
import { postExpense } from "../Services/HttpRequest/httpService";
import { Button,  TextField, TextareaAutosize } from "@mui/material";
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
const ExpenseInit = {
  modelId: 0,
  jobId: 0,
  date: "",
  text: "",
  amount: 0,
};

export default function AddExpense({ jobId, handleExpenseClose }) {
  const [Expense, setExpense] = useState(ExpenseInit);

  useEffect(() => {
    console.log("ExpenseJobId passed from parent Jobs is: ", jobId);
    setExpense({...Expense, jobId: jobId });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobId]);

  const handleSubmit = async (e) => {
    const res = await postExpense(Expense);
    if (res.status === 201) {
      alert("New Expense added");
      handleExpenseClose();
    } else {
      alert("Error in posting Expense" + res.error);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...Expense, [name]: value });
  };

  return (
    <div>
      <Box sx={style}>
        <h1>Add new Expense</h1>

        <div>
          <h3>Model ID</h3>
          <TextField
            id="ModelId"
            label="Model Id"
            type="number"
            required
            autoComplete="modelId"
            name="modelId"
            variant="filled"
            onChange={(e) => handleFieldChange(e)}
          />
          <h3>Job ID</h3>
          <div> {Expense.jobId} </div>
          <h3>Date</h3>
          <TextField
            id="Date"
            type="date"
            required
            autoComplete="Date"
            name="date"
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
            name="text"
            variant="outlined"
            onChange={(e) => handleFieldChange(e)}
          />
          <h3>Amount</h3>
          <TextField
            id="Amount"
            label="Amount"
            type="number"
            required
            autoComplete="Amount"
            name="amount"
            variant="filled"
            onChange={(e) => handleFieldChange(e)}
          />
        </div>
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          {" "}
          Add{" "}
        </Button>
      </Box>
    </div>
  );
}
