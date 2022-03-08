import React from "react"
import { Box } from "@mui/system"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

export function ToDoListDisplay() {
 return (
  <React.Fragment>
   <Box sx={{ display: "flex", flexDirection: "column" }}>
    <FormGroup>
     <FormControlLabel control={<Checkbox defaultChecked />} label="task1" />
     <FormControlLabel control={<Checkbox />} label="task2" />
     <FormControlLabel control={<Checkbox />} label="task3" />
    </FormGroup>
   </Box>
  </React.Fragment>
 )
}
