import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin, keyword }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map(x => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

Paginate.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  isAdmin: PropTypes.bool,
  keyword: PropTypes.string
};

Paginate.defaultProps = {
  isAdmin: false,
  keyword: ""
};

export default Paginate;
