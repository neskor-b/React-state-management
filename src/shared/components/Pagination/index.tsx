import React from 'react';

// components
import ReactPaginate from 'react-paginate';


const Pagination = () => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={value => console.log(value)}
            pageRangeDisplayed={5}
            pageCount={100}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination;