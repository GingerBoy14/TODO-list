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

            {itemButton(
                        onToggleImportant,
                "btn-outline-success",
                   "fa fa-exclamation")}

            {itemButton(
                        onDeleted,
                "btn-outline-danger",
                   "fa fa-trash-o")}

        </span>
    );
};

const itemButton = (onClick, btnType, icon) => (
      <button type="button"
              className={`btn ${btnType} btn-sm float-right`}
              onClick={onClick}>
          <i className={`${icon}`}/>
      </button>
  );
export default TodoListItem;