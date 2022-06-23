import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App" //if you put App without {} you need to add default keyword to your app

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
