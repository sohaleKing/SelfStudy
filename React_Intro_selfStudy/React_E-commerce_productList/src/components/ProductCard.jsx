import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"

const colorRed = red[600]

export function ProductCard(props) {
    const {
        id,
        title,
        description,
        imgSrc,
        imgAlt,
        price,
        setProductId,
        addToCart,
    } = props
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={imgAlt}
                height="160"
                image={imgSrc}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography m={1} variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Typography
                textAlign="center"
                sx={{
                    fontWeight: "bold",
                    fontSize: 16,
                }}
                color={colorRed}
            >
                <span>Price: $ </span>
                {price}
            </Typography>

            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    size="small"
                    color="secondary"
                    onClick={(e) => {
                        e.stopPropagation()
                        addToCart()
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                        Add to Cart
                    </Typography>
                </Button>
                <Button size="small" color="primary" onClick={setProductId}>
                    <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                        Learn More
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}
