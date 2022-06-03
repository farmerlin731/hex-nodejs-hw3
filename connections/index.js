// TMP TODO
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose
    .connect(DB)
    // .connect('mongodb://localhost:27017/post0529') //local-test
    .then(() => console.log('Connect success._farmer'));