import React, {forwardRef} from "react";

const FormGroup = forwardRef(({id, inputType, inputName, placeholder, errors, children}, ref) => (
    <div className="form-group">
        {children[0]}
        <input type={inputType}
               className={`form-control ${errors ? 'error':''}`}
               id={id}
               name={inputName}
               placeholder={placeholder}
               ref={ref}
              />
        {children[1]}
    </div>
));

export default FormGroup;