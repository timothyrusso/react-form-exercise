import React from "react";

function Input({ type, idName, name, fieldName, placeholder, onChange, minLength, maxLength, value, errorMessage, onHandleBlur, activateBlur }) {

  return (
    <>
      <input type={type} id={idName} name={name} className={`popup__input popup__input_${fieldName}`} placeholder={placeholder} required
        minLength={minLength} maxLength={maxLength} value={value} onChange={(evt) => onChange(evt, name)} onBlur={activateBlur ? (evt) => onHandleBlur(evt, value) : null} />
      <span id={`${idName}-error`} className="popup__input_type_error">{errorMessage[name]}</span>
    </>
  )
}

export default Input;
