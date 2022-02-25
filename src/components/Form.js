import React, { useRef } from "react";

function Form({ onSubmit, onFormUpdate, children }) {

  const formRef = useRef()

  function handleFormValidity() {
    const formValidityBoolean = formRef.current.checkValidity()
    onFormUpdate(formValidityBoolean)
  }

  return (
    <form action="#" className="popup__form" name="myFormmyFormadd" onSubmit={onSubmit} ref={formRef} onChange={handleFormValidity}>
      {children}
    </form>
  )
}

export default Form;
