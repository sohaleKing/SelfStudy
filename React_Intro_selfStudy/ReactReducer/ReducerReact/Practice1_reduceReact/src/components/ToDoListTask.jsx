import React, { useState } from "react"
import { Button } from "@mui/material"
import { Box } from "@mui/system"
import TextField from "@mui/material/TextField"

export function ToDoListTask() {
 const [addTaskState, showAddTask] = useState(false)
 const addNewVisibility = () => {
  showAddTask(true)
 }
 const addNewTask = () => {
  //add to list
  showAddTask(false)
 }

 const [swapTaskState, showSwapTask] = useState(false)
 const swapTasksVisibity = () => {
  showSwapTask(true)
 }
 const swapTasks = () => {
  //swap tasks
  showSwapTask(false)
 }

 return (
  <React.Fragment>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: "15px",
     borderLeft: "1px solid grey",
     marginLeft: "15px",
     paddingLeft: "15px",
    }}
   >
    {addTaskState ? (
     <Box
      component="form"
      sx={{
       "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
     >
      <div>
       <TextField label="Title" id="title" defaultValue=" " size="small" />
      </div>
      <div>
       <TextField
        label="Description"
        id="description"
        defaultValue=" "
        size="small"
       />
      </div>
     </Box>
    ) : (
     <></>
    )}
    {!addTaskState ? (
     <Button size="small" variant="contained" onClick={addNewVisibility}>
      New Task
     </Button>
    ) : (
     <Button size="small" variant="contained" onClick={addNewTask}>
      Add To List
     </Button>
    )}

    {swapTaskState ? (
     <Box
      component="form"
      sx={{
       "& .MuiTextField-root": { m: 1, width: "11ch" },
      }}
      noValidate
      autoComplete="off"
     >
      <div>
       <TextField
        id="index1"
        label="index1"
        type="number"
        InputLabelProps={{
         shrink: true,
        }}
       />
       <TextField
        id="index2"
        label="index2"
        type="number"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </div>
     </Box>
    ) : (
     <></>
    )}
    {!swapTaskState ? (
     <Button size="small" variant="contained" onClick={swapTasksVisibity}>
      Swap Tasks
     </Button>
    ) : (
     <Button size="small" variant="contained" onClick={swapTasks}>
      Swap now
     </Button>
    )}
   </Box>
  </React.Fragment>
 )
}
