const express = require("express")
const router = express.Router()

const {
    getAll,
    getOne
} = require("../query.js")

const isPageQueryADigit = (pageQuery) => {
    const pageAsInteger = parseInt(pageQuery)
    const digitRegex = /^\d$/;
    return digitRegex.test(pageAsInteger);
  };

router.get("/", async (req, res) => {
    const all = await getAll()

    //check if the page parameter exists
    if(req.query.page) {
        // check that the page parameter is a valid digit
        if(!isPageQueryADigit(req.query.page)){
            throw { message: 'page must be a valid digit!', status: 'error'}
        }

        // calculate the start and end index of the itmes for the requested page
        const itemsPerPage = 50
        const page = parseInt(req.query.page)
        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage;

        const storeItemsRange = all.slice(startIndex, endIndex);

        res.status(200).json(storeItemsRange)
    } else {
        res.status(200).json(all)
    }
})

router.get("/:id", async (req,res) => {
    const {id} = req.params
    const one = await getOne(id)
    res.status(200).json(one)
})


module.exports = router