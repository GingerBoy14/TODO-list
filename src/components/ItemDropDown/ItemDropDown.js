import React, {useState, useEffect, useRef} from "react";
import {CSSTransition} from "react-transition-group";

import "./ItemDropDown.scss"

function ItemDropDown(props){
    const [show, setShow] = useState(false);
    return(
        <div className="drop-down-menu" >
            <i className={`icon fas fa-angle-left fa-lg  ${show ? 'open' : ''}`}
               onClick={()=>setShow(!show)}/>
            <CSSTransition
                in={show}
                timeout={250}
                classNames="dropdown"
                unmountOnExit>
                <DropDown {...props} setShow={setShow}/>
            </CSSTransition>
        </div>
    );
}


const DropDown = ({ onToggleImportant, onDeleted, handlePinToTop, setShow}) =>{
    const wrapperRef = useRef();

    //func. for handling outside click
    useEffect(() => {
        const handleClickOutside = event => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };

    }, [setShow]);

    return(
        <ul className="dropdown"  ref={wrapperRef}>
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
    )
}
export default ItemDropDown;