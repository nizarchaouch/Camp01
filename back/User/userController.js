const express = require("express");
const router = express.Router();
const userService = require("./userService");

const bodyParser = require("body-parser");
// const CLIENT_URL = "http://localhost:3001/";

router.post("/addUser", userService.signup);
router.post("/login", userService.login);
router.post('/forgot-password', userService.forget);
router.post('/reset-password', userService.reset);



router.get("/showUser", userService.showUsers);
router.get("/showUser/:id", userService.getUser);
router.delete("/delUser/:id", userService.deleteUser);
router.put("/updateUser/:id", userService.updateUser);
router.get("/search", userService.findUser);
module.exports = router;