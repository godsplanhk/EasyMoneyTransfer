const {User, Account} = require("../db")
const z = require("zod");
const express = require("express");
const {userValidator,signInBody} = require("../validation/validator");
const {JWT_SECRET} = require("../config")
const router = express.Router()
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middlewares/authMiddleware");
router.post("/signup",async (req,res)=>{
    const Checker = userValidator.safeParse(req.body);
    console.log(req.body);
    console.log(Checker);
    if(!Checker.success){
        return res.status(411).json({message: "Email already taken / Incorrect inputs."});
    }
    else{
        const existingUser =await User.findOne({username:req.body.username});
        if(existingUser)return res.status(411).json({message: "Email already taken / Incorrect inputs."});
        try{
            const user = await User.create(Checker.data);
            const userId = user._id;
            const token = jwt.sign({userId},JWT_SECRET);
            await Account.create({
                userId,
                balance: 1+ Math.random()*10000
            });
            return res.json({
                message:"User created successfully.",
                token: token
            })
        }
        catch(error){
            console.log(error);
            res.status(500).send("Server side issue. Failed creating user.")
        }
    }
})

router.post("/signin",(req,res)=>{
    const Checker = signInBody.safeParse(req.body);
    if(!Checker.success)return res.status(411).json({message:"Not a valid input."});
    else{
        User.findOne(req.body).then((docs)=>{
            const token = jwt.sign({userId:docs._id},JWT_SECRET);
            return res.json({token:token});
        }).catch((err)=>res.status(411).json({message:"Error while signing in"}));
    }
});
const updateBody = z.object({
    firstName:z.string().optional(),
    lastName:z.string().optional(),
    password: z.string().optional()
})

router.put("/",authMiddleware,(req,res)=>{
    const Checker = updateBody.safeParse(req.body);
    if(!Checker.success)return res.status(411).json({message:"Something up the update values."});
    else{
        User.findOneAndUpdate({_id:req.userId},req.body).then((docs)=>{
            return res.json({message:"User data updated successfully."});
        }).catch(
            (err)=>{
                 console.log(err);
                res.status(500).send();
            }
        );
    }
})

router.get("/bulk",authMiddleware,async (req,res)=>{
    const filter = req.query.filter ||"";
    let users =[];
    await User.find().or([{firstName: {$regex:filter, $options: 'i'} },{lastName: {$regex:filter, $options: 'i'}}]).then((docs)=>{
        users = docs.slice();
    }).catch((err)=>{console.log(err)});
    res.json({user: users.map(user => {
        userE = {
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }; 
        return userE;
})});
})
module.exports = router;