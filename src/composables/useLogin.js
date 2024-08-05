import { ref } from 'vue'
import { useValidate } from './useValidate'
import { useAuth } from "../supabase/useAuth"

export async function useLogin (userEmail, userPassword) {
  const data = ref({
    status: 'pending',
    errors: [],
    isValid: false
  })

  const { validateEmail, validatePassword } = useValidate()

  const emailFieldState = validateEmail(userEmail)
  const passwordFieldState = validatePassword(userPassword)

  if (!emailFieldState.isValid || !passwordFieldState.isValid) {
    data.value.status = 'error'
    data.value.errors = [emailFieldState, passwordFieldState]

    return {
      data: data.value
    }
  }

  const { authSignIn } = useAuth()
  const authSignInResponse = await authSignIn(userEmail, userPassword)

  return {
    data: {
      status: 'success',
      authSignInResponse
    }
  }
}
