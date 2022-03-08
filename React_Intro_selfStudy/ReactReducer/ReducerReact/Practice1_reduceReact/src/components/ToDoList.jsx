import React from "react"
import { ToDoListDisplay } from "./ToDoListDisplay"
import { ToDoListTask } from "./ToDoListTask"
import Box from "@mui/material/Box"

export function ToDoList() {
 return (
  <React.Fragment>
   <Box
    sx={{
     display: "flex",
     flexDirection: "row",
     backgroundColor: "lightgrey",
     padding: "15px",
     justifyContent: "space-between",
    }}
   >
    <ToDoListDisplay />
    <ToDoListTask />
   </Box>
  </React.Fragment>
 )
}
