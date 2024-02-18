const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1",rootRouter);
app.use((req,res,err,next)=>{
    console.log(err.message);
})
app.listen(3000,()=>console.log("Server running......"));