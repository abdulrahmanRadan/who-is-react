import React from "react";
import { Link } from "react-router-dom";
import "./ErrorLinksPage.css";

const ErrorLinksPage = () => {
  return (
    <div className="error-links-container">
      <h1 className="title">Error Pages</h1>
      <ul>
        <li>
          <Link className="links" to="/errors/use-routes-error">
            Go to UseRoutes Error Page
          </Link>
        </li>
        <li>
          <Link className="links" to="/errors/future-flag-warning">
            Go to Future Flag Warning Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ErrorLinksPage;
