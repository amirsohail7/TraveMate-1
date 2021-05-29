import { Router } from 'express';
import {add_provider, all_hotels, all_hotels_detailed, create_hotel, delete_hotel, specific_hotel} from '../controllers/hotelController.js';



const router = Router();

router.get('/', all_hotels);
router.get('/detailed', all_hotels_detailed);
router.get('/:id', specific_hotel);
router.post('/create_hotel', create_hotel);
router.put(':hid/provider/:pid', add_provider);
router.delete('/delete/:id', delete_hotel);


export default router;