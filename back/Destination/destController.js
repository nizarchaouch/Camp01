const express = require("express");
const router = express.Router();
const destService = require("./destService");


router.post("/add", destService.add);

router.delete("/deleteDest/:id", destService.deleteDest);

router.put("/updateDest/:id",destService.updateDest);
router.get("/PageDest/:id", destService.getDest);

module.exports = router;