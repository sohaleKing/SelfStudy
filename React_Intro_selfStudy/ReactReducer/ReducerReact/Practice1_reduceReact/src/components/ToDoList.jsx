import React from "react"
import { ToDoListDisplay } from "./ToDoListDisplay"
import { ToDoListAction } from "./ToDoListAction"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import { toDoListsData } from "../services/toDoList"

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
    <Box sx={{ display: "flex", flexDirection: "column" }}>
     <Box
      sx={{
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-evenly",
       borderBottom: "1px solid grey",
       marginBottom: "15px",
      }}
     >
      <Typography sx={{ padding: "0px 15px" }}>Title</Typography>

      <Typography
       sx={{
        borderRight: "1px solid grey",
        borderLeft: "1px solid grey",
        padding: "0px 15px",
       }}
      >
       Description
      </Typography>

      <Typography sx={{ padding: "0px 15px", borderRight: "1px solid grey" }}>
       Created
      </Typography>

      <Typography sx={{ padding: "0px 15px" }}>Action</Typography>
     </Box>
     {toDoListsData.map((tasks) => {
      return (
       <ToDoListDisplay
        key={tasks.id}
        title={tasks.title}
        description={tasks.description}
        compeletedStatus={tasks.compeletedStatus}
        created={tasks.created}
       />
      )
     })}
    </Box>
    <ToDoListAction />
   </Box>
  </React.Fragment>
 )
}
