import { FieldErrorsImpl } from 'react-hook-form'

export type Errors<T> = { [key in keyof T]: string[] | undefined }

export const resolveErrors = <T extends object>(errors: Partial<FieldErrorsImpl<T>>): Errors<T> => {
  const keys = Object.keys(errors) as (keyof T)[]
  const resolved = keys.reduce((prev: Partial<Errors<T>>, key) => {
    const field = errors[key]?.message
    if (typeof field === 'string') {
      prev[key] = field ? [field] : undefined
    }
    return prev
  }, {}) as Errors<T>

  return resolved
}
