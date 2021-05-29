import { Router } from 'express';
import {add_service, all_providers, all_providers_detailed, create_provider, delete_provider, specific_provider} from '../controllers/providerController.js';



const router = Router();

router.get('/', all_providers);
router.get('/detailed', all_providers_detailed);
router.get('/:id', specific_provider);
router.post('/create_provider', create_provider);
router.put(':pid/service/:sid', add_service);
router.delete('/delete/:id', delete_provider);

export default router;