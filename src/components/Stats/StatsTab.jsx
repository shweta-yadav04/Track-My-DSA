import PieChart from '../common/PieChart';
import React from "react";
import DifficultyChart from '../common/DifficultyChart';
const StatsTab = ({ problem }) => {
  const topics = [...new Set(problem.map(p => p.topic))];
  const solvedCount = problem.filter(p => p.status?.toLowerCase() === 'solved').length;
  const totalCount = problem.length;
  const easySolvedCount = problem.filter(p => p.difficulty === 'Easy' && p.status?.toLowerCase()==='solved').length;
  const mediumSolvedCount = problem.filter(p => p.difficulty === 'Medium' && p.status?.toLowerCase()==='solved').length;
  const hardSolvedCount = problem.filter(p => p.difficulty === 'Hard' && p.status?.toLowerCase()==='solved').length;
  return (
    <div className="flex gap-5 mt-4">
      <div className="flex-1">
        <div className="bg-[#ffffffcc] backdrop-blur-sm rounded-xl p-6 border border-[#d1d5db] ml-4">
          <h3 className="text-lg font-semibold text-[#212121] mb-2">Topic Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {topics.map(topic => {
              const topicProblems = problem.filter(p => p.topic === topic);
              const solvedCount = topicProblems.filter(p => p.status?.toLowerCase() === 'solved').length;
              const totalCount = topicProblems.length;
              const completionRate = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0;

              return (
                <div key={topic} className="flex justify-between items-center p-3 bg-[#f9fafb] rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-[#111827]">{topic}</span>
                    <div className="text-xs text-[#6b7280]">
                      {solvedCount}/{totalCount} solved
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-[#2563eb]">
                      {Math.round(completionRate)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
         
        </div>

      </div>

      <div className="w-170 space-y-6">
     
       <PieChart
        solvedCount={solvedCount}
        totalCount={totalCount}
       />
      
       <div>
        <DifficultyChart
          easySolvedCount = {easySolvedCount}
          mediumSolvedCount = {mediumSolvedCount}
          hardSolvedCount = {hardSolvedCount}
         
        />
      </div> 
      </div>
    </div>
  );
};

export default StatsTab;
