const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

 const authMiddleware = (req,res,next)=>{
    const authHeaders = req.headers.authorization;
    if(!authHeaders||!authHeaders.startsWith('Bearer '))return res.sendStatus(403).json({authHeaders});
    const token = authHeaders.split(" ")[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch{
        return res.send(403).send();
    }
}
module.exports={authMiddleware}