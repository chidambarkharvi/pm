import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

function PaginationComp({  handlePageClick}) {
  const [pageNumber, setpageNumber] = useState(0)
  const [activePage, setActivePage] = useState(1);

  const handlePaginationClick = (pageNumber) => {
    if(pageNumber >= 10){
      setpageNumber(pageNumber)
    }
    handlePageClick(pageNumber)
  };
  return (
    <Pagination>
      <Pagination.Prev onClick={() => handlePaginationClick(pageNumber-10)}  />
      <Pagination.Item  active={activePage === 0}  onClick={() => handlePaginationClick(0)}>{1}</Pagination.Item>
      <Pagination.Item active={activePage === 10}  onClick={() => handlePaginationClick(10)}>{2}</Pagination.Item>
      <Pagination.Item active={activePage === 20}  onClick={() => handlePaginationClick(20)}>{3}</Pagination.Item>
           <Pagination.Ellipsis />
           <Pagination.Ellipsis />
      <Pagination.Item active={activePage === 80}  onClick={() => handlePaginationClick(80)}>{9}</Pagination.Item>
      <Pagination.Item active={activePage === 90}  onClick={() => handlePaginationClick(90)}>{10}</Pagination.Item>
      <Pagination.Next onClick={() => handlePaginationClick(pageNumber+10)} />
    </Pagination>
  )
}

export default PaginationComp
