
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const excuseRoute = require('./routes/excuse')
const app = express();

dotenv.config();

mongoose
.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("MongoDB connected...");
})
.catch((err) => console.log(err));

app.use('/api/excuses', excuseRoute)

app.listen(8800, () => {
  console.log('listening on port: 8800...')
});
