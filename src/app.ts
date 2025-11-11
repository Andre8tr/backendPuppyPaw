import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
//Importacion de rutas
import petRoutes from './routes/v1/petRoutes'
import adopterRoutes from './routes/v1/adopterRoutes'

const app = express()

app.use(helmet())
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

/*
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
*/

//route for test
app.get('/health', (req, res) => {
  res.status(200).json({ msg: '🐾 Api funcionando' })
})

//Routes for pets
app.use('/api/pets', petRoutes)
app.use('/api/adopters', adopterRoutes)

export default app
