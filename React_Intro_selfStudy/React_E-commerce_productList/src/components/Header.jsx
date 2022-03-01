import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import { HeaderSetting } from "./HeaderSetting"
import { HeaderLogo } from "./HeaderLogo"
import { HeaderTitle } from "./HeaderTitle"
import { HeaderNavbar } from "./HeaderNavbar"
import { green } from "@mui/material/colors"

export function Header() {
    return (
        <React.Fragment>
            <AppBar position="static" sx={{ bgcolor: green[700] }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <HeaderLogo />
                        <HeaderNavbar />
                        <HeaderSetting />
                    </Toolbar>
                </Container>
            </AppBar>
            <HeaderTitle />
        </React.Fragment>
    )
}
