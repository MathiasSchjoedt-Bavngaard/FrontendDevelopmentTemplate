import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MenuIcon from "@mui/icons-material/Menu";
import "../Assets/MenuBar.css";

export default function PopUpMenu() {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (
      localStorage.getItem("role") === "Manager" ||
      localStorage.getItem("role") === "Model"
    ) {
      setState({ [anchor]: open });
    }
    else {
        alert("PLease log in to access menu! 😊");
    }
  };

  let runClick = false;
  const navigate = useNavigate();

  async function handleClick(e, i) {
    e.preventDefault();
    let nav = i;
    if (runClick) navigate("/" + nav);
    runClick = false;
  }

  async function handleMouseOver(e) {
    e.preventDefault();
    runClick = true;
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        {/* //item one */}
        <ListItem>
          <ListItemButton
            onClick={(e) => handleClick(e, "Jobs")}
            onMouseOver={(e) => handleMouseOver(e)}
          >
            <ListItemIcon>
              {/* Icon */}
              <PersonSearchIcon />
            </ListItemIcon>
            <ListItemText>Jobs</ListItemText>
          </ListItemButton>
        </ListItem>
        {/* //item two */}
        <>
          {localStorage.getItem("role") === "Manager" && (
            <ListItem>
              <ListItemButton
                onClick={(e) => handleClick(e, "ManageEmployes")}
                onMouseOver={(e) => handleMouseOver(e)}
              >
                <ListItemIcon>
                  {/* Icon */}
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText>Manage Employees</ListItemText>
              </ListItemButton>
            </ListItem>
          )}
        </>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="MenuButton">
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
      </div>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
