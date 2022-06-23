import { useEffect, useState } from "react"
import { Product } from "./Product"

const cache = {}

export const App = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    //load all products and filter by category
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
            })
    }, [])

    useEffect(() => {
        if (!selectedCategory) {
            return
        }

        if (cache[selectedCategory]) {
            setProducts(cache[selectedCategory])
            return
        }

        fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                cache[selectedCategory] = data
            })
    }, [selectedCategory])

    // return (
    //     <div className="App">
    //         {products.map((product) => {
    //             return <Product title={product.title} image={product.image} /> // This can be tedious if there are many props/properties
    //         })}
    //     </div>
    // )

    return (
        <div className="App">
            <label htmlFor="categories">Choose a category:</label>

            <select
                onChange={(e) => {
                    console.log("taco", e.target.value)
                    setSelectedCategory(e.target.value)
                }}
                value={selectedCategory}
                name="categories"
                id="categories"
            >
                <option value=""></option>
                {categories.map((category) => {
                    return (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    )
                })}
            </select>

            <div className="ProductGrid">
                {products.map((product) => {
                    return <Product key={product.id} {...product} /> // The compact way using the spread operator (babel understands)
                })}
            </div>
        </div>
    )

    //   return (
    //     <div className="App">
    //         {products.map((product) => {
    //             return <Product taco={product} /> // But if you do it this way, you need to make sure you update your destructuring in the child component
    //         })}
    //     </div>
    // )
}
