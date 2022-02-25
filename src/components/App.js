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

  function handleNameCustomerChange(evt) {
    checkValidity(evt)
    setCustomerName(evt.target.value)
  }

  function handleNameAgeChange(evt) {
    checkValidity(evt)
    setCustomerAge(evt.target.value)
  }

  function handleLinkChange(evt) {
    checkValidity(evt)
    setLink(evt.target.value)
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
    setLink('');
  }, []);

  return (
    <div className="content">
      <PopupWithForm name="add" title="New place" onSubmit={handleSubmit} formValidity={formValidity} onFormUpdate={onFormUpdate} onResetClick={handleResetForm} counter={saveCounter} turnOnCounter={showCounter}>
        <Input type={"text"} idName={"name-input"} name={"name"} fieldName={"field_title"} placeholder={"Your Name"} minLength={"2"} maxLength={"30"} value={customerName} onChange={handleNameCustomerChange} errorMessage={errorMessage} />
        <Input type={"number"} idName={"age-input"} name={"age"} fieldName={"field_title"} placeholder={"Your Age"} minLength={"1"} value={customerAge} onChange={handleNameAgeChange} errorMessage={errorMessage} />
        <Input type={"url"} idName={"avatar-input"} name={"avatar"} fieldName={"field_link"} placeholder={"Avatar link"} value={link} onChange={handleLinkChange} errorMessage={errorMessage} />
      </PopupWithForm>
    </div>
  );
}

export default App;
