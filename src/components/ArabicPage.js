import React from "react";
import BackButton from "./backButton";

const ArabicPage = () => {
  const steps = [
    {
      id: 1,
      title: "التحقق من Node.js",
      description: "تحقق من أنك قمت بتثبيت Node.js على جهازك باستخدام:",
      code: "node -v",
    },
    {
      id: 2,
      title: "إنشاء مشروع React جديد",
      description: "لإنشاء مشروع React جديد، استخدم الأمر التالي:",
      code: "npx create-react-app my-app",
    },
    {
      id: 3,
      title: "الدخول إلى مجلد المشروع",
      description: "قم بالدخول إلى مجلد المشروع الجديد باستخدام:",
      code: "cd my-app",
    },
    {
      id: 4,
      title: "تشغيل المشروع",
      description: "لتشغيل التطبيق، استخدم:",
      code: "npm start",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-right">
        <div className="flex justify-between">
          <BackButton link="/" context="العودة إلى الصفحة الرئيسية" />
          <h1 className="text-2xl font-bold mb-6">خطوات إنشاء مشروع React</h1>
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
            مزيد من التفاصيل حول React
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArabicPage;
