import React from "react";
import { useNavigate } from "react-router-dom";

import "./UseRoutesErrorPage.css";

const UseRoutesErrorPage = () => {
  const naviate = useNavigate();
  return (
    <div className="error-container">
      <button onClick={() => naviate(-1)}>Go Back</button>
      <h1>
        Error:{" "}
        <code>
          useRoutes() may be used only in the context of a &lt;Router&gt;
          component
        </code>
      </h1>

      <div className="solution-section">
        <h2>Reason:</h2>
        <p>
          This error occurs when <code>useRoutes</code> or the{" "}
          <code>&lt;Routes&gt;</code> component is used outside the{" "}
          <code>&lt;BrowserRouter&gt;</code> component from React Router. All
          components relying on routes must be wrapped within a{" "}
          <code>&lt;BrowserRouter&gt;</code>.
        </p>

        <h2>Solution:</h2>
        <p>
          To fix this issue, ensure that your <code>&lt;Routes&gt;</code>{" "}
          component is inside a <code>&lt;BrowserRouter&gt;</code>. Here's an
          example of the correct implementation:
        </p>

        <pre>
          <code>
            {`
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
`}
          </code>
        </pre>

        <h2>React Router Warning:</h2>
        <p>
          If you're using React Router v6.15 or newer, you might see a warning
          about future flags. You can add future flags like this:
        </p>
        <pre>
          <code>
            {`
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default UseRoutesErrorPage;
