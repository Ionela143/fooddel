import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import "dotenv/config";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();
console.log("MONGODB_URI =", process.env.MONGODB_URI);
console.log("JWT SECRET (server):", process.env.JWT_SECRET);

//api endpoints

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.get("/", (req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=>{
    console.log(`Server strated on http://localhost:${port}`)
})