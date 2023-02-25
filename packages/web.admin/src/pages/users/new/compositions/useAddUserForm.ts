import { DeepReadonly } from 'ts-essentials'
import { reactive, ref, toRefs, watch } from 'vue'
import { z } from 'zod'
import { clearErrors, Errors, updateErrors } from '../../../../libs/form/FormHelper'

const schema = z.object({
  name: z.string().min(1).max(32),
  email: z.string().email()
})
export type AddUserForm = z.infer<typeof schema>
const defaultValues: AddUserForm = { name: '', email: '' } as const
const defaultErrors: Errors<AddUserForm> = { name: undefined, email: undefined } as const

export type LoginFormComposition = ReturnType<typeof useAddUserForm>
export type SubmitHandler = (data: AddUserForm) => void
export type SubmitErrorHandler = (errors: Errors<AddUserForm>, data: AddUserForm) => void

export const useAddUserForm = (initialValues: DeepReadonly<AddUserForm> = defaultValues) => {
  const data = reactive({ ...initialValues })
  const errors: Errors<AddUserForm> = reactive({ ...defaultErrors })
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
