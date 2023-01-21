import React from "react";
import { getJobs } from "../Services/HttpRequest/httpService";
import { Job } from "../Components/Job";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddJob from "../Components/NewJobAddForm";
import "../Assets/JobsStyle.css";
import AddExpense from "../Components/ExpenseForm";
import PlaceModelOnJobForm from "../Components/PlaceModelOnJobForm";
import RemoveJobSubmit from "../Components/RemoveModelFromJobForm";

const tempExpenseModalObj = {
  jobId: 0,
  open: false,
};
const tempAddModalObj = {
  jobId: 0,
  open: false,
};

export default function Jobs() {
  //#region State Variables
  //REMOVE_MODEL_FROM_JOB
  const [RemoveModelFromJobOpen, setRemoveModelFromJobOpen] = useState(false);
  const handleRemoveModelFromJobOpen = () => setRemoveModelFromJobOpen(true);
  const handleRemoveModelFromJobClose = () => setRemoveModelFromJobOpen(false);

  //ADD_NEW_JOB
  const handleJobOpen = () => setJobOpen(true);
  const handleJobClose = () => setJobOpen(false);
  const [jobs, setJobs] = useState([]);
  const [JobOpen, setJobOpen] = React.useState(false);
  //ADD_EXPENSE
  const [expenseModalObj, setExpenseJobId] =
    React.useState(tempExpenseModalObj);
  const [ExpenseOpen, setExpenseOpen] = React.useState(false);
  const handleExpenseClose = () => setExpenseOpen(false);

  //ADD_MODEL-to-JOB
  const handleModelClose = () => setModelOpen(false);
  const [placeModelOnJobModalObj, setPlaceModelOnJobModalObj] =
    React.useState(tempAddModalObj);
  const [ModelOpen, setModelOpen] = React.useState(false);
  //#endregion
  //GET_JOBS
  useEffect(() => {
    const fetchJobs = async () => {
      let response = await getJobs();
      response = await response.json();
      setJobs(response);
    };
    fetchJobs();
  }, []);

  //#region EXPENSE_FUNCTIONS
  //EXPENSE CALLBACK FUNCTION
  const handleAddExpenseClicked = function(props){
    console.log("jobId is: ", expenseModalObj.jobId);
    console.log("Open is:", expenseModalObj.open);
    setExpenseJobId({ ...expenseModalObj, jobId: props, open: true });
    console.log("jobId is now: ", expenseModalObj.jobId);
    console.log("open is now: ", expenseModalObj.open);
  };


  //EXPENSE_USE_EFFECT
  useEffect(() => {
    console.log("entered use effect for expense");
    console.log(expenseModalObj);
    if (expenseModalObj.open === true) {
      setExpenseOpen(true);
      console.log("set expense true");
    }
    else{
    setExpenseOpen(false);
    console.log("set expense false");
    }
  }, [expenseModalObj]);
  //#endregion


  //#region ADD_JOB_FUNCTIONS
  //MODEL CALLBACK FUNCTION
  const handleAddModelClicked = function(props){
    console.log("jobId is: ", placeModelOnJobModalObj.jobId);
    console.log("Open is:", placeModelOnJobModalObj.open);
    setPlaceModelOnJobModalObj({
      ...placeModelOnJobModalObj,
      jobId: props,
      open: true,
    });
    console.log("jobId is now: ", placeModelOnJobModalObj.jobId);
    console.log("open is now: ", placeModelOnJobModalObj.open);
    console.log(placeModelOnJobModalObj);
  };

  //MODEL_USE_EFFECT
  useEffect(() => {
    console.log(
      "placeModelOnJobModalObj.jobId is: ",
      placeModelOnJobModalObj.jobId
    );
    console.log(
      "placeModelOnJobModalObj.open is: ",
      placeModelOnJobModalObj.open
    );
    if (placeModelOnJobModalObj.open === true) {
      setModelOpen(true);
    } else {
      setModelOpen(false);
    }
  }, [placeModelOnJobModalObj]);
  //#endregion

  //HTML RESPONSE
  return (
    <div>
      {localStorage.getItem("role") !== null && (
        <div className="JobsPage">
          <div className="HeaderJobs">
            <h1 className="JobsTitle">Jobs</h1>

            {/* Remove model from job */
              localStorage.getItem("role") === "Manager" && (
                <Button style={{"margin":"1vw"}} variant="contained" onClick={handleRemoveModelFromJobOpen}>
                  Remove Model From Job
                </Button>)
            }

            <Modal
              open={RemoveModelFromJobOpen}
              onClose={handleRemoveModelFromJobClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div>
                <h1>Remove Model From Job</h1>
                <RemoveJobSubmit />
              </div>
            </Modal>

                      {/* //Add new job */}
          </div>
          {/* Map all jobs from previous Use effect */}
          <div className="joblist">
            {jobs.map((job) => {
              return (
                <Job
                  job={job}
                  AddModelHandler={handleAddModelClicked}
                  addExpenseHandler={handleAddExpenseClicked}
                ></Job>
              );
            })}
          </div>
          {/* //Add new job */
            localStorage.getItem("role")  === "Manager" && (
              <div>
              <Button variant="contained" onClick={handleJobOpen}>
                  Add Job
                </Button>
                {/* //Add new job Modal*/}
                <Modal
                  open={JobOpen}
                  onClose={handleJobClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <div>
                    <AddJob />
                  </div>
                </Modal>
              </div>
            )
          }

          {/* //Add Expense Modal */}
          <Modal
            open={ExpenseOpen}
            onClose={handleExpenseClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <AddExpense jobId={expenseModalObj.jobId} 
                handleExpenseClose={handleExpenseClose}
              />
            </div>
          </Modal>

          {/* //Add Model Modal */}
          <Modal
            open={ModelOpen}
            onClose={handleModelClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <PlaceModelOnJobForm
                jobId={placeModelOnJobModalObj.jobId}
                handleModelClose={handleModelClose}
              ></PlaceModelOnJobForm>
            </div>
          </Modal>
        </div>
      )}
      {localStorage.getItem("role") === null && (
        <div>
          <h1>Not logged in</h1>
        </div>
      )}
    </div>
  );
}
