import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LanguageSelection from "./components/LanguageSelection";
import ArabicPage from "./components/ArabicPage";
import EnglishPage from "./components/EnglishPage";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LanguageSelection />} />
        <Route path="/ar" element={<ArabicPage />} />
        <Route path="/en" element={<EnglishPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
