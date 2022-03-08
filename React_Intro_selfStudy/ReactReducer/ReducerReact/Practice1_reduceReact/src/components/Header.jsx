import { Box } from "@mui/system"

export function Header() {
 return (
  <Box
   sx={{
    "& > img": { width: 300, margin: "15px" },
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2B547E",
   }}
  >
   <img src="/todolist.jpg" alt="toDoList" />
  </Box>
 )
}
