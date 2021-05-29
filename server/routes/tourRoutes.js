import express from 'express';
import { Router } from 'express';
import {all_tours, all_tours_detailed,specific_tour, create_tour, delete_tour, add_provider} from '../controllers/tourController.js';



const router = Router();

router.get('/', all_tours);
router.get('/detailed', all_tours_detailed);
router.get('/:id', specific_tour);
router.post('/create_tour', create_tour);
router.put('/:tid/provider/:pid', add_provider);
router.delete('/delete/:id', delete_tour);


export default router;