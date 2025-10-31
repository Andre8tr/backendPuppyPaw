import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
const app = express()

app.use(helmet())
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

//route for test
app.get('/health', (req, res) => {
  res.status(200).json({ msg: '🐾 Api funcionando' })
})

export default app
