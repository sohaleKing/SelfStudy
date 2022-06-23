import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export function Header(props) {
    const { categories } = props
    const [category, selectedCategory] = useState("")

    const handleChange = (event) => {
        selectedCategory(event.target.value)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Products
                    </Typography>
                    <label for="vategories">
                        {" "}
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            category:
                        </Typography>
                    </label>
                    <Select
                        name="categories"
                        id="categories"
                        value={category}
                        onChange={handleChange}
                        sx={{ color: "white" }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {categories.map((category) => {
                            return (
                                <MenuItem value={category}>{category}</MenuItem>
                            )
                        })}
                    </Select>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
