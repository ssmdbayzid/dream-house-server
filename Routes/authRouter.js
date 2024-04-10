const { register, login, googleLogin, getAllUser } = require("../controllers/authController")


const authRouter = require("express").Router()

authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.post("/google/login", googleLogin)
authRouter.get("/users", getAllUser)

module.exports = authRouter