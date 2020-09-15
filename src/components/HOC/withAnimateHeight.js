import React, {useEffect, useRef, useState} from "react";

const withAnimateHeight = (styleClass = null, timeout) => (Wrapper) => (props) =>{
    const dropdownRef = useRef(null);
    useEffect(()=>setMenuHeight(dropdownRef.current.offsetHeight),[dropdownRef]);
    const [ menuHeight, setMenuHeight ] = useState(null);

    //calculate the height of content div when it change
    const calcHeight = (el) =>{
        setMenuHeight(el.offsetHeight);
    };
    return (
        <div
            className={styleClass}
            style={{
                height: menuHeight,
                transition: `height ${timeout}ms ease`
            }}
            ref={dropdownRef}>
                <Wrapper {...props} calcHeight={calcHeight}/>
        </div>
    );
};

export default withAnimateHeight;