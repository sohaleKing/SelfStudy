import { Paper } from "@mui/material"
import { Box } from "@mui/system"
import "./App.styles.css"
import { Header } from "./components/Header"
import { ToDoList } from "./components/ToDoList"

export function App() {
 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "center",
   }}
  >
   <Paper elevation={3}>
    <Header />
    <ToDoList />
   </Paper>
  </Box>
 )
}
