import React from "react";
import { useState } from "react";

import AddModel from "../Components/NewModelAddForm";
import AddManager from "../Components/NewManagerAddForm";
import Modal from "@mui/material/Modal";

import "../Assets/manageEmployes.css";
import { Button } from "@mui/material";

export default function ManageEmployes() {
  const [ManegerOpen, setManagerOpen] = useState(false);
  const [ModelOpen, setModelOpen] = useState(false);

  const handleManagerOpen = () => setManagerOpen(true);
  const handleManagerClose = () => setManagerOpen(false);
  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);

  return (
    <>
      {localStorage.getItem("role") === "Manager" && (
        <div>
          <div className="manageEmployes">
            <div>
              <h1>Manage Employes</h1>
            </div>
            <Button variant="contained" onClick={handleModelOpen}>
              Add Model
            </Button>

            <Modal
              open={ModelOpen}
              onClose={handleModelClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div>
                <AddModel />
              </div>
            </Modal>

            <Button variant="contained" onClick={handleManagerOpen}>
              Add Manager
            </Button>

            <Modal
              open={ManegerOpen}
              onClose={handleManagerClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div>
                <AddManager />
              </div>
            </Modal>
          </div>
        </div>
      )}
      {localStorage.getItem("role") !== "Manager" && (
        <div>
          <h1 color="blue">Not logged as manager</h1>
        </div>
      )}
    </>
  );
}
