const express = require('express');
const AppError = require('./config/appError');
const errorHandler = require('./controllers/errorController');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/userRoutes');
const cityRouter = require('./routes/cityRoutes');
const stateRouter = require('./routes/stateRoutes');

app.use(cors());
app.options('*', cors());

app.use(morgan('short'));

app.use(helmet());

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});

app.use(express.json());

app.use('/', limiter);
app.get('/', (req, res, next)=>{
    console.log('random request from ' + req.ip);
    res.send('Hello ' + req.ip);
})

app.use('/api/v1/states', stateRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/cities', cityRouter)

app.use((req, res, next)=>{
    let err = new AppError(`${req.ip} tried to reach a resource at ${req.originalUrl} that is not on this server.`, 404);
    next(err);
});

app.use(errorHandler);

module.exports = app;