import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export const Product = (props) => {
    const { id, title, price, description, category, image } = props
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={title} width="100%" image={image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h4" color="text.primary">
                    {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Action1</Button>
                <Button size="small">Action2</Button>
            </CardActions>
        </Card>
    )
}
