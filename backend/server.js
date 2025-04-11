const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config(); // access global variable
const {db_connection} = require("./DB/db.config")
const authRouter = require("./Routes/auth.Route")

const app = express();
const PORT = process.env.PORT // port

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));

app.use("/api", authRouter);

app.listen(PORT, () => {
    console.log(`Server is now running live on http://localhost:${PORT}`);
    db_connection();
})