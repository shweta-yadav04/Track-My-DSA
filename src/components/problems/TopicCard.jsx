import React from "react";
import { Clock } from "lucide-react";
const TopicCard = ({
  topic,
  easyCount,
  mediumCount,
  hardCount,
  totalCount,
  avgTime,
  completionRate,
  handleClick
}) => {
  return (
    <div
      onClick={() => handleClick(topic)}
      className="bg-[#FFFFFF] opacity-80 backdrop-blur-sm rounded-xl p-6 border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
    >
      <div className="text-center space-y-2">
        {/* Topic Name */}
        <h3 className="text-lg font-bold text-[#111827]">{topic}</h3>

        {/* Easy / Medium / Hard Breakdown */}
        <div className="flex justify-center gap-4 text-sm text-[#4B5563]">
          <div className="text-[#16A34A] font-bold">Easy: {easyCount}</div>
          <div className="text-[#CA8A04] font-bold">Medium: {mediumCount}</div>
          <div className="text-[#DC2626] font-bold">Hard: {hardCount}</div>
        </div>

        {/* Total Problems */}
        <div className="text-xl font-bold text-[#2563EB]">{totalCount} Problems</div>

        {/* Average Time */}
        <div className="flex justify-center items-center space-x-2 text-[#424448] text-sm">
        <Clock className="w-3 h-3 mr-2" />
          <span className="mr-2">Avg Time:</span>
          <span className="font-medium text-[#3B82F6]">{avgTime} mins</span>
        </div>

        {/* Progress Bar */}
        
        <div
         style={{
        width: `${completionRate}%`,
          background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
         height: '8px',
         borderRadius: '9999px',
         transition: 'all 300ms',
  }}
></div>


        {/* Completion % */}
        <p className="text-xs text-[#565e6d]">{Math.round(completionRate)}% Complete</p>
      </div>
    </div>
   
  );
};

export default TopicCard;
