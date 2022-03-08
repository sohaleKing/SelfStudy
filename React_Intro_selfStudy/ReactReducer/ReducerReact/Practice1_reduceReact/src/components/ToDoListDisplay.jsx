import React from "react"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import CheckIcon from "@mui/icons-material/Check"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

export function ToDoListDisplay() {
 const currentTime = `${new Date().getFullYear()}/${
  new Date().getMonth() + 1
 }/${new Date().getDate()}`
 return (
  <React.Fragment>
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
     <Grid container spacing={1}>
      <Grid item xs={2}>
       <Typography sx={{ padding: "0px 15px" }}>Title</Typography>
      </Grid>
      <Grid item xs={5}>
       <Typography
        sx={{
         borderRight: "1px solid grey",
         borderLeft: "1px solid grey",
         padding: "0px 15px",
        }}
       >
        Description
       </Typography>
      </Grid>
      <Grid item xs={2}>
       <Typography sx={{ padding: "0px 15px", borderRight: "1px solid grey" }}>
        Created
       </Typography>
      </Grid>
      <Grid item xs={3}>
       <Typography sx={{ padding: "0px 15px" }}>Action</Typography>
      </Grid>
     </Grid>
    </Box>

    <Box
     sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
     }}
    >
     <Grid container spacing={1}>
      <Grid item xs={2}>
       <Typography sx={{ padding: "0px 15px" }}>SelfStudy</Typography>
      </Grid>
      <Grid item xs={5}>
       <Typography sx={{ padding: "0px 15px" }}>React new Features</Typography>
      </Grid>
      <Grid item xs={2}>
       <Typography sx={{ padding: "0px 15px" }}>{currentTime}</Typography>
      </Grid>
      <Grid item xs={3}>
       <Typography sx={{ padding: "0px 15px" }}>
        <ContentCopyIcon />
        <DeleteOutlinedIcon />
        <CheckIcon />
       </Typography>
      </Grid>
     </Grid>
    </Box>
   </Box>
  </React.Fragment>
 )
}
