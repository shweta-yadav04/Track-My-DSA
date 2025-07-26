// import React from "react";

// const StatsTab = ({ problem }) => {
//   const topics = [...new Set(problem.map(p => p.topic))];

//   return (
//     <div className="flex gap-8 mt-4">
//       <div className="flex-1">
//         <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-300 ml-4">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Topic Distribution</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {topics.map(topic => {
//               const topicProblems = problem.filter(p => p.topic === topic);
//               const solvedCount = topicProblems.filter(p => p.status?.toLowerCase() === 'solved').length;
//               const totalCount = topicProblems.length;
//               const completionRate = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0;

//               return (
//                 <div key={topic} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                   <div>
//                     <span className="text-sm font-medium text-gray-900">{topic}</span>
//                     <div className="text-xs text-gray-500">
//                       {solvedCount}/{totalCount} solved
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <span className="text-sm font-semibold text-blue-600">
//                       {Math.round(completionRate)}%
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="w-200 space-y-6" />
//       </div>
//     </div>
//   );
// };

// export default StatsTab;

import React from "react";

const StatsTab = ({ problem }) => {
  const topics = [...new Set(problem.map(p => p.topic))];

  return (
    <div className="flex gap-8 mt-4">
      <div className="flex-1">
        <div className="bg-[#ffffffcc] backdrop-blur-sm rounded-xl p-6 border border-[#d1d5db] ml-4">
          <h3 className="text-lg font-semibold text-[#212121] mb-2">Topic Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="w-80 space-y-6">
      </div>
    </div>
  );
};

export default StatsTab;
