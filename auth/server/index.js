// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
//parse incoming request - specifically into json, attempt to do no matter what type the file is - any request will parse as if it was json
const morgan = require('morgan');
//morgan is a HTTP request logger "middleware" for node.js    . it's a middleware - logging framework, using it for debugging
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost/auth', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});


// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
