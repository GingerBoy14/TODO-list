import React, {useState} from "react";
import "./Tabs.css"
const Tabs = ({ changeContent }) =>{
    const [activate, setActive] = useState(true);
    const active = (activation) =>activation ? 'active' : null;

    const sliderStyle = !activate ? { transform:'translateX(100%)' } : null;

    return(
        <nav>
            <ul className="nav nav-pills">
                <li className="nav-item" >
                  <span
                      className={`nav-link ${active(activate)}`}
                      onClick={()=>{
                          setActive(true);
                          changeContent('login');
                      }}>
                      Login
                  </span>
                </li>
                <li className="nav-item">
                  <span
                      className={`nav-link ${active(!activate)}`}
                      onClick={()=>{
                          setActive(false);
                          changeContent('reg');
                      }}>
                      Register
                  </span>
                </li>
            </ul>
            <div className="slider" style={sliderStyle}>
                <div className="indicator"/>
            </div>
        </nav>
    );
};

export default Tabs;