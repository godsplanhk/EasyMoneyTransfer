export const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://godsplanhk:zlQs8chckb8OPFtY@cluster0.aoczz.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Database Connected"));

const UserSchema = mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true,
        minLength: 5,
        maxLength: 20
    },
    firstName: {
        type:String,
        required: true,
        trim:true,
        maxLength: 50
    },
    lastName: {
        type:String,
        required: true,
        trim:true,
        maxLength: 50
    },
    password: {
        type:String,
        required: true,
        minLength: 6,
    },
})


const AccountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaytmUsers',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }

});
export const Account = mongoose.model("Accounts",AccountSchema);
export const User = mongoose.model("PaytmUsers",UserSchema);
