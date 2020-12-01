const express = require('express'); 
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');
const mongoose = require('mongoose');
// require('dotenv').config();

// Import routes
const authRoute = require('./routes/auth.js');
const postRoute = require('./routes/posts.js')

dotenv.config();


const port = process.env.PORT || 1300;

// // middleware  // '/api/user' ===> this authRoute will have a prefix
app.use(cors());
app.use(express.json());
// Route Middlewares// setup routes
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);



// connect to DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

