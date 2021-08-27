import React from 'react';
import paris from "../assests/pics/paris.jpg"
import { useState } from 'react';
//import DataList from './Data';

const Package = (data) => {
    //const arr = [data];
    console.log(typeof data);
    //visibility, setvisibility, data
    const [visibility, setvisibility] = useState(true);
    //show more and less function
    const ReadMore = (children) => {
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

    //main data

    if (visibility === true) {
        return (
            <div className="package">
                <div className="image-container">
                    <img src={paris} alt="Paris" />
                </div>
                <div className="package-detail">
                    <div className="package-title">
                        <h3>{ data[0].title}</h3>
                    </div>
                    <div className="price">
                        <h4>Rs 80,000</h4>
                    </div>
                </div>
                <div className="package-info">
                    <ReadMore>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </ReadMore>
                </div>
                <div className="interest-btn">
                    <button className="hide-btn"
                        onClick={() => { setvisibility(false) }}
                    >
                        Not Interested
                    </button>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

// const Packages = () => {
//     const [visibility, setvisibility] = useState(true);
//     return (
//         <Package data={DataList} visibility={visibility} setvisibility={setvisibility} />
//     );
// }
// export default Packages;
export default Package;