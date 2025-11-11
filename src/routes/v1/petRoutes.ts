import { Router } from 'express'
import { getAllPets } from '../../controllers/petController'

const router = Router()

router.get('/', getAllPets)

export default router
