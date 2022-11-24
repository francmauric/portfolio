const express = require("express");
let path = require("path");
const app = express();
let routerHome = require("./routes/routerHome");


const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.use("/", routerHome)


app.listen(3200, () =>{
    console.log("servidor levantado en el puerto 3200")
})

/* app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
 */
