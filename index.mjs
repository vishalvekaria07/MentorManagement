import http from 'http';
import express from 'express';
import config from './config';
import compression from 'compression';
import bodyParser from 'body-parser';
import dbConnection from './app/domain/connection';

import routes from './routes/route';
import cors from 'cors'

const app = express();

http.createServer();

dbConnection();
app.use(compression());
app.use(bodyParser.json());
app.options('*', cors())
app.use(cors());
app.use('/', routes);

app.listen(config.server.port, () => {
  console.log('Express app - listening on port ' + config.server.port);
});
