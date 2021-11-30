import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import fetch from "node-fetch"
import NodeCache from "node-cache"

import mapper from "./mapper"

dotenv.config()
globalThis.fetch = fetch

const DISABLE_CACHE = false
const CACHE_TTL_SECONDS = 300

const cache = new NodeCache({ stdTTL: DISABLE_CACHE ? -1 : CACHE_TTL_SECONDS })

const isDevelopment =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"

console.log(`isDevelopment ${isDevelopment}`)

const PORT = isDevelopment ? 3000 : 8080

const origin = isDevelopment
    ? `http://localhost:${PORT}`
    : `https://${process.env.HOST}`

const corsOptions = {
    origin,
    optionsSuccessStatus: 200,
}

const app = express()

app.use(cors(corsOptions))
app.use(express.json())

mapper.map(app, cache, `Bearer ${process.env.NOTION_INTEGRATION_TOKEN}`)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
