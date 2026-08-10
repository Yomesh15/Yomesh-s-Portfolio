
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./connectDB/connectDB.js"
import cors from "cors"
import contact_router from "./routes/contact.route.js"


const app = express()


connectDB()


app.use(cors({
    origin: "https://yomesh-s-portfolio.vercel.app",
    credentials: true
}))
app.use(express.json())


//route
app.use("/api", contact_router)


app.get('/', (req, res) => {
    res.send("Yomesh's Portfolio")
})


const PORT = 2006
app.listen(PORT, () => {
    console.log(`Server : http://localhost:${PORT}`);
})
