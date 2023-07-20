const db  = require("./db/dbConfig.js")

const getAll = async() => {
    try {
        const all = await db.any("SELECT description, nbd_survey_number FROM nutrition")
        return all
    } catch (error) {
        return error
    }
}

const getOne = async(id) => {
    try {
        const getOne = await db.one("SELECT * FROM nutrition WHERE nbd_survey_number = $1", id)
        return getOne
        
    } catch (error) {
        return error
    }
}


module.exports = {
    getAll,
    getOne
}