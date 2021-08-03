const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const introRoute = require('./routes/intro')
const scapeGoatRoute = require('./routes/scape-goat')
const delayRoute = require('./routes/delay')
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log("MongoDB connected...");
})
.catch((err) => console.log(err));

app.use('/api/excuses', introRoute)
app.use('/api/excuses', scapeGoatRoute)
app.use('/api/excuses', delayRoute)

app.listen(8800, () => {
  console.log('listening on port: 8800...')
});
