import React from "react";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Spinner from "./Spinner";

const ReviewLists = () => {
  const [gameReviews, setGameReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGameReviews = async () => {
      const apiUrl = "/api/game_reviews";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setGameReviews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGameReviews();
  }, []);

  return (
    <div className="review-lists">
      {isLoading ? (
        <Spinner />
      ) : (
        gameReviews.map((g, i) => (
          <ReviewCard key={i} gameReview={g} />
        ))
      )}
    </div>
  );
};

export default ReviewLists;
