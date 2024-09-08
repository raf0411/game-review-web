import React from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { FaFileImage } from "react-icons/fa";

const EditReviewPage = () => {
  const gameReview = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState(gameReview.title);
  const [game, setGame] = useState(gameReview.game);
  const [genre, setGenre] = useState(gameReview.genre);
  const [rating, setRating] = useState(gameReview.rating);
  const [review, setReview] = useState(gameReview.review);
  const [gameCover, setGameCover] = useState(gameReview.gameCover);

  const editReview = async (newReview) => {
    const res = await fetch(`/api/game_reviews/${newReview.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });
    return;
  };

  const submitEditedReview = (e) => {
    e.preventDefault();

    const newReview = {
      id,
      title,
      game,
      genre,
      rating,
      review,
      gameCover,
    };
    editReview(newReview);
    return navigate("/");
  };

  const imgStyle = {
    width: "300px",
    aspectRatio: "1",
    padding: ".7rem",
    borderRadius: "24px",
    display: gameCover === "" ? "none" : "block",
  };

  const imgIconStyle = {
    display: gameCover === "" ? "block" : "none",
  };

  const onCoverChange = (e) => {
    const data = new FileReader();
    data.addEventListener('load', () => {
      setGameCover(data.result);
    });
    
    data.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="add-review-container">
      <label htmlFor="cover" className="add-img-container">
        <input
          type="file"
          name="cover"
          id="cover"
          className="img-input"
          accept="image/png, image/jpeg, image/jpg"
          onChange={onCoverChange}
        />
        <img src={gameCover} style={imgStyle} />
        <FaFileImage size={64} style={imgIconStyle} />
      </label>

      <form onSubmit={submitEditedReview}>
        <div className="container">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            required
            id="title"
            name="title"
            type="text"
            className="title-input"
            placeholder="e.g., I Hate JRPGs!"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="game">Game</label>
          <input
            value={game}
            required
            id="game"
            name="game"
            type="text"
            className="game-input"
            placeholder="e.g., Grand Theft Auto V"
            onChange={(e) => setGame(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="genre">Genre</label>
          <input
            value={genre}
            required
            id="genre"
            name="genre"
            type="text"
            className="genre-input"
            placeholder="e.g., RPG"
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="rating">Rating</label>
          <input
            value={rating}
            required
            id="rating"
            name="rating"
            type="number"
            className="rating-input"
            placeholder="e.g., 5"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="review">Review</label>
          <textarea
            value={review}
            required
            id="review"
            name="review"
            type="text"
            className="review-input"
            placeholder="Add Review Here..."
            onChange={(e) => setReview(e.target.value)}
          />
        </div>

        <div className="btn-container">
          <button className="submit-btn" type="submit">
            Edit Review
          </button>
        </div>
      </form>
    </div>
  );
};

const gameReviewLoader = async ({ params }) => {
  const res = await fetch(`/api/game_reviews/${params.id}`);
  const data = await res.json();
  return data;
};

export default EditReviewPage;
