const express = require("express");
const router = express.Router();
const adminService = require("./adminService");

router.post("/addAdmin", adminService.signup);
router.post("/login", adminService.login);


module.exports = router;