import dotenv from 'dotenv';
dotenv.config({ override: true });

module.exports = {
    database_uri: process.env.MONGO_URL,
	port: process.env.PORT,
    token: process.env.TOKEN,
    host: process.env.HOST
}
