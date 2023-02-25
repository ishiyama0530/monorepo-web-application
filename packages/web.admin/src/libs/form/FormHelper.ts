import { ZodError } from 'zod'

export type Errors<T> = { [key in keyof T]: string | undefined }

export const updateErrors = <T extends object>(
  errors: Errors<T>,
  zodError: ZodError<{ [key in keyof T]: string }>
): Errors<T> => {
  const fieldErrors = zodError.formErrors.fieldErrors as {
    [key in keyof T]: string[] | undefined
  }
  const keys = Object.keys(fieldErrors) as (keyof T)[]
  keys.forEach((key) => {
    const messages = fieldErrors[key]
    if (messages && messages.length > 0) {
      errors[key] = messages[0]
    } else {
      errors[key] = undefined
    }
  })

  return errors
}

export const clearErrors = <T extends object>(errors: Errors<T>): Errors<T> => {
  const keys = Object.keys(errors) as (keyof T)[]
  keys.forEach((key) => {
    errors[key] = undefined
  })

  return errors
}
