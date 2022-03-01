import { useState } from "react"
import { ProductCard } from "./ProductCard"
import { ProductList } from "./ProductList"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

import { products } from "../services/products"

export function Product() {
    const [productId, setProductId] = useState("")
    const [cartIds, setCartIds] = useState([])

    function addToCart(id) {
        setCartIds((currCartIds) => [...currCartIds, id])
    }

    let content
    if (!productId) {
        content = (
            <ProductList>
                {products.map((product) => {
                    return (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    "& > :not(style)": {
                                        m: 1,
                                        width: "100%",
                                        backgroundColor: "transparent",
                                        p: 2,
                                    },
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "20px",
                                        justifyContent: "center",
                                    }}
                                >
                                    <ProductCard
                                        setProductId={() =>
                                            setProductId(product.id)
                                        }
                                        addToCart={() => addToCart(product.id)}
                                        id={product.id}
                                        key={product.id}
                                        title={product.title}
                                        description={product.description}
                                        imgSrc={product.imgSrc}
                                        imgAlt={product.imgAlt}
                                        price={product.price}
                                    />
                                </Paper>
                            </Box>
                        </>
                    )
                })}
            </ProductList>
        )
    } else {
        const product = products.find((elem) => elem.id === productId)

        content = (
            <ProductCard
                setProductId={() => setProductId("")}
                id={product.id}
                key={product.id}
                title={product.title}
                description={product.description}
                imgSrc={product.imgSrc}
                imgAlt={product.imgAlt}
                price={product.price}
            />
        )
    }

    return (
        <>
            {cartIds.map((id) => {
                return <div>{id}</div>
            })}
            {content}
        </>
    )
}
