import React from "react";
import BackButton from "./backButton";

const EnglishPage = () => {
  const steps = [
    {
      id: 1,
      title: "Check for Node.js",
      description: "Ensure you have Node.js installed using:",
      code: "node -v",
    },
    {
      id: 2,
      title: "Create a new React Project",
      description: "To create a new React project, run the following:",
      code: "npx create-react-app my-app",
    },
    {
      id: 3,
      title: "Enter the project directory",
      description: "Move into the newly created project folder using:",
      code: "cd my-app",
    },
    {
      id: 4,
      title: "Run the project",
      description: "To start the development server, use:",
      code: "npm start",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between">
          <BackButton link="/" context="go to the back screen" />
          <h1 className="text-2xl font-bold mb-6">
            Steps to Create a React Project
          </h1>
        </div>
        {steps.map((step) => (
          <div key={step.id} className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p className="mb-2">{step.description}</p>
            <pre className="bg-gray-200 p-4 rounded-md">
              <code className="text-blue-600">{step.code}</code>
            </pre>
          </div>
        ))}
        <div className="mt-6 text-center">
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 px-4 py-2 rounded-md"
          >
            more details about React
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnglishPage;
