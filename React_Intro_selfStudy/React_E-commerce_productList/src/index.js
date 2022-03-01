import ReactDOM from "react-dom"
import { App } from "./App"
import { createTheme, ThemeProvider } from "@mui/material"
import { blue, green } from "@mui/material/colors"

const theme = createTheme({
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: green[800],
        },
    },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
)
