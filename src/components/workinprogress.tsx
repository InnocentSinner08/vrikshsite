import React from "react";
import Link from "next/link";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        🚧 We're Working on This Page 🚧
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Thank you for your patience while we build something amazing!
      </p>
      <div className="mt-8 text-gray-700 text-sm">
        <p>Estimated launch: <strong>Coming Soon</strong></p>
      </div>
    </div>
  );
};

export default UnderConstruction;
