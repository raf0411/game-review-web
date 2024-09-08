import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const ReviewCard = ({ gameReview }) => {
  const [isAddedPic, setIsAddedPic] = useState(false);

  useEffect(() => {
    if (gameReview.gameCover != "") {
      setIsAddedPic(true);
    }
  }, []);

  const deleteReview = async (id) => {
    const res = await fetch(`/api/game_reviews/${id}`, {
      method: 'DELETE',
    });
    window.location.reload();
    return;
  }

  const onClickDeleteReview = (id) => {
    const confirm = window.confirm("Do you really want to delete this review?");

    if (!confirm) {
      return;
    }
    deleteReview(id);
    return;
  };

  return (
    <div className="review-card">
      <div className="container">
        <div className="img-container">
          {!isAddedPic ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg"
              alt="Game Image"
              className="game-img"
            />
          ) : (
            <img
              src={gameReview.gameCover}
              alt="Game Image"
              className="game-img"
            />
          )}
        </div>

        <div className="text-container">
          <h3 className="game-title">{gameReview.title}</h3>
          <h3 className="game-name">Game : {gameReview.game}</h3>
          <p className="game-review-content">
            {gameReview.review.substring(0, 200) + "..."}
          </p>

          <Link to={`game-review/${gameReview.id}`} className="read-more-btn">
            Read More
          </Link>
        </div>

        <div className="btn-container">
          <EditButton reviewId={gameReview.id}/>
          <DeleteButton
            onClickDeleteReview={() => onClickDeleteReview(gameReview.id)}
          />
        </div>
      </div>
    </div>
  );
};

const deleteLoader = async ({ params }) => {
  const res = await fetch(`/api/game_reviews/${params.id}`);
  const data = await res.json();
  return data;
};

export {ReviewCard as default, deleteLoader};
