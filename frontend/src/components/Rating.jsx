import React from "react";
import PropTypes from "prop-types";
import RatingStar from "./RatingStar";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <RatingStar index={1} color={color} value={value} />
      <RatingStar index={2} color={color} value={value} />
      <RatingStar index={3} color={color} value={value} />
      <RatingStar index={4} color={color} value={value} />
      <RatingStar index={5} color={color} value={value} />
      <span>{text && text}</span>
    </div>
  );
};

Rating.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

Rating.defaultProps = {
  color: "#f8e825"
};

export default Rating;
