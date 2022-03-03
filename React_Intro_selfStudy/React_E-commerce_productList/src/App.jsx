import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { Header } from "./components/Header"
import { Product } from "./components/Product"
import { Footer } from "./components/Footer"

export function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: "#eee", height: "100vh" }}>
                    <Header />
                    <Product />
                    <Footer />
                </Box>
            </Container>
        </React.Fragment>
    )
}
