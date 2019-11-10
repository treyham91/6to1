import React, { useState, useEffect, useRef } from 'react';
import '../static/styles/dashboard-login.css';

const Test = (props) => {

    const { firstCount, secondCount } = props;
    const prevCount = usePrevious({ firstCount, secondCount });
    useEffect(() => {
        if (prevCount.firstCount !== secondCount) {
            return firstCount = 1;
        }

        if (prevCount.firstCount > secondCount) {
            secondCount = 1;
            firstCount += 1;
        }

        else {
            return;
        }
    })

    return (
        <div id="form-container">
            {firstCount} {secondCount}
        </div>
    )
}

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default Test;