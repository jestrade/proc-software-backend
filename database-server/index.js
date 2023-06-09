const mongoose = require("mongoose");
const { config } = require("../config");

const { connectionString } = config.database;

const init = async () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        await mongoose.connect(connectionString, options);
        console.log("Connected to the database sucessfully!");
    } catch (err) {
        console.error(
            `Error connecting to database ->`,
            `Error code: ${err.code}, error reference: ${err.codeName}, message: ${err.message}`,
            `${err}`
        );
    }
};

const disconnect = () => {
    mongoose.connection.close();
};

module.exports = { init, disconnect };