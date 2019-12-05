import React, { useState } from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import { Icon } from 'antd';
import '../../../static/styles/dashboard.css';


const DropdownMenuItem = (props) => {
    const [icon, setIcon] = useState("down");

    const handleClick = () => {
        switch (icon) {
            case "down":
                return setIcon("up")
            case "up":
                return setIcon("down");
            default:
                return setIcon("down");
        }
    }

    return (
        <div>
            <li onClick={handleClick} id="toggler" className="navbar-side-item">
                <Icon style={{ margin: 10 }} type={props.iconType} />
                {props.value}
                <Icon style={{ marginLeft: 15 }} type={icon} />
            </li>
            <UncontrolledCollapse toggler="#toggler">
                <ul id="navbar-side-item-container">
                    {props.subMenuItems.map(item => {
                        return (
                            <li className="navbar-side-item" key={item.key}>{item.value}</li>
                        )
                    })}
                </ul>
            </UncontrolledCollapse>
        </div>
    )
}

export default DropdownMenuItem;