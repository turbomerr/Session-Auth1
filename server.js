import express from "express"
import session from "express-session"
import connectMongoDBSession from "connect-mongodb-session"
import userRouter from "./routes/auth.route.js"
import dotenv from "dotenv"

import { db } from "./db/connect.js"


const MongodbSession = connectMongoDBSession(session)
const app = express()
dotenv.config()


const URI = process.env.URI || "mongodb://localhost:27017/sessions"

const store = new MongodbSession({
    uri: URI,
    collection: "mySessions"
})

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))



app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
    store: store
}))

app.get("/", (req, res) => {
    res.render("landing")
})

app.use("/api/user", userRouter) 


app.listen(8080, () => {
    db()
    console.log("Server running on port 8080")
})