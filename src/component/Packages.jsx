import React from "react";
import { useState } from "react";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

const Package = (props) => {
    const [visibility, setvisibility] = useState(true);
    const mypackage = props.data;
   
    return mypackage.slice()
        .map((dataObject, i) => {
            return (                
                <div className="package">
                    <div className="image-container">
                        <img src={dataObject.dp} alt="Paris" />
                    </div>
                    <div className="package-detail">
                        <div className="package-title">
                            <h4>{dataObject.title}</h4>
                        </div>
                        <div className="price">
                            <h4>{dataObject.price}</h4>
                        </div>
                    </div>
                    <div className="package-info">
                        <ReadMore>{dataObject.description}</ReadMore>
                    </div>
                    <div className="interest-btn">
                        <button
                            className="hide-btn"
                            onClick={() => {
                                setvisibility(false);
                            }}
                        >
                            {dataObject.action}
                        </button>
                    </div>
                </div>
            );
        }
        );
};
export default Package;
