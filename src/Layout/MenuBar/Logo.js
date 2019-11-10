import React from 'react';


function logo(props) {
    return (
        <div className={props.className}>
            <img src={props.image} className={props.imageStyle} loaded={props.loaded} alt="Cannot be display"></img>
        </div>
    )
}

export default logo;