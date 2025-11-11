import { Schema, model, Document, Types } from 'mongoose'

//Interface de adoptante
export interface IAdopter extends Document {
  name: string
  address: string
  email?: string
  phone: string
  dpi: string
  pets: Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

const adopterSchema = new Schema<IAdopter>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: false, unique: true, lowercase: true },
    phone: { type: String, required: true },
    dpi: { type: String, required: true },
    address: { type: String },
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet', // 👈 referencia al modelo Pet
      },
    ],
  },
  { timestamps: true }
)

export const Adopter = model<IAdopter>('Adopter', adopterSchema, 'adopters')
