import React from "react"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

export function ToDoListDisplay(props) {
 const { title, description, compeletedStatus, created } = props
 return (
  <React.Fragment>
   <Box
    sx={{
     display: "flex",
     flexDirection: "row",
     justifyContent: "space-evenly",
    }}
   >
    <Typography sx={{ padding: "0px 15px" }}>{props.title}</Typography>

    <Typography sx={{ padding: "0px 15px" }}>{props.description}</Typography>

    <Typography sx={{ padding: "0px 15px" }}>{props.created}</Typography>

    <Typography sx={{ padding: "0px 15px" }}>
     <ContentCopyIcon />
     <DeleteOutlinedIcon />
     {props.compeletedStatus ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </Typography>
   </Box>
  </React.Fragment>
 )
}
