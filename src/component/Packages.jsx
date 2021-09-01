import React from "react";
import { useState } from "react";
import ReactPaginate from 'react-paginate';

//readmore readless function for description paragraph
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

//package data

const Packages = (props) => {
    const setVisibility = (i) => {
        packages[i].visible = "false";
        setPackages(packages);
    }
    const [packages, setPackages] = useState(props.data);
    const [pageNumber, setPageNumber] = useState(0);

    const packagePerPage = 5;
    const pagesVisited = pageNumber * packagePerPage;

    const displayPackages = packages
        .filter(mypackage => mypackage.visible === true)
        .slice(pagesVisited, pagesVisited + packagePerPage)
        .map((tourPackage,i) => {
            return (
                <div className="package">
                    <div className="image-container">
                        <img src={tourPackage.dp} alt="Paris" />
                    </div>
                    <div className="package-detail">
                        <div className="package-title">
                            <h4>{tourPackage.title}</h4>
                        </div>
                        <div className="price">
                            <h4>{tourPackage.price}</h4>
                        </div>
                    </div>
                    <div className="package-info">
                        <ReadMore>{tourPackage.description}</ReadMore>
                    </div>
                    <div className="interest-btn">
                        <button
                            className="hide-btn"
                            onClick={() => {
                                setVisibility(i);
                            }}
                        >
                            {tourPackage.action}
                        </button>
                    </div>
                </div>
            )
        })

    const pageCount = Math.ceil(packages.length / packagePerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    };

    return (
        <div className="packages-per-page">
            {displayPackages}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginateButtons"}
                previousLinkClassName={"prevBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive" }
            />
        </div>
    )
};
export default Packages;
