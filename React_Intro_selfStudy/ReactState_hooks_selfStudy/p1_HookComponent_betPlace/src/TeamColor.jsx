import { useState } from "react"
import "./TeamColor.styles.css"

export function TeamColor() {
    const [color, teamSelect] = useState("white")

    const teamPicker = (ev) => {
        teamSelect(ev.target.style.backgroundColor)
    }

    return (
        <div className="TeamColor">
            <div style={{ backgroundColor: color }}><img src="/horseRace.png"/></div>
            <div className="msg">Select your Team</div>
            <div className="picker">
                <button className = "button"  style={{ backgroundColor: "red" }} onClick={teamPicker}>Red Rider</button>
                <button className = "button"  style={{ backgroundColor: "blue" }} onClick={teamPicker}>Blue Rider</button>
                <button className = "button"  style={{ backgroundColor: "green" }} onClick={teamPicker}>Green Rider</button>
            </div>
        </div>
    )
}
