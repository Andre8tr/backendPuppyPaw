import dotenv from 'dotenv'
import app from './app'
import { connectDB } from './config/db'

dotenv.config()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || 'Testt'

connectDB(MONGO_URI)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT}`)
})
