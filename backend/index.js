const express = require("express");
const helmet = require("helmet");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const introRoute = require('./routes/intro')
const scapeGoatRoute = require('./routes/scape-goat')
const delayRoute = require('./routes/delay')
const app = express();

// https://expressjs.com/en/advanced/best-practice-security.html
app.use(helmet)
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(() => {
  console.log("MongoDB connected...");
})
.catch((err) => console.log(err));

app.use('/api/excuses', introRoute)
app.use('/api/excuses', scapeGoatRoute)
app.use('/api/excuses', delayRoute)

app.listen(8800, () => {
  console.log('listening on port: 8800...')
});
