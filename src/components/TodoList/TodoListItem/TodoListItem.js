import React from "react";
import "./TodoListItem.css"
import "../../DropDownMenu"
import DropDownMenu from "../../DropDownMenu";

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

            <div className="todo-list-item-text">
                 <span onClick={onToggleDone}>{text}</span>
             </div>
            <DropDownMenu
                onDeleted={onDeleted}
                onToggleImportant={onToggleImportant}/>
        </span>
    );
};
export default TodoListItem;