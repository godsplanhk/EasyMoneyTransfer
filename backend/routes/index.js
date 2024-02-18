// const express = require("express");
// const userRouter = require("./user")
// const accountRouter = require("./accounts");
import express from "express";
import userRouter from "./user.js";
import accountRouter from "./accounts.js";
export default router = express.Router();
router.use("/user",userRouter);
router.use("/account",accountRouter);    