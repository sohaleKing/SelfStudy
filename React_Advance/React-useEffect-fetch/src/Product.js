export const Product = (props) => {
    const { title, description, image, id, rating, price, category } = props // would have to be props.taco if you use the 3rd syntax commented-out in the <App/> component

    return (
        <div className="Product">
            <h2>{title}</h2>
            <img src={image} />
        </div>
    )
}
