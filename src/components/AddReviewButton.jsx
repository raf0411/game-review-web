import React from "react";
import { Link } from "react-router-dom";

const AddReviewButton = () => {
  return (
    <Link to="/add-review" className="add-review-btn">
      Add Review
    </Link>
  );
};

export default AddReviewButton;
