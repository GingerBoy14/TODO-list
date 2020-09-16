import React from "react";

import DropDownMenu from "../../DropDownMenu";

import "./TodoListItem.scss"
import {CSSTransition} from "react-transition-group";

const TodoListItem = (props) => {

    const {
        text, done, important, pinToTop,
        handlePinToTop,
        onDeleted,
        onToggleImportant,
        onToggleDone
    } = props;

    let classNames = `todo-list-item`;
    //let pinToTopStyle = pinToTop ? ' pinToTop' : null;
    if(done){
        classNames += ` done`;
    }
    if(important){
        classNames += ` important`;
    }

    return (
        <>
            <CSSTransition
                in={pinToTop}
                classNames="pinToTop"
                timeout={330}
                unmountOnExit
                onEnter={()=> console.log(pinToTop) }
                onExit={()=> console.log(pinToTop) }>
                <div className="pin-to-top-indicator"/>
            </CSSTransition>

            <span className={classNames}>
            <div className="todo-list-item-text">
                 <span onClick={onToggleDone}>{text}</span>
             </div>
            <DropDownMenu
                onDeleted={onDeleted}
                onToggleImportant={onToggleImportant}
                handlePinToTop={handlePinToTop}/>
            </span>
        </>
    );
};
export default TodoListItem;