const express = require("express")
const router = express.Router()

const {
    getAll,
    getOne
} = require("../query.js")

router.get("/", async (req, res) => {
    const all = await getAll()

    res.status(200).json(all)
})

router.get("/:id", async (req,res) => {
    const {id} = req.params
    const one = await getOne(id)
    res.status(200).json(one)
})


module.exports = router