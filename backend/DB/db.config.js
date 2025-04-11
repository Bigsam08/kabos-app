/**
 *  configure the database connection to mongoose
 */


const mongoose = require("mongoose");

const db_connection = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongo db connected successfully!! ${db.connection.host}`)

    } catch (error) {
        console.log("error connecting to db", error.message)
    }
}
module.exports = { db_connection }