const { Account, mongoose, User } = require("../db");
const  { authMiddleware } =  require("../middlewares/authMiddleware");

const express = require("express");
export default router = express.Router();


router.get("/balance",authMiddleware,async(req,res)=>{
    const account = await Account.findOne({userId: req.userId});
    const user = await User.findOne({_id:req.userId});
    console.log(user);
    res.json({name:user.firstName,balance: account.balance});
});

router.post("/transfer",authMiddleware, async(req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const {to,amount} = req.body;
    console.log("transfer initiated",to,amount);
    const account = await Account.findOne({userId:req.userId}).session(session);
    console.log("current bala",account);
    if(!account || account.balance< amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    
    const toAccount = await Account.findOne({userId:to}).session(session);

    await Account.updateOne({userId: req.userId},{$inc:{balance: -amount}}).session(session);
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({message:"invalid account"});
    }

    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);
    await session.commitTransaction();
    res.json({
        message:"Transaction successfull."
    });
});


