import Box from "@mui/material/Box"

export function HeaderLogo() {
    return (
        <Box
            sx={{
                "& > img": { width: 100 }, //sx selector since the img its not a mui tag we use Box and select from there
            }}
        >
            <img src="/oliveLogo.png" alt="logo" />
        </Box>
    )
}
