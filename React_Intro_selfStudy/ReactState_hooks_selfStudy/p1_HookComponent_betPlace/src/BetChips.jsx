//Only Call Hooks at the Top Level - CAN'T BE CALLED INSIDE ANY CONDITIONALS-LOOPS-NESTED FUNCTION
//Only Call Hooks from React Functions

import React, { useState } from "react"
import "./BetChips.styles.css"
export function BetChips() {
    const [bet, betPlace] = useState(1)
    const [betValue, maxBet] = useState(false)

    const handler = (action) => {
        switch (action) {
            case "increment":
                betPlace(bet + 1)
                break
            case "decrement":
                betPlace(bet > 1 ? bet - 1 : 1)
                break
            case "multipeTwo":
                betPlace(bet * 2)
                break
            case "multipeTen":
                betPlace(bet * 10)
                break
            case "DividedTwo":
                betPlace(bet / 2)
                break
            case "DividedTen":
                betPlace(bet / 10)
                break
            case "Reset":
                betPlace(bet * 0 + 1)
                break
        }
    }

    return (
        <React.Fragment>
            <div className="BetChips">
                <div className="bet">Place Your bet</div>
                <div className="display">{bet > 1 ? Math.round(bet) : 1}$</div>
                <div className="error" hidden={!betValue}>
                    you reached the bet limit
                </div>
            </div>
            <div className="BetChips">
                <button
                    className="button"
                    onClick={() => handler("increment")}
                    disabled={betValue}
                >
                    +1 $
                </button>
                <button
                    className="button"
                    onClick={() => {
                        handler("decrement")
                        maxBet(false)
                    }}
                >
                    -1 $
                </button>
                <button
                    className="button"
                    onClick={() => handler("multipeTwo")}
                    disabled={betValue}
                >
                    x2
                </button>
                <button
                    className="button"
                    onClick={() => handler("multipeTen")}
                    disabled={betValue}
                >
                    X10
                </button>
                <button
                    className="button"
                    onClick={() => {
                        handler("DividedTwo")
                        maxBet(false)
                    }}
                >
                    /2
                </button>
                <button
                    className="button"
                    onClick={() => {
                        handler("DividedTen")
                        maxBet(false)
                    }}
                >
                    /10
                </button>
                <button
                    className="button"
                    onClick={() => {
                        maxBet(true)
                        betPlace(1000)
                    }}
                >
                    Max Bet
                </button>
                <button
                    className="button"
                    onClick={() => {
                        handler("Reset")
                        maxBet(false)
                    }}
                >
                    Reset
                </button>
            </div>
        </React.Fragment>
    )
}
