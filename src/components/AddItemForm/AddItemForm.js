import React, { useState } from "react";

import "./AddItemForm.css"

const AddItemForm = ({ onItemAdd }) =>{
    const [text, setText] = useState('');
    const onTextChange = (e) => {
        setText( e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(text){
            onItemAdd(text);
            setText('');
        }
    };
        return(
            <form className="item-add-form"
                  onSubmit={onSubmit}>
                <input type="text"
                       className="search-input form-control"
                       placeholder="What needs to be done"
                       onChange={onTextChange}
                       value={text}/>
                <button type="button"
                        className="submit-btn btn"
                        onClick={onSubmit}>
                    Add Item
                </button>
            </form>
        );
    };

export default AddItemForm;