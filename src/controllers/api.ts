import { Application, Request, Response } from 'express';

export const loadApiRoutes = (app: Application): void => {

  app.get('/api', (req: Request, res: Response) =>
    res.status(200).send({ 
      message: 'Welcome to Koda TS NodeJS API' 
    })
  );

};
