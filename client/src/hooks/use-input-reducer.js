import { useReducer } from 'react'

const initialRegisterState = {
  username: '',
  lastBookRead: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const reducer = (state, action) => {
  switch (action) {
    case 'INPUT':
      return { value: action.value, isTouched: state.isTouched }
    case 'BLUR':
      return { isTouched: true }

    case 'RESET':
      return initialInputState
    default:
      return initialInputState
  }
}

const UseInputReducer = (validateValueFunction) => {
  const [inputState, dispatch] = useReducer(reducer, initialRegisterState)

  const valueIsValid = validateValueFunction(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched
  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value })
  }
  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' })
  }
  const resetValue = () => {
    dispatch({ type: 'RESET' })
  }
  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetValue,
  }
}
