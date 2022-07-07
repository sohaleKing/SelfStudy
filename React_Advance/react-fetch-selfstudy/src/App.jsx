import React, { useEffect, useState } from "react"
import { Header } from "./Header"
import { Product } from "./Product"
import "./styles.css"

export function App() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    //Get all products & get all availavle categories
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => setProducts(res))

        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((res) => setCategories(res))
    }, [])

    //Get products in a specific category
    useEffect(() => {
        //bouncer
        if (!selectedCategory) return
        fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then((res) => res.json())
            .then((res) => setProducts(res)) //if category selected now set the showing product to this res
    }, [selectedCategory])

    return (
        <React.Fragment>
            <div className="Header">
                <Header
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
            <div className="ProductGrid">
                {products.map((product) => {
                    return <Product key={product.id} {...product} />
                    //if you dont pass any product as props and if not design Product props it would be only repeating product based on array length
                })}
            </div>
        </React.Fragment>
    )
}

//if you put product inisde the array! the content of product changes and that cause re-rendeing the page
//meaning an infinite loop in fetching!
//becuase of React.StrictMode it always start with two!! it keeps re render the react so 4 console log
// (two with empty array and each of every time changes twoxtwo in totall 6 console.log)
//you need to enter the map inside the return (the next return its just map return)
//dont forget seesaw for the map since its insidethe return and has to be readable for bable
