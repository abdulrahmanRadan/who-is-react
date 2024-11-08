import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LanguageSelection = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">
          اختر لغتك / Select Your Language
        </h1>
        <div className="flex justify-around">
          <Link
            to="/ar"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            العربية
          </Link>
          <Link
            to="/en"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            English
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
