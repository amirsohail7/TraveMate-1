import {Router} from 'express';
import {restaurant_get,restaurant_create, restaurant_get_detailed, specific_restaurant, delete_restaurant, add_provider} from '../controllers/restaurantController.js';


const router = Router();

router.get('/', restaurant_get);
router.get('/detailed', restaurant_get_detailed);
router.get('/:id', specific_restaurant);
router.post('/create', restaurant_create);
router.put(':rid/provider/:pid', add_provider);
router.delete('/delete/:id', delete_restaurant);


export default router