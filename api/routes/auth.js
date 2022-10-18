import express from "express"
import { checklogin, login, register,getLogin, getRegister } from "../controller/auth.js"
import { verifyUser } from "../utils/verifyToken.js"


const router = express.Router()

// router.get('/register',getRegister)
router.post('/register',register)


// router.get('/login',getLogin)
router.post('/login',login)


router.get('/checklogin',verifyUser,checklogin)




export default router
