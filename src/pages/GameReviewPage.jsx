import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GameReviewPage = ({ }) => {
  const gameReview = useLoaderData();
  const [isCover, setCover] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (gameReview.gameCover != "") {
      setCover(true);
    }
  }, []);

  const deleteReview = async (id) => {
    const res = await fetch(`/api/game_reviews/${id}`, {
      method: 'DELETE',
    });
    
    return;
  }

  const onClickDeleteReview = (id) => {
    const confirm = window.confirm('Do you really want to delete this review?');

    if (!confirm) {
      return
    }
    deleteReview(id);
    return navigate('/');
  }

  return (
    <section className="game-review-page">
      <header>
        <img
          src={isCover ? `${gameReview.gameCover}`: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg'}
          alt="Game Cover"
          className="game-cover"
        />

        <div className="btn-container">
          <EditButton size={72} iconSize={32} reviewId={gameReview.id}/>
          <DeleteButton onClickDeleteReview={() => onClickDeleteReview(gameReview.id)} size={72} iconSize={32} />
        </div>
      </header>

      <section className="game-review-details">
        <h1>{gameReview.title}</h1>
        <h2>{gameReview.game}</h2>
        <h3>({gameReview.genre})</h3>

        <p>{gameReview.review}</p>
      </section>

      <Link to="/" className="back-button">
        Back
      </Link>
    </section>
  );
};

const gameReviewLoader = async ({ params }) => {
  const res = await fetch(`/api/game_reviews/${params.id}`);
  const data = await res.json();
  return data;
};

export { GameReviewPage as default, gameReviewLoader };
