import React from "react";
import PropTypes from "prop-types";

const RatingStar = ({ index, color, value }) => {
  return (
    <span>
      <i
        style={{ color }}
        className={
          value >= index
            ? "fas fa-star"
            : value >= index - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      />
    </span>
  );
};

RatingStar.propTypes = {
  color: PropTypes.string,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

RatingStar.defaultProps = {
  color: "#f8e825"
};

export default RatingStar;
