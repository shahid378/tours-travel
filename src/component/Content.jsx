import React from 'react';
import data from './Data';
import Packages from './Packages';

const Content = () => {
    return (
        <div className="packages-container">
            <Packages data={data }/> 
        </div>
    );
}

export default Content;
