const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(process.env.DB, connectionParams);
        console.log("connected to database successfully.");
    } catch (error) {
        console.log("could not connect to database.");
    }
};
