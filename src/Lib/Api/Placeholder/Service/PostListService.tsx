import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postSliceActions } from '../../../Store/Post/Post.slice';

const Pagination = ({ pageChangeHandler, totalRows, rowsPerPage, currentPage }: any) => {
  // Calculating max number of pages
  const noOfPages = Math.ceil(totalRows / rowsPerPage);

  // Creating an array with length equal to no.of pages
  const pagesArr = [...new Array(noOfPages)];
  //console.log(pagesArr);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const [pageFirstRecord, setPageFirstRecord] = useState(1);
  const [pageLastRecord, setPageLastRecord] = useState(rowsPerPage);
  const dispatch = useDispatch();

  // Onclick handlers for the butons
  const onNextPage = () => pageChangeHandler(currentPage + 1);
  const onPrevPage = () => pageChangeHandler(currentPage - 1);
  const onPageSelect = (page: number) => pageChangeHandler(page);
   

  useEffect(() => {
    if (noOfPages === currentPage) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [noOfPages, currentPage]);

  // To set the starting index of the page
  useEffect(() => {
    const skipFactor = (currentPage - 1) * rowsPerPage;

    setPageFirstRecord(skipFactor + 1);
  }, [currentPage, rowsPerPage]);

  // To set the last index of the page
  useEffect(() => {
    const count = pageFirstRecord + rowsPerPage;
    setPageLastRecord(count > totalRows ? totalRows : count - 1);
  }, [pageFirstRecord, rowsPerPage, totalRows]);

  return (
    <>
      {noOfPages > 1 ? (
        <div className='new'>
          <div className='pageInfo'>
            Showing {pageFirstRecord} - {pageLastRecord} of {totalRows}
          </div>
          <div className='pagebuttons'>
            <button className='pageBtn' onClick={onPrevPage} disabled={!canGoBack}>
              &#8249;
            </button>
            {pagesArr.map((num, index) => (
              <button onClick={() =>  onPageSelect(index + 1)}>{index + 1}</button>
            ))}
            <button className='table' onClick={onNextPage} disabled={!canGoNext}>
              &#8250;
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
