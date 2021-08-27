import React from 'react';
import DataList from './Data';
import Package from './Packages';

const Content = () => {
    // const counter = (props) => {
    //     for (let i = 0; i < 5; i++) {
    //         return props;
    //     }
    // }
    return (
        <div className="package-container">
            <Package data={DataList }/>
        </div>
    );
}

export default Content;
