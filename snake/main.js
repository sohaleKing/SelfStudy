const GRID_SIZE = 30

const gamestate = {
    playerInput: "",

    foodPosition: [10, 15],

    snakePositions: [
        [20, 20],
        [19, 20],
        [18, 20],
    ],

    snakeDirection: "right",
}

function render() {
    const { foodPosition, snakePositions } = gamestate

    // const foodX = gamestate.foodPosition[0]
    // const foodY = gamestate.foodPosition[1]
    const [foodX, foodY] = foodPosition

    const cell = document.querySelector(
        // "body > div:nth-of-type(" + foodY + ") > div:nth-of-type(" + foodX + ")"
        `body > div:nth-of-type(${foodY}) > div:nth-of-type(${foodX})`
    )

    cell.classList.add("food")

    snakePositions.forEach((elem) => {
        const [snakeX, snakeY] = elem

        const cell = document.querySelector(
            `body > div:nth-of-type(${snakeY}) > div:nth-of-type(${snakeX})`
        )

        cell.classList.add("snake")
    })
}

function gameloop() {
    // getPlayerInput()

    // updateGamestate()

    render()

    setTimeout(() => gameloop(), 1000)
}

function initializeGame() {
    document.body.innerHTML = ""

    for (let y = 1; y <= 30; y++) {
        const row = document.createElement("div")

        for (let x = 1; x <= 30; x++) {
            row.appendChild(document.createElement("div"))
        }

        document.body.appendChild(row)
    }

    document.addEventListener("keydown", (e) => {
        console.log(e.code, typeof e.code)
        gamestate.playerInput = e.code
    })
}

initializeGame()

gameloop()
