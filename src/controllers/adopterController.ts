import { Request, Response } from 'express'
import { Adopter } from '../models/adopterModel'
import { log } from 'console'

export const getAllAdopters = async (req: Request, res: Response) => {
  try {
    const adopters = await Adopter.find().populate('pets')
    res.json(adopters)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Error al obtener los adoptesr', error })
  }
}

export const getAdopterById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const adopter = Adopter.findById(id)
    if (!adopter) res.status(400).json({ msg: 'No se encontro el adoptante' })
    res.status(200).json(adopter)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Error al obtener el adoptante', error })
  }
}
