import { ServerError } from '../errors/server.error'
import type { HttpResponse } from '../protocols/http-response'

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
