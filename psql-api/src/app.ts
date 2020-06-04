import express, { Application, Request, Response, Router } from 'express';
import userRouter from './routes/userRouter';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my server');
});

let router: Router = express.Router();
router.use('/users', userRouter);

app.use('/', router);

app.listen(5000, () => console.log('psql-api server is running'));