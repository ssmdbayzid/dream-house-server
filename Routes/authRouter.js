const { register, login, googleLogin } = require("../controllers/authController")


const authRouter = require("express").Router()

authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.post("/google/login", googleLogin)

module.exports = authRouter