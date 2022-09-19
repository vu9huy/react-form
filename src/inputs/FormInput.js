import React, { useState } from 'react';

const FormInput = ({ value, label, onChange, errorMessage, regex, ...inputProps }) => {

  const [notEmty, setNotEmty] = useState(false);
  const [isValidate, setIsValidate] = useState(false)

  function handleBlur(e) {
    if (e.target.value != '') {
      setNotEmty(false)
      if (!regex) {
        setIsValidate(true)
      } else {
        setIsValidate(false)
      }
    } else {
      setNotEmty(true)
    }
  }
  return (
    <div className='form-input form-group'>
      <label className="form-label">{label}</label>
      <input
        onBlur={(e) => { handleBlur(e) }}
        onChange={onChange}
        className="form-control"
        {...inputProps}
      >
      </input>
      {notEmty && <span className='form-message'><span>{label}</span> can't be blank</span>}
      {isValidate && <span className='form-message'>{errorMessage}</span>}
    </div>
  )
}

export default FormInput;