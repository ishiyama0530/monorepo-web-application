import { zodResolver } from '@hookform/resolvers/zod'
import {
  SubmitErrorHandler as SubmitErrorHandlerOriginal,
  SubmitHandler as SubmitHandlerOriginal,
  useForm
} from 'react-hook-form'
import { DeepReadonly } from 'ts-essentials'
import { z } from 'zod'
import { resolveErrors } from '../../../libs/form/FormHelper'

const schema = z.object({
  email: z.string().email()
})

export type LoginForm = z.infer<typeof schema>
const defaultValues: LoginForm = { email: '' } as const

export type LoginFormHook = ReturnType<typeof useLoginForm>
export type SubmitHandler = SubmitHandlerOriginal<LoginForm>
export type SubmitErrorHandler = SubmitErrorHandlerOriginal<LoginForm>

export const useLoginForm = (initialValues: DeepReadonly<LoginForm> = defaultValues) => {
  const {
    register,
    handleSubmit: handleSubmitOriginal,
    formState: { errors, isSubmitted }
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: initialValues
  })

  const handleSubmit = (onValid: SubmitHandler, onInvalid?: SubmitErrorHandler) =>
    handleSubmitOriginal(onValid, onInvalid)

  return {
    handleSubmit,
    errors: resolveErrors(errors),
    fieldValues: {
      email: register('email')
    },
    isSubmitted
  }
}

// TODO
function resolve(field?: { message?: string }) {
  return field?.message ? [field?.message] : undefined
}
