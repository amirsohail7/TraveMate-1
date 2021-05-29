import { Router } from 'express';
import {add_provider, add_service, all_packages, all_packages_detailed, create_package, specific_package} from '../controllers/packageController.js';
import { delete_provider } from '../controllers/providerController.js';



const router = Router();

router.get('/', all_packages);
router.get('/detailed', all_packages_detailed);
router.get('/:id', specific_package);
router.post('/create_package', create_package);
router.put(':pkid/service/:sid', add_service);
router.put(':pkid/provider/:pid', add_provider);
router.delete('/delete/:id', delete_provider);


export default router;