import React from "react"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import CheckIcon from "@mui/icons-material/Check"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

export function ToDoListDisplay() {
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
      <Grid item>
       <Typography sx={{ padding: "0px 15px" }}>Title</Typography>
      </Grid>
      <Grid item>
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
      <Grid item>
       <Typography sx={{ padding: "0px 15px" }}>Created Time</Typography>
      </Grid>
      <Grid item></Grid>
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
      <Grid item>
       <Typography sx={{ padding: "0px 15px" }}>Title</Typography>
      </Grid>
      <Grid item>
       <Typography sx={{ padding: "0px 15px" }}>Description</Typography>
      </Grid>
      <Grid item>
       <Typography sx={{ padding: "0px 15px" }}>Created Time</Typography>
      </Grid>
      <Grid item>
       <ContentCopyIcon />
       <DeleteOutlinedIcon />
       <CheckIcon />
      </Grid>
     </Grid>
    </Box>
   </Box>
  </React.Fragment>
 )
}
