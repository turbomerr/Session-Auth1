import express from "express";
import { getDashboard, getRegister, getLogin, postLogin, postRegister, logOut } from "../controller/auth.controller.js";
import { isAuth } from "../middleware/auth.js";
const router = express.Router()



router.get("/register", getRegister)
router.get("/login", getLogin)
router.get("/dashboard",isAuth, getDashboard)
router.post("/login", postLogin)
router.post("/register", postRegister)
router.post("/logout", logOut)



export default router;