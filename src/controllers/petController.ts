import { Request, Response } from 'express'
import { Pet } from '../models/petModel'
import { log } from 'console'

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

export const createNewPet = async (req: Request, res: Response) => {
  try {
    const { name, age, description, location } = req.body
    // Validación básica (a propósito simple)
    if (!name || age === undefined || !description || !description) {
      return res.status(400).json({
        msg: 'Faltan campos obligatorios',
      })
    }

    console.log('Paso validacion')

    const pet = new Pet({
      name,
      age,
      description,
      location,
    })

    const savedPet = await pet.save()

    res.status(201).json(savedPet)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Error al ingresar mascota' })
  }
}
