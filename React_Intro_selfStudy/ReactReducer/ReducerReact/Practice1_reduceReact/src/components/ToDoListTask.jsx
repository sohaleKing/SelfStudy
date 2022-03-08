import React from "react"
import { Button } from "@mui/material"
import { Box } from "@mui/system"

export function ToDoListTask() {
 return (
  <React.Fragment>
   <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
    <Button variant="contained">Add new</Button>
    <Button variant="contained">Duplicate</Button>
    <Button variant="contained">Delete</Button>
   </Box>
  </React.Fragment>
 )
}
