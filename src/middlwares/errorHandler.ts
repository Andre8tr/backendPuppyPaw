import { Request, Response, NextFunction } from 'express'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('❌ Error:', err.message || err)
  const status = err.statusCode || 500
  res.status(status).json({
    success: false,
    message: err.message || 'Error interno del servidor',
  })
}
