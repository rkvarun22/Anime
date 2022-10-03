import React, { useEffect,useState } from "react";
import ReactPaginate from 'react-paginate';
import "./searchResult.css";
import 'font-awesome/css/font-awesome.min.css';

function SearchResult(props) {

  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(15);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(props.animeData.slice(itemOffset, endOffset));
    let pageCount = Math.ceil(props.animeData.length/itemsPerPage);
    setPageCount(pageCount)
  }, [props.animeData]);

  const handlePageClick =(event)=> {
  const newOffset = (event.selected * itemsPerPage) % props.animeData.length;
  setItemOffset(newOffset);
  const endOffset = newOffset + itemsPerPage;
  setCurrentItems(props.animeData.slice(newOffset, endOffset));
  }

  return (
    <div className="search-results">
      {currentItems&&currentItems.map((data, index) => {
        return (
          <div className="item">
            <div className="image">
              <img src={data.images.jpg.image_url} />
            </div>
            <div className="name">{data.name}
            <div className="nicknames">
            {data&&data.nicknames.map((nickname,i) => {
             return <div className="nickname">{nickname}</div>
            })}
            </div>
            </div>
            <div className="favorites">{data.favorites}<i class="fa fa-heart" aria-hidden="true" ></i></div>
            <div className="goToUrl"><a href={data.url} target="_blank"><i class="fa fa-arrow-right fa-3x" aria-hidden="true"></i>
</a></div>
          </div>
        );
      })}
      <ReactPaginate
        nextLabel="NEXT"
        onPageChange={(event)=>handlePageClick(event)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="PREVIOUS"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default SearchResult;
