import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ link, context }) => {
  return (
    <Link
      to={link}
      className="border border-blue-400 px-4 py-2 rounded-md items-center h-10"
    >
      {context}
    </Link>
  );
};

export default BackButton;
