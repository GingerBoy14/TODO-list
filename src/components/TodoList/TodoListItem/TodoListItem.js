import React from "react";

import ItemDropDown from "../../ItemDropDown";

import "./TodoListItem.scss"
import {CSSTransition} from "react-transition-group";
import {bindActionCreators} from "redux";
import {deleteTodo, toggleDone, toggleImportant, togglePinToTop} from "../../../redux/actions";
import {connect} from "react-redux";

const TodoListItem = ({
            id, text, done, important, pinToTop,
            deleteTodo, togglePinToTop, toggleDone, toggleImportant}) => {

    let classNames = `todo-list-item`;
    //let pinToTopStyle = pinToTop ? ' pinToTop' : null;
    if(done){
        classNames += ` done`;
    }
    if(important){
        classNames += ` important`;
    }
    if(pinToTop){
        classNames += ` pin-to-top`;
    }

    return (
        <CSSTransition
            key={id}
            timeout={330}
            classNames="list-item">
            <li key={id} className="list-group-item">
                    <span className={classNames}>
                    <div className="todo-list-item-text">
                         <span onClick={()=>toggleDone(id)}>{text}</span>
                     </div>
                    <ItemDropDown
                        onDeleted={()=>deleteTodo(id)}
                        onToggleImportant={()=>toggleImportant(id)}
                        handlePinToTop={()=>togglePinToTop(id)}/>
                    </span>
            </li>
        </CSSTransition>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        deleteTodo, togglePinToTop, toggleDone, toggleImportant
    }, dispatch) ;
};
export default connect(null, mapDispatchToProps)(TodoListItem);