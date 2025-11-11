import { Request, Response } from 'express'
import { Pet } from '../models/petModel'

export const getAllPets = async (req: Request, res: Response) => {
  try {
    const pets = await Pet.find()
    res.status(200).json(pets)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Error al obtener datos', error })
  }
}

export const getPetById = async (req: Request, res: Response) => {
  try {
    const pet = await Pet.findById(req.params.id)
    if (!pet) return res.status(404).json({ msg: 'No se encontro la mascota' })
    res.status(200).json(pet)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Error al obtener la mascota', error })
  }
}
