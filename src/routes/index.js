import express from 'express';
import exampleRoutes from './example';

const router = express.Router();

router.use('/example', exampleRoutes);
router.get('/', (req, res) => res.send('home'));

export default router;
