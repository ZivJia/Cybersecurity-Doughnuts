import express, { Request, Response, Router } from 'express';

let router: Router = express.Router();
router.route('/').get((req: Request, res: Response) => {
  res.send('demo user');
});

export default router;