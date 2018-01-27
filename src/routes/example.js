import express from 'express';
import ExampleController from '../controllers/example';
import Example from '../models/example';

const router = express.Router();
const exampleController = new ExampleController(Example);
router.get('/', (req, res) => exampleController.get(req, res));
router.post('/', (req, res) => exampleController.create(req, res));

export default router;
