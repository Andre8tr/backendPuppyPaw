import { Request, Response } from 'express'
import { Adopter } from '../models/adopterModel'

export const getAllAdopters = async (req: Request, res: Response) => {
  try {
    const adopters = await Adopter.find().populate('pets')
    res.json(adopters)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Error al obtener los adoptesr', error })
  }
}
