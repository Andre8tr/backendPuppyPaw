// src/middlewares/errorHandler.ts
/* 
import { Request, Response, NextFunction } from 'express'

interface ErrorWithStatus extends Error {
  statusCode?: number
  errors?: any
  code?: string
}

export const errorHandler = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1) Logging — en prod usar un logger estructurado (pino/winston)
  console.error(err)

  // 2) Tratamientos específicos (Mongoose, JWT, etc.)
  const name = (err as any).name
  // Mongoose: id mal formado -> CastError
  if (name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: 'ID inválido',
      details: (err as any).message,
    })
  }

  // Mongoose: validación de schema
  if (name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Error de validación',
      errors: (err as any).errors,
    })
  }

  // JWT o errores con códigos
  if ((err as any).code === 'INVALID_TOKEN') {
    return res.status(401).json({ success: false, message: 'Token inválido' })
  }

  // 3) Default
  const status = err.statusCode || 500
  res.status(status).json({
    success: false,
    message: err.message || 'Error interno del servidor',
  })
}
 */
