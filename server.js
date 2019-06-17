const express = require('express')
const mongoose = require('mongoose')


const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/long-lost-friends';
mongoose.Promise = Promise;
mongoose.connect(mongoUri, {
  useNewUrlParser: true
});

app.listen(PORT, () => console.log(`now listening on port ${PORT}`)) 