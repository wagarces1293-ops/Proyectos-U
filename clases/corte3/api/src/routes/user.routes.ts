import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

// Definición de endpoints
router.get('/usuarios', userController.getUsuarios);
router.post('/usuarios', userController.createUsuario);

export default router;