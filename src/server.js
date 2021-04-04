'use strict';

const express = require('express');
const cors = require('cors');
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');
const router = require('./auth/router');
const app = express();


app.use(express.json());
app.use(cors());
app.use(router);
app.use('*' , notFoundHandler);
app.use(errorHandler);


module.exports = {
    app: app,
    start : (port)=>{
        const PORT = port ;
        app.listen(PORT , ()=> console.log(`LISTENING ON PORT ${PORT}`));
    },
};