import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

function MyBox(props) {
    //the name should be in capital like a component!
    //the wraper(parent Component) needs to thread the Needle by passing the children props (props.children)
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    width: 200,
                    height: 300,
                },
            }}
        >
            {props.children}
        </Box>
    )
}
export function Cart() {
    return (
        <>
            <MyBox>
                <Paper elevation={3} />
            </MyBox>
            <MyBox>
                <Paper elevation={3} />
            </MyBox>
            <MyBox>
                <Paper elevation={3} />
            </MyBox>
            <MyBox>
                <Paper elevation={3} />
            </MyBox>
        </>
    )
}

//another way to export a component (which is a function that returns elements)
// const Cart = () => {
//     return <div>products</div>
// }
// export default Cart
