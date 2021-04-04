'use strict';

const mongoose = require('mongoose');
const server = require('./src/server');
require('dotenv').config();


mongoose
.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { server.start(process.env.PORT)
  })
  .catch(e => console.error('Could not start server', e.message));