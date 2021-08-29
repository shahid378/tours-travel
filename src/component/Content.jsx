import React from 'react';
import data from './Data';
import Package from './Packages';

const Content = () => {    
    return (
        <div className="package-container">
            <Package data={data }/> 
        </div>
    );
}

export default Content;
