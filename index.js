const mongoose = require('mongoose');

module.exports = {
    createNewDatabase() {
        return mongoose.connect(
            `mongodb://localhost/test_database_${Math.round(
                Math.random() * 1000000000
            )}`
        );
    },
    async dropDatabase() {
        await mongoose.connection.dropDatabase();
        await mongoose.disconnect();
    },
};
