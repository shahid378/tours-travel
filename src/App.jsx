import React from 'react';
import Header from './component/Header';
import Content from './component/Content';
import "./Css.scss";

// cleaning up before initializing 
localStorage.clear();
const App = () => {   

    return (
        <div className="main-conatainer">
            <Header></Header>
            <Content></Content>
        </div>
    )
};

export default App;