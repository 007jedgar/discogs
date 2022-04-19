import React, {useState }  from 'react'

//only works with input that have property data-[name] bound to props
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