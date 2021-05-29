import { Router } from 'express';
import {all_bookings, create_booking, specific_booking , all_bookings_detailed, delete_booking, add_service,add_provider,add_traveler} from '../controllers/bookingController.js';



const router = Router();

router.get('/', all_bookings);
router.get('/detailed', all_bookings_detailed);
router.get('/:id', specific_booking);
router.post('/create_booking', create_booking);
router.put(':bid/service/:sid', add_service);
router.put(':bid/provider/:pid', add_provider);
router.put(':bid/traveler/:tid', add_traveler);
router.delete('/delete/:id', delete_booking);


export default router;