import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteButton = ({size = 36, iconSize = 20, id, onClickDeleteReview, gameReviewId}) => {
  const deleteBtnStyle = {
    border: "none",
    borderRadius: "8px",
    width: `${size}px`,
    height: `${size}px`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#800000",
    cursor: "pointer",
  };

  return (
    <button onClick={() => onClickDeleteReview(gameReviewId)} className="delete-btn" style={deleteBtnStyle}>
      <FaTrash color="white" size={iconSize} />
    </button>
  );
};

export {DeleteButton as default};