import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string
};

Meta.defaultProps = {
  title: "Welcome To ProShop | Home",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electronics"
};

export default Meta;
