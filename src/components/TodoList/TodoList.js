import React, {useEffect, useRef, useState} from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.css'

/*
* Todo list should scroll only when there are new item in it
*
* */
 const TodoList = ({todoItem, onDeleted, onToggleImportant, onToggleDone}) =>{
     const messagesEndRef = useRef(null);
     const [scrollActive, setScrollActive] = useState(false);
     const scrollToBottom = () => {
         if (scrollActive){
             messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
         }
         setScrollActive(true);
     };
     useEffect(scrollToBottom, [todoItem]);

     const List = todoItem.map((item) =>{
                const { id, ...itemProps} = item;
                return(
                    <li key={id} className="list-group-item" >
                        <TodoListItem {...itemProps}
                                      onDeleted={()=>{onDeleted(id); setScrollActive(false);}}
                                      onToggleImportant={()=>{onToggleImportant(id);setScrollActive(false);}}
                                      onToggleDone={()=>{onToggleDone(id);setScrollActive(false);}}/>
                    </li>
                )
            }

        );
        const hidden = todoItem.length>9 ? `todo-list-hidden` : null;

        return(

            <div className="item-list">
                <ul className={`list-group todo-list ${hidden}`}>
                    {List}
                    <div className="break-point" ref={messagesEndRef}/>
                </ul>
            </div>
        );
};
export default TodoList;
