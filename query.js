const db  = require("./db/dbConfig.js")

const getAll = async() => {
    try {
        const all = await db.any("SELECT description, nbd_survey_number FROM nutrition")
        return all
    } catch (error) {
        return error
    }
}

module.exports = {
    getAll
}