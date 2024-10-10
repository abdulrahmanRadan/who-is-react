import React from "react";
import { Link } from "react-router-dom";

const LanguageSelection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
