import React from "react";
import TodoListItem from "../TodoListItem";
import './TodoList.css'

const TodoList = ({todoItem, onDeleted, onToggleImportant, onToggleDone}) => {

    const List = todoItem.map((item) =>{
            const { id, ...itemProps} = item;
            return(
                <li key={id} className="list-group-item">
                    <TodoListItem {...itemProps}
                                 onDeleted={()=>onDeleted(id)}
                                 onToggleImportant={()=>onToggleImportant(id)}
                                 onToggleDone={()=>onToggleDone(id)}/>
                </li>
            )
        }

    );
    return(
        <ul className="list-group todo-list">
            {List}
        </ul>
    );
};

export default TodoList;