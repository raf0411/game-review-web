import React from "react";
import { FaFileImage } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddReviewPage = ({}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [game, setGame] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [gameCover, setGameCover] = useState("");

  const addReview = async (newReview) => {
    const res = await fetch("/api/game_reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });
    return;
  };

  const submitReview = (e) => {
    e.preventDefault();

    const newReview = {
      title,
      game,
      genre,
      rating,
      review,
      gameCover,
    };
    addReview(newReview);
    return navigate("/");
  };

  const imgStyle = {
    width: "300px",
    aspectRatio: '1',
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
          accept="image/png, image/jpeg, image/jpg"
          className="img-input"
          onChange={onCoverChange}
        />
        <img src={gameCover} style={imgStyle} />
        <FaFileImage size={64} style={imgIconStyle} />
      </label>

      <form onSubmit={submitReview}>
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviewPage;
