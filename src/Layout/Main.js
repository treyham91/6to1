import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import Footer from './Footer';

const Main = (props) => {
    return (
        <React.Fragment>
            <MenuBar />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Main;