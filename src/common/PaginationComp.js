import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

function PaginationComp({  handlePageClick}) {
  const [pageNumber, setpageNumber] = useState(10)
  const handlePaginationClick = (pageNumber) => {
    if(pageNumber >= 10){
      setpageNumber(pageNumber)
      console.log(pageNumber,"pageNumber")
    }
    handlePageClick(pageNumber)
  };
  return (
    <Pagination>
      <Pagination.Prev onClick={() => handlePaginationClick(pageNumber-10)}  />
      <Pagination.Item active onClick={() => handlePaginationClick(10)}>{1}</Pagination.Item>
      <Pagination.Item onClick={() => handlePaginationClick(20)}>{2}</Pagination.Item>
      <Pagination.Item onClick={() => handlePaginationClick(30)}>{3}</Pagination.Item>
           <Pagination.Ellipsis />
           <Pagination.Ellipsis />
      <Pagination.Item onClick={() => handlePaginationClick(90)}>{9}</Pagination.Item>
      <Pagination.Item onClick={() => handlePaginationClick(100)}>{10}</Pagination.Item>
      <Pagination.Next onClick={() => handlePaginationClick(pageNumber+10)} />
    </Pagination>
  )
}

export default PaginationComp
