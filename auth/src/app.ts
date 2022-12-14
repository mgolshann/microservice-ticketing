import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
var cookieSession = require('cookie-session')
var url = require('url') ;

const cors = require('cors');
require('dotenv').config();

// Initiating express
const app = express();

// Trust incoming request form ingress controller
app.set('trust proxy', true);

app.use(json());
app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN,
    }),
);

// Error Classes
import { NotFoundError, errorHandler } from '@mgbg_tickets/common';

// User routes
import { SignupRouter } from './routes/signup';
import { SigninRouter } from './routes/signin';
import { SignoutRouter } from './routes/signout';
import { currentUserRouter } from './routes/current-user';

// Configuration Cookie Session
// secure: only share cookie with https connection
// supertest not making https instead it use connection
// so we tell run jest only when it's not in test mode

app.use(
  cookieSession({
    secret: 'yourSecret',
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
    httpOnly: false,
    sameSite: false,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }),
);

// User routes
app.use(currentUserRouter);
app.use(SignupRouter);
app.use(SigninRouter);
app.use(SignoutRouter);

// Handling not found routes
app.all('*', async (req, res) => {
    throw new NotFoundError();
    // var hostname = req.headers.host;         // hostname = 'localhost:8080'
    var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
    res.send(pathname);
});

// This line of code sould be placed at the bottom of routes
app.use(errorHandler);

export { app }