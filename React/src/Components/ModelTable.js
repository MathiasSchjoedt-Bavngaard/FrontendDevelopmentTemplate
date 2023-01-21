import React from "react";
import { Box, Paper, Chip } from "@mui/material";

export default function ModelTable({models}){
    let modellist = [];
    for(const model of models){
        modellist.push(
            <div> 
                <Chip label={model.firstName + " " + model.lastName}></Chip>
            </div>
        )
    }

    return(
            <Paper elevation={2}>
                <h2 style={{"margin": "1vw" }}>Models</h2>
                {modellist}
            </Paper>
    )



}