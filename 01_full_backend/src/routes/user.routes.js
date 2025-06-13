// user.routes.js
import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js'; // ✅ assuming named export

const router = Router();

router.route('/register').post(registerUser);

export default router;