require('dotenv').config();
const app = require('./app');
require('./config/mongoose');
// const script = require('./config/script');
Error.stackTraceLimit = 2;
const port = process.env.PORT || 6000;

// script.runScript();

process.on('uncaughtException', err => {
    console.log('Uncaught Exception!! Shutting down process..', err.name, err.message, err.stack);
    process.exit(1);
});

app.listen(port,()=>{
    console.log('App running on Port:', port)
});

process.on('unhandledRejection', err=>{
    console.log('Unhandled Rejection!!',err.code, err.name, err.message, err.stack);
});