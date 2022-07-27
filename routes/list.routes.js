const express = require("express")
const router = express.Router()
const list = require("../controller/list")

router.post("/", list.add)
router.delete("/:id", list.delete)
router.get("/", list.getAll)

module.exports = router