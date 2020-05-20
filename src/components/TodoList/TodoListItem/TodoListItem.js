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

            <div
                className="todo-list-item-text"
                onClick={onToggleDone}>
                 {text}
             </div>
            <i className="menu-popup fas fa-ellipsis-h fa-lg"/>
        </span>
    );
};

const itemButton = (onClick, btnType, icon) => {
    return(
        <button type="button"
                className={`btn ${btnType} btn-sm float-right`}
                onClick={onClick}>
            <i className={`${icon}`}/>
        </button>
    )
};
export default TodoListItem;