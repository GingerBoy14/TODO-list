import React, {Component} from "react";

import "./AddItemForm.css"

export default class AddItemForm extends Component{

    state = {
        text: ''
    };
    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text){
            this.props.onItemAdd(this.state.text);
            this.setState({
                text: ''
            });
        }
    };

    render() {
        return(
            <form className="item-add-form"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="search-input form-control"
                       placeholder="What needs to be done"
                       onChange={this.onTextChange}
                       value={this.state.text}/>
                <button type="button"
                        className="add-btn btn btn-outline-primary"
                        onClick={this.onSubmit}>Add Item</button>
            </form>
        );
    };
}