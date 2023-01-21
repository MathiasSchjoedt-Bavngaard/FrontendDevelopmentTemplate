import React, { useState, useEffect } from 'react'
import { Button, Chip, Paper } from "@mui/material";
import  ModelTable from "./ModelTable";

export function Job({job, AddModelHandler, addExpenseHandler}) {


    
    const handleInComponentAddmodelClicked = function(props){
        AddModelHandler(job.jobId);
    }

    const handleInComponetAddExpenseClicked = function(props)  {
        addExpenseHandler(job.jobId);
    }


    const [result, setResult] = useState(<div>hello</div>);

    useEffect( () => 
    { 

        if (localStorage.getItem("role") === "Manager" || localStorage.getItem("role") === "Model")
        {
            setResult(
                <Paper className="jobContainer" elevation={3}>
                    <Chip className="jobIdContainer" label={"Job ID: " + job.jobId} ></Chip>
                    <Chip className="jobLocationContainer" label={"Location: "+ job.location}></Chip>
                    <Chip className="jobCustomerContainer" label={"Customer: "+ job.customer}></Chip>
                    <div className="jobDurationContainer">
                        <h4>Date and Time</h4>
                        <p>{job.startDate}</p>
                        <h4>Duration</h4>
                        <p>{job.days} days </p>
                    </div>

                    
                    {
                    localStorage.getItem("role") === "Manager" && (
                    <ModelTable className="jobModelsContainer" models={job.models}></ModelTable> 
                    )}
    
                <div className="jobCommentAndButtonsContainer">
                    <div className="jobCommentsContainer">
                            <h4>Comments</h4>
                            <p>{job.comments}</p>
                        </div>
    

                     <div className="jobButtonsContainer">
                    {
                    localStorage.getItem("role") === "Manager" && (
                        <Button style={{"margin":"1vw"}} variant="contained" onClick={handleInComponentAddmodelClicked}>Add model</Button>
                    ) }
                    {
                    localStorage.getItem("role") === "Model" && (
                        <Button variant="contained" onClick={handleInComponetAddExpenseClicked}>Add Expense</Button>
                    )}
                    </div>

                  </div>
                </Paper>
            );
        }
        else 
        { 
            setResult(
                <div>

                    <p>You shall not pass! </p>

                </div>
            );
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[job]);

    return (result)
}

                    /*
                    <Chip className="jobIdContainer" label={"Job ID: " + job.jobId} ></Chip>
                    <Chip className="jobLocationContainer" label={"Location: "+ job.location}></Chip>
                    <Chip className="jobCustomerContainer" label={"Customer: "+ job.customer}></Chip>

                    <div className="jobDurationContainer">
                        <p>Start date:  {JSON.stringify(job.startDate)}</p>
                        <p>Days:  {job.days}</p>
                    </div>

                    <ModelTable className="" models={job.models}></ModelTable> 

                    */