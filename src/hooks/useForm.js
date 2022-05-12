import React, {useState }  from 'react'

export const useForm  = (initValues) => {
  const [ values, handleChange ] = useState(initValues)
  
  return [
    values,
    (text, name) => {
      handleChange({
        ...values,
        [name] : text
      })
    }
  ]
}