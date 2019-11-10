import React from 'react';

const Section = (props) => {
    return (
        <div id={props.id} className={props.className}>
            {props.children}
        </div>
    )
}

export default Section;