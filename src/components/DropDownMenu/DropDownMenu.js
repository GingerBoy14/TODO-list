import React, {useState} from "react";
import "./DropDownMenu.css"
import {CSSTransition} from "react-transition-group";

const DropDownMenu = (props) =>{
    const [show, setShow] = useState(false);
    const handleMouseLeave = () =>{
        setShow(false);
    };

    return(
        <div className="drop-down-menu"
             onMouseLeave={()=>handleMouseLeave()}>
            <i className="icon fas fa-ellipsis-h fa-2x"
               onClick={()=>setShow(!show)}/>
            <CSSTransition
                in={show}
                timeout={250}
                classNames="dropdown"
                unmountOnExit>
                <Menu {...props} handleMouseLeave={handleMouseLeave}/>
            </CSSTransition>
        </div>
    );
};


const Menu = ({ onToggleImportant, onDeleted, handleMouseLeave, handlePinToTop}) =>(
    <ul className="dropdown"  onMouseLeave={()=>handleMouseLeave()}>
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