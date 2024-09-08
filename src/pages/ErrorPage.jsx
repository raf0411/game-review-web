import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>ERROR 404</h1>
      <p>Sorry, this page is not available 🥲</p>

      <Link to={'/'} className="back-to-home">Back To Home</Link>
    </div>
  );
};

export default ErrorPage;
