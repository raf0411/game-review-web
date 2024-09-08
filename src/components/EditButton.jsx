import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditButton = ({size = 36, iconSize = 20, reviewId}) => {

  const editBtnStyle = {
    border: "none",
    borderRadius: "8px",
    width: `${size}px`,
    height: `${size}px`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#00712D",
    cursor: "pointer",
  };

  return (
    <Link to={`/edit-review/${reviewId}`} className="edit-btn" style={editBtnStyle}>
      <FaEdit color="white" size={iconSize} />
    </Link>
  );
};

export default EditButton;
