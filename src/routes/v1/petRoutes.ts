import { Router } from 'express'
import { getAllPets, getPetById, createNewPet } from '../../controllers/petController'

const router = Router()

router.get('/', getAllPets)
router.get('/:id', getPetById)
router.post('/', createNewPet)

export default router
