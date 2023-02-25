import { DeepReadonly } from 'ts-essentials'
import { reactive, ref, toRefs, watch } from 'vue'
import { z } from 'zod'
import { clearErrors, Errors, updateErrors } from '../../../libs/form/FormHelper'

const schema = z.object({
  email: z.string().email()
})
export type LoginForm = z.infer<typeof schema>
const defaultValues: LoginForm = { email: '' } as const
const defaultErrors: Errors<LoginForm> = { email: undefined } as const

export type LoginFormComposition = ReturnType<typeof useLoginForm>
export type SubmitHandler = (data: LoginForm) => void
export type SubmitErrorHandler = (errors: Errors<LoginForm>, data: LoginForm) => void

export const useLoginForm = (initialValues: DeepReadonly<LoginForm> = defaultValues) => {
  const data = reactive({ ...initialValues })
  const errors: Errors<LoginForm> = reactive({ ...defaultErrors })
  const isSubmitted = ref(false)

  watch(
    () => ({ ...data }),
    (newValue) => {
      const result = schema.safeParse(newValue)
      if (result.success) {
        clearErrors(errors)
      } else {
        updateErrors(errors, result.error)
      }
    },
    { deep: true }
  )

  const handleSubmit = (onValid: SubmitHandler, onInvalid?: SubmitErrorHandler) => {
    if (!isSubmitted.value) {
      isSubmitted.value = true
    }

    const result = schema.safeParse(data)
    if (result.success) {
      clearErrors(errors)
      onValid(data)
    } else {
      updateErrors(errors, result.error)
      if (onInvalid) {
        onInvalid(errors, data)
      }
    }
  }

  return {
    handleSubmit,
    errors: toRefs(errors),
    fieldValues: toRefs(data),
    isSubmitted
  }
}
