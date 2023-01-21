
// This is inspired by implementation in GRP5 semester project, same author

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PopMenu from "./PopUpMenu";
import { Button } from "@mui/material";
import "../Assets/MenuBar.css";
import { useNavigate } from "react-router-dom";

export default function MenuBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <PopMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Model Company
          </Typography>
          <div className="LoginButton">
            {localStorage.getItem("role") !== null && (
              <Button onClick={() => {window.localStorage.clear(); navigate('/Login')}}> Log Out </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
