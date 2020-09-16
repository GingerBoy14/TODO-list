import React, {useState} from "react";
import "./DropDownMenu.scss"
import {CSSTransition} from "react-transition-group";

const DropDownMenu = (props) =>{
    const [show, setShow] = useState(false);


    return(
        <div className="drop-down-menu">
            <i className={`icon fas fa-angle-left fa-lg  ${show ? 'open' : ''}`}

               onClick={()=>setShow(!show)}/>
            <CSSTransition
                in={show}
                timeout={250}
                classNames="dropdown"
                unmountOnExit>
                <Menu {...props}/>
            </CSSTransition>
        </div>
    );
};


const Menu = ({ onToggleImportant, onDeleted, handlePinToTop}) =>(
    <ul className="dropdown">
        <li className="menu-item pin"
            onClick={handlePinToTop}>
            Pin to top
        </li>
        <li className="menu-item important"
            onClick={onToggleImportant}>
            Mark important
        </li>
        <li className="menu-item delete"
            onClick={onDeleted}>
            Delete
        </li>
    </ul>
);
export default DropDownMenu;