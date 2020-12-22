import { Router } from 'express';
import { tour_create_get, tour_index, tour_create_post, tour_details, tour_delete } from '../controllers/tourController';

const router = Router();

router.get('/create', tour_create_get);
router.get('/', tour_index);
router.post('/', tour_create_post);
router.get('/:id', tour_details);
router.delete('/:id', tour_delete);

export default router;