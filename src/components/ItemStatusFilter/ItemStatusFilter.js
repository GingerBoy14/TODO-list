import React,{Component} from "react";
import "./ItemStatusFilter.css"


export default class ItemStatusFilter extends Component{

    buttons = [
        {name: 'all', title: "All"},
        {name: 'active', title: "Active"},
        {name: 'done', title: "Done"}
    ];

    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, title})=>{
            const classNames = filter===name ? "btn btn-info" : "btn btn-outline-secondary";
            return(
                <button type="button"
                        className={classNames}
                        key={name}
                        onClick={()=>onFilterChange(name)}>{title}</button>
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    };
}

