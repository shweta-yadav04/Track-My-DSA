import React from "react";
const DifficultyChart = ({easySolvedCount, mediumSolvedCount, hardSolvedCount}) =>
{
    return(
    <div className="bg-[#FFFF] opacity-80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mt-5">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Difficulty Distribution</h3>
  
    <div className="space-y-4">
      {(() => {
        const total = easySolvedCount+ mediumSolvedCount+ hardSolvedCount;
  
        const easyPercent = (easySolvedCount / total) * 100 || 0;
        const mediumPercent = (mediumSolvedCount / total) * 100 || 0;
        const hardPercent = (hardSolvedCount / total) * 100 || 0;
  
        return (
          <>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Easy
                </span>
                <span className="text-gray-900 font-semibold">{easySolvedCount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: `${easyPercent}%` }}></div>
              </div>
            </div>
  
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  Medium
                </span>
                <span className="text-gray-900 font-semibold">{mediumSolvedCount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full" style={{ width: `${mediumPercent}%` }}></div>
              </div>
            </div>
  
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  Hard
                </span>
                <span className="text-gray-900 font-semibold">{hardSolvedCount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-red-500 h-3 rounded-full" style={{ width: `${hardPercent}%` }}></div>
              </div>
            </div>
          </>
        );
      })()}
    </div>
  </div>
    )
}
export default DifficultyChart;