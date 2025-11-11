import { Router } from 'express'
import { getAllAdopters } from '../../controllers/adopterController'

const router = Router()

router.get('/', getAllAdopters)

export default router
