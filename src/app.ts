import express from 'express';
import path from 'path';

import { loadApiRoutes } from './controllers/api';

const expressConfig: any = {
  rootPath: path.join(__dirname, '../public'), 
  config: { 
    maxAge: 31557600000 
  }
};

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(
    expressConfig.rootPath,
    expressConfig.config
  )
);

loadApiRoutes(app);

export default app;
