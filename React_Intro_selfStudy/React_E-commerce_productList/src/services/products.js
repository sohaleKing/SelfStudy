import { v4 as uuidv4 } from "uuid"
import img_product1 from "../imgs/oliveOil.jpg"
import img_product2 from "../imgs/pumpkinOil.jpg"
import img_product3 from "../imgs/avacadoOil.jpg"
import img_product4 from "../imgs/sesameOil.jpg"
import img_product5 from "../imgs/blackSeed.jpg"
import img_product6 from "../imgs/macadomia.jpg"

export const products = [
    {
        id: uuidv4(),
        title: "Olive Oil",
        description:
            "Olive Oil is rich in vitamin E, a fat soluble vitamin that supports normal nerve conduction and plays arole in immunity.",
        imgSrc: img_product1,
        imgAlt: "olive oil",
        price: 120,
    },
    {
        id: uuidv4(),
        title: "Pumpkin Oil",
        description:
            "Pumpkin Oil is rich in vitamin E, a fat soluble vitamin that supports normal nerve conduction and plays arole in immunity.",
        imgSrc: img_product2,
        imgAlt: "pumpkin oil",
        price: 80,
    },
    {
        id: uuidv4(),
        title: "Avacado Oil",
        description:
            "Avacado Oil is rich in vitamin E, a fat soluble vitamin that supports normal nerve conduction and plays arole in immunity.",
        imgSrc: img_product3,
        imgAlt: "avacado oil",
        price: 180,
    },
    {
        id: uuidv4(),
        title: "Black Seed Oil",
        description:
            "Black Seed Oil is rich in vitamin E, a fat soluble vitamin that supports normal nerve conduction and plays arole in immunity.",
        imgSrc: img_product4,
        imgAlt: "black seed oil",
        price: 99,
    },
    {
        id: uuidv4(),
        title: "Sesame Oil",
        description:
            "Sesame Oil is rich in vitamin E, a fat soluble vitamin that supports normal nerve conduction and plays arole in immunity.",
        imgSrc: img_product5,
        imgAlt: "sesame oil",
        price: 165,
    },
    {
        id: uuidv4(),
        title: "Macadamia Oil",
        description:
            "Macadamia is rich in vitamin E, a fat soluble vitamin that supports normal nerve conduction and plays arole in immunity.",
        imgSrc: img_product6,
        imgAlt: "macadamia oil",
        price: 210,
    },
]
