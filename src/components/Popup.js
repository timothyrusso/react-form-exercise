import React from "react";

const Popup = ({ onResetClick, counter, turnOn, children }) => {

  return (
    <div className="popup popup_opened popup_type_add">
      <div className="popup__container">
        {children}
        <button aria-label="Reset" type="button" className="reset-button" onClick={onResetClick}>Reset</button>
        <div className={`save-counter ${turnOn ? "save-counter_opened" : ""}`}>{counter}</div>
      </div>
    </div>
  );
};

export default Popup;
