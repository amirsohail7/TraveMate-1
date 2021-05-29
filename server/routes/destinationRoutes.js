import { Router } from 'express';
import {all_destinations, create_destination, delete_destination, specific_destination} from '../controllers/destinationController.js';



const router = Router();

router.get('/', all_destinations);
router.get('/:id', specific_destination);
router.post('/create_destination', create_destination);
router.delete('/delete/:id', delete_destination);


export default router;