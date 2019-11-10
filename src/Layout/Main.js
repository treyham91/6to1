import React from 'react';
import MenuBar from './MenuBar/MenuBar';

const Main = (props) => {
    return (
        <React.Fragment>
            <MenuBar />
            {props.children}
        </React.Fragment>
    )
}

export default Main;