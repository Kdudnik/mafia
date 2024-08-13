export function useValidate() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email) => {
    const state = {
      field: 'email',
      isValid: false,
      message: ''
    }

    if(!email) {
      state.message = 'auth.error.noEmail'
      return state
    }
    if (!emailPattern.test(email)) {
      state.message = 'auth.error.wrongEmail'
      return state
    }
    if (email.length > 254) {
      state.message = 'auth.error.longEmail'
      return state
    }

    state.isValid = true
    return state
  };

  const validatePassword = (password) => {
    const state = {
      field: 'password',
      isValid: false,
      message: ''
    }

    if(!password) {
      state.message = 'auth.error.noPassword'
      return state
    }
    if (password.length < 8) {
      state.message = 'auth.error.shortPassword'
      return state
    }
    if (password.length > 254) {
      state.message = 'auth.error.longPassword'
      return state
    }

    state.isValid = true
    return state
  };

  const validateUsername = (username) => {
    const state = {
      field: 'username',
      isValid: false,
      message: ''
    }

    if(!username) {
      state.message = 'auth.error.noUsername'
      return state
    }

    if (username.length > 18) {
      state.message = 'auth.error.longUsername'
      return state
    }

    state.isValid = true
    return state
  }

  return {
    validateEmail,
    validatePassword,
    validateUsername
  }
}
