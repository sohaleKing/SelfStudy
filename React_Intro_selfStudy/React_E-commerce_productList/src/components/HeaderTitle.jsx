import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { green } from "@mui/material/colors"

const colorOlive = green[400]

export function HeaderTitle() {
    return (
        <Box>
            <Typography
                variant="h6"
                p={0.5}
                mt={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: colorOlive,
                }}
            >
                Oil Products E-Commerce User Interface- React
            </Typography>
        </Box>
    )
}
