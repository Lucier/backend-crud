import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common'
import { Request as ExpressRequest, Response } from 'express'
import { ZodSchema, ZodError } from 'zod'

interface RequestWithBody extends ExpressRequest {
  body: any
}

interface NextFunction {
  (err?: any): void
}

@Injectable()
export class ZodValidationMiddleware<T> implements NestMiddleware {
  constructor(private schema: ZodSchema<T>) {}

  use(req: RequestWithBody, res: Response, next: NextFunction): void {
    try {
      const result: T = this.schema.parse(req.body)

      req.body = result

      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        }))

        throw new BadRequestException({
          message: 'Validation failed',
          errors: formattedErrors,
        })
      }
      throw error
    }
  }
}
