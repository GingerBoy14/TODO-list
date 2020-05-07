import React from "react";
import "./TodoListItem.css"

const TodoListItem = (props) => {

    const {
        text, done, important,
        onDeleted,
        onToggleImportant,
        onToggleDone
    } = props;

    let classNames = `todo-list-item`;
    if(done){
        classNames += ` done`;
    }
    if(important){
        classNames += ` important`;
    }

    return (
        <span className={classNames}>
             <span
                 className="todo-list-item-text"
                 onClick={onToggleDone}>
                 {text}
             </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                <i className="fa fa-trash-o"/>
            </button>

        </span>
    );
};


export default TodoListItem;