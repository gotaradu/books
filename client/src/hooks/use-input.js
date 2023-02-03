import { useState } from 'react'

const useInput = (validateValueFunction) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [errMessage, setErrMessage] = useState('')

  const { enteredValueIsValid, errorMessage } = validateValueFunction(value)

  const hasError = !enteredValueIsValid && isTouched

  const valueChangeHandler = (event) => {
    setValue(event.target.value)
  }
  const errorHandler = () => {
    setErrMessage(errorMessage)
  }

  const inputBlurHandler = () => {
    errorHandler()
    setIsTouched(true)
  }
  const resetValue = () => {
    setValue('')
    setIsTouched(false)
  }

  return {
    value,
    enteredValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetValue,
    errMessage,
    errorHandler,
  }
}

export default useInput
