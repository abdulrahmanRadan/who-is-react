import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LanguageSelection from "./components/LanguageSelection";
import ArabicPage from "./components/ArabicPage";
import EnglishPage from "./components/EnglishPage";
import NotFound from "./components/NotFound";
import ErrorLinksPage from "./react_Errors/ErrorLinksPage";
import UseRoutesErrorPage from "./react_Errors/UseRoutesError/UseRoutesError";
import FutureFlagWarningPage from "./react_Errors/FutureFlagWarningPage/FutureFlagWarningPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/ar" element={<ArabicPage />} />
        <Route path="/en" element={<EnglishPage />} />
        <Route path="/errors">
          <Route index element={<ErrorLinksPage />} />
          <Route path="use-routes-error" element={<UseRoutesErrorPage />} />
          <Route
            path="future-flag-warning"
            element={<FutureFlagWarningPage />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
