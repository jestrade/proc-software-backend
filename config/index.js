const dotenv = require("dotenv");

dotenv.config();

const config = {
    http: {
        host: process.env.HTTP_HOST || "0.0.0.0",
        port: process.env.PORT || process.env.HTTP_PORT,
    },
    log: {
        access: "../logs/" + process.env.LOG_ACCESS,
    },
    database: {
        connectionString: process.env.DB_CONNECTION_STRING,
    },
};

module.exports = { config };