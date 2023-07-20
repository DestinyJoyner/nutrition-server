const express = require("express")
const router = express.Router()

const {
    getAll
} = require("../query.js")

router.get("/", async (req, res) => {
    const all = await getAll()

    res.status(200).json(all)
})


module.exports = router