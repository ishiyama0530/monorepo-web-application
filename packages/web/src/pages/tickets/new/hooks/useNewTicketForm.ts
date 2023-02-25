import { zodResolver } from '@hookform/resolvers/zod'
import {
  SubmitErrorHandler as SubmitErrorHandlerOriginal,
  SubmitHandler as SubmitHandlerOriginal,
  useForm
} from 'react-hook-form'
import { DeepReadonly } from 'ts-essentials'
import { z } from 'zod'
import { resolveErrors } from '../../../../libs/form/FormHelper'

const schema = z.object({
  title: z.string().min(2).max(64),
  body: z.string().min(2).max(1000),
  assignedUserId: z.string().min(1)
})

export type NewTicketForm = z.infer<typeof schema>
const defaultValues: NewTicketForm = { title: '', body: '', assignedUserId: '' } as const

export type NewTicketFormHook = ReturnType<typeof useNewTicketForm>
export type SubmitHandler = SubmitHandlerOriginal<NewTicketForm>
export type SubmitErrorHandler = SubmitErrorHandlerOriginal<NewTicketForm>

export const useNewTicketForm = (initialValues: DeepReadonly<NewTicketForm> = defaultValues) => {
  const {
    register,
    handleSubmit: handleSubmitOriginal,
    formState: { errors },
    getValues
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
      title: register('title'),
      body: register('body'),
      assignedUserId: register('assignedUserId')
    },
    getValues
  }
}
