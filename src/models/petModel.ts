import { Schema, model, Document } from 'mongoose'

//Interface que extiende desde el documento de mongoose
export interface IPet extends Document {
  name: string
  age: number
  description?: string
  adopted?: boolean
  location?: boolean
  createdAt: Date
  updatedAt: Date
}

const petSchema = new Schema<IPet>(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    description: { type: String, required: true },
    adopted: { type: Boolean, default: false },
    location: { type: String, default: 'Quetzaltenango' },
  },
  { timestamps: true }
)

export const Pet = model<IPet>('Pet', petSchema, 'puppys')
