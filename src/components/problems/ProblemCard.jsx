import React from "react";
import { ExternalLink, Clock,AlertTriangle,CheckCircle } from "lucide-react";

const ProblemCard = ({ problem, handleStatusChange, getStatusIcon, getDifficultyColor }) => {
  return( 
          <div className="bg-[#FFFFFF] mt-2 backdrop-blur-md rounded-xl p-6 border border-[#FFFFFF] hover:bg-[#FFFFFF] transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1 ">
                  {getStatusIcon(problem.status)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 ">
                      <h3 className="text-lg font-bold text-[#000000] ml-2">{problem.title}</h3>
                      <a
                        href={problem.leetcodeLink}
                        target="_blank"
                        className="text-[#60A5FA] hover:text-[#93C5FD] cursor-pointer transition-colors duration-200"
                      >
                        <ExternalLink className="ml-1.5 w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 ml-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mr-2 border ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                      <span className="text-sm font-bold bg-[#DEDFE4] text-[#393A3F] border-[#232429] rounded-full px-2 py-1 mr-2">
                        {problem.topic}
                      </span>
                      <span className="text-sm text-[#828388] flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Avg: {problem.AverageTime}min
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 gap-3">
                  {problem.status === "Unsolved" && (
                    <>
                      <button
                        onClick={() => handleStatusChange(problem.id, "Attempted")}
                        className="px-4 py-2 bg-[#CA8A04] text-[#FFFFFF] rounded-lg hover:bg-[#A16207] transition-colors text-sm font-medium cursor-pointer"
                      >
                        Mark Attempted
                      </button>
                      <button
                        onClick={() => handleStatusChange(problem.id, "Solved")}
                        className="px-4 py-2 bg-[#16A34A] text-[#FFFFFF] rounded-lg hover:bg-[#15803D] transition-colors text-sm font-medium cursor-pointer"
                      >
                        Mark Solved
                      </button>
                    </>
                  )}
                  
                  {problem.status === "Attempted" && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-[#FCD34D] bg-[#713F12] opacity-80 px-3 py-1 rounded border border-[#EAB308]">
                    <span className="flex flex-row"><AlertTriangle className="w-3 h-3 mr-1" /> Attempted</span>
                      </span>
                      <button
                        onClick={() => handleStatusChange(problem.id, "Solved")}
                        className="px-4 py-2 bg-[#16A34A] ml-2 text-[#FFFF] rounded-lg hover:bg-[#15803D] transition-colors text-sm font-medium cursor-pointer"
                      >
                        Mark Solved
                      </button>
                      <button
                        onClick={() => handleStatusChange(problem.id, "Unsolved")}
                        className="px-3 py-1 bg-[#4B5563] text-[#FFFFFF] ml-2 rounded hover:bg-[#374151] transition-colors text-sm cursor-pointer"
                      >
                        Reset
                      </button>
                    </div>
                  )}
                  
                  {problem.status === "Solved" && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-[#86EFAC] bg-[#14532D] opacity-80 px-3 py-1 rounded border border-[#22C55E]">
                      <span className="flex flex-row"><CheckCircle className="w-3 h-3 mr-1" />  Solved</span>
                      </span>
                      <button
                        onClick={() => handleStatusChange(problem.id, "Unsolved")}
                        className="px-3 py-1 bg-[#4B5563] text-white rounded ml-2 hover:bg-[#374151] transition-colors text-sm cursor-pointer"
                      >
                        Reset
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
       
   
  );
};

;

export default ProblemCard;

