import React from "react";

const WaysToJoin = () => {
  return (
    <div className="text-center py-12 bg-gray-50">
      
      <h2 className="text-2xl font-semibold italic mb-8 text-gray-700">
        Ways to Join us
      </h2>

      
      <div className="flex flex-wrap justify-center gap-8">
        {/* Box 1 */}
        <div className="w-48 h-64 flex items-center justify-center bg-purple-500 text-white text-lg font-semibold italic rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <p>
            Join As <br />
            <b>Individual</b>
          </p>
        </div>

        
        <div className="w-48 h-64 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold italic rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <p>
            Join As <br />
            <b>Partner</b>
          </p>
        </div>

        
        <div className="w-48 h-64 flex items-center justify-center bg-red-500 text-white text-lg font-semibold italic rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
          <p>
            Join As <br />
            <b>Teacher, etc...</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaysToJoin;
