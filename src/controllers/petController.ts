import { Request, Response } from 'express'
import { Pet } from '../models/petModel'

export const getAllPets = async (req: Request, res: Response) => {
  try {
    const pets = await Pet.find()
    res.json(pets)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Error al obtener datos', error })
  }
}
