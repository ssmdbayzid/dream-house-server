// const { getProperties, getSingleProperty, addProperty, postComment, bookingProperty } = require("../Controller/PropertyController")

const { bookingProperty } = require("../controllers/BookProperty")
const { getProperties, getSingleProperty, addProperty, postComment } = require("../controllers/PropertyController")

const propertyRouter =  require("express").Router()
// const passport = require("passport")

propertyRouter.get("/",  getProperties)
propertyRouter.get("/:id", getSingleProperty)

propertyRouter.post("/:id/comments",  postComment)
propertyRouter.post("/:id",  bookingProperty)
propertyRouter.post("/", addProperty)


module.exports = propertyRouter;

// passport.authenticate("jwt", {session: false}),
