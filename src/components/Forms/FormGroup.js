import React from "react";

const FormGroup = ({id, inputType, placeholder, onChange, changedField, children}) => (
    <div className="form-group">
        {children[0]}
        <input type={inputType}
               className="form-control"
               id={id}
               placeholder={placeholder}
               onChange={(e) => onChange(e, changedField)}/>
        {children[1]}
    </div>
);

export default FormGroup;