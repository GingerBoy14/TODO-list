import React, {useEffect, useRef} from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.css'

 const TodoList = ({todoItem, onDeleted, onToggleImportant, onToggleDone}) =>{
     const messagesEndRef = useRef(null);
     const scrollToBottom = () => {
         messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
     };
     useEffect(scrollToBottom, [todoItem]);

     const List = todoItem.map((item) =>{
                const { id, ...itemProps} = item;
                return(
                    <li key={id} className="list-group-item" >
                        <TodoListItem {...itemProps}
                                      onDeleted={()=>onDeleted(id)}
                                      onToggleImportant={()=>onToggleImportant(id)}
                                      onToggleDone={()=>onToggleDone(id)}/>
                    </li>
                )
            }

        );
        let hidden = todoItem.length>=9 ?`todo-list-hidden`:null;


        return(
            <ul className={`list-group todo-list ${hidden}`}>
                {List}
                <div className="break-point" ref={messagesEndRef} />
            </ul>
        );
};
export default TodoList;
