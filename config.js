const dotenv = require('dotenv');
dotenv.config({ override: true });

module.exports = {
    database_uri: process.env.MONGO_URL,
	port: process.env.PORT,
}
