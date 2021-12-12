import { Router } from 'express';
import {all_admins, specific_admin, create_admin, delete_admin} from '../controllers/adminController.js';



const router = Router();

router.get('/', all_admins);
router.get('/:id', specific_admin)
router.post('/create_admin', create_admin);
router.delete('/delete/:id', delete_admin);


export default router;