import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function App() {

  const [customerName, setCustomerName] = useState('')
  const [customerAge, setCustomerAge] = useState('')
  const [link, setLink] = useState('')
  const [errorMessage, setErrorMessage] = useState({})
  const [formValidity, setFormValidity] = useState(false)
  const [saveCounter, setSaveCounter] = useState(0)
  const [showCounter, setShowCounter] = useState(false)

  function handleChange(evt, type) {
    checkValidity(evt)
    switch (type) {
      case 'name':
        setCustomerName(evt.target.value)
        break
      case 'age':
        setCustomerAge(evt.target.value)
        break
      case 'avatar':
        setLink(evt.target.value)
        break
      default:
        console.log('Error, type it is not correct.')
    }
  }

  function handleBlur(evt, value) {
    const name = evt.target.name;
    if (value === '') {
      setErrorMessage({})
    } else if (!/^\d+$/.test(value)) {
      setErrorMessage({ ...errorMessage, [name]: "Only numbers are allowed" })
    } else {
      setErrorMessage({})
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    setSaveCounter(saveCounter + 1)
    setShowCounter(true)
    const oggetto = {
      customerName,
      customerAge,
      link
    }
    console.log(oggetto)
  }

  function handleResetForm(evt) {
    evt.preventDefault('')
    setCustomerName('')
    setCustomerAge('')
    setLink('')
    setErrorMessage({})
    setFormValidity(false)
    setSaveCounter(0)
    setShowCounter(false)
  }

  function checkValidity(evt) {
    const name = evt.target.name;
    setErrorMessage({ ...errorMessage, [name]: evt.target.validationMessage });
  }

  function onFormUpdate(data) {
    data ? setFormValidity(true) : setFormValidity(false)
  }

  React.useEffect(() => {
    setCustomerName('');
    setCustomerAge('');
    setLink('');
  }, []);

  return (
    <div className="content">
      <PopupWithForm name="add" title="New place" onSubmit={handleSubmit} formValidity={formValidity} onFormUpdate={onFormUpdate} onResetClick={handleResetForm} counter={saveCounter} turnOnCounter={showCounter}>
        <Input type={"text"} idName={"name-input"} name={"name"} fieldName={"field_title"} placeholder={"Your Name"} minLength={"2"} maxLength={"30"} value={customerName} onChange={handleChange} errorMessage={errorMessage} onHandleBlur={handleBlur} activateBlur={false} />
        <Input type={"text"} idName={"age-input"} name={"age"} fieldName={"field_title"} placeholder={"Your Age"} minLength={"1"} value={customerAge} onChange={handleChange} errorMessage={errorMessage} onHandleBlur={handleBlur} activateBlur={true} />
        <Input type={"url"} idName={"avatar-input"} name={"avatar"} fieldName={"field_link"} placeholder={"Avatar link"} value={link} onChange={handleChange} errorMessage={errorMessage} onHandleBlur={handleBlur} activateBlur={false} />
      </PopupWithForm>
    </div>
  );
}

export default App;
