import BreakIcon from "./BreakIcon";
import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { cn } from "../../lib/utils";
import "./Pagination.css";

function Pagination({ className, pageCount }) {
  const handleClick = (clickEvent) => {
    console.log(clickEvent);
  };
  const handlePageChange = (selectedItem) => {
    console.log(selectedItem);
  };

  return (
    <ReactPaginate
      breakClassName="pagination__break"
      breakLabel={<BreakIcon />}
      breakLinkClassName="pagination__link"
      className={cn("pagination", className)}
      marginPagesDisplayed={1}
      nextClassName="pagination__next"
      nextLabel={<NextIcon />}
      nextLinkClassName="pagination__link"
      pageClassName="pagination__item"
      pageCount={pageCount}
      pageLinkClassName="pagination__link"
      pageRangeDisplayed={3}
      previousClassName="pagination__previous"
      previousLabel={<PreviousIcon />}
      previousLinkClassName="pagination__link"
      renderOnZeroPageCount={null}
      onClick={handleClick}
      onPageChange={handlePageChange}
    />
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  pageCount: PropTypes.number.isRequired,
};

export default Pagination;
