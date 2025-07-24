const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        const URL = process.env.MONGO_DB_URL;
        const password = process.env.MONGO_DB_PASSWORD;
        const dbName = process.env.MONGO_DB_DATABASE_NAME;

        if (!URL || !password || !dbName) {
            throw new Error("Missing DB environment variables");
        }

        const URL_WITH_PASSWORD = URL.replace("<db_password>", password);
        const FINAL_URL = URL_WITH_PASSWORD.replace("/?", `/${dbName}?`);

        await mongoose.connect(FINAL_URL);
        console.log("------------  DATABASE CONNECTED SUCCESSFULLY  ------------");
    }
    catch (err) {
        console.log("------------  DATABASE NOT CONNECTED  ------------");
        console.error(err.message);
    }
};

module.exports = connectToDB;