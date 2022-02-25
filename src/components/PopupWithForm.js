import React from "react";
import Popup from "./Popup";
import Form from "./Form";
import Emoji from "./Emoji";

function PopupWithForm({ onSubmit, formValidity, onFormUpdate, onResetClick, counter,turnOnCounter, children }) {
    return (
        <Popup onResetClick={onResetClick} counter={counter} turnOn={turnOnCounter}>
            <Form name="myFormmyFormadd" onSubmit={onSubmit} onFormUpdate={onFormUpdate}>
                <h2 className="popup__title">Add New Customer <Emoji symbol="👨‍💻"/></h2>
                {children}
                <button type="submit" className={`submit-button popup__button ${!formValidity ? "submit-button_disabled" : ""}`} disabled={!formValidity} >Save</button>
            </Form>
        </Popup>
    )
}

export default PopupWithForm;