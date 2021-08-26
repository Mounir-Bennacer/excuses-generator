const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const introRoute = require('./routes/intro')
const scapeGoatRoute = require('./routes/scape-goat')
const delayRoute = require('./routes/delay')
const signupRoute = require('./routes/auth')

const jwt = require('jsonwebtoken')

// https://expressjs.com/en/advanced/best-practice-security.html
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
   {
     useNewUrlParser: true,
     useUnifiedTopology: true,
      useCreateIndex: true
    }
    ).then(() =>
    {
      console.log("MongoDB connected!");
    })
    .catch((err) => console.log(err));

// function generateAccessToken(username) {
//   return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
// }

app.use('/api/excuses/intro', introRoute)
app.use('/api/excuses/scape-goat', scapeGoatRoute)
app.use('/api/excuses/delay', delayRoute)
app.use('/api', signupRoute)


const port = process.env.PORT
app.listen(port, () => {
  console.log('listening on port: ' + port)
});
