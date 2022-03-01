import { Grid } from "@mui/material"

export function ProductList(props) {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {props.children.map((child) => {
                return (
                    <Grid
                        item
                        id={child.key}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        {child}
                    </Grid>
                )
            })}
        </Grid>
    )
}
