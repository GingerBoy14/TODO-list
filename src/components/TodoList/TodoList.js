import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.css'

/*
* Todo list should scroll only when there are new item in it
*
* */
 const TodoList = ({todoItem, onDeleted, onToggleImportant, onToggleDone}) =>{
     const List = todoItem.map((item) =>{
                const { id, ...itemProps} = item;
         return(
                    <li key={id} className="list-group-item">
                        <TodoListItem {...itemProps}
                                      onDeleted={()=>{onDeleted(id);}}
                                      onToggleImportant={()=>{onToggleImportant(id);}}
                                      onToggleDone={()=>{onToggleDone(id);}}/>
                    </li>
                )
            }

        );
        const hidden = todoItem.length>9 ? `todo-list-hidden` : null;

        return(

            <div className="item-list">
                <ul className={`list-group todo-list ${hidden}`}>
                    {List}
                </ul>
            </div>
        );
};
export default TodoList;
