import express from 'express'
export const router = express.Router()
import { userSignin, userSignup, logout } from '../controllers/user.controller'
import { authMiddleware } from "../middleware/auth.middleware";
import { Request } from 'express';

interface CustomRequest extends Request {
  userId?: string;
}

router.get('/', (req, res) => {
    res.send("Hii, there")
})

router.post('/signin', userSignin)
router.post('/signup', userSignup)
router.get('/logout', authMiddleware, logout)