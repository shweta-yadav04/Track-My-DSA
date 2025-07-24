// import React from "react";
// import { Target, BarChart3, Share2 } from "lucide-react";
// import { Link } from "react-router-dom";

// const NavigationTabs = ({ activeTab, setActiveTab }) => {
//   const tabs = [
//     { id: "problems", label: "Problems", icon: Target, path: "/problems" },
//     { id: "stats", label: "Stats", icon: BarChart3, path: "/stats" },
//     { id: "mindmap", label: "Mind Map", icon: Share2, path: "/mindmap" },
//   ];

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <div className="sticky top-0 z-50 bg-[#ffffff] border-b border-[#E0E0E0] shadow-sm">
//       <div className="flex w-full">
//         {tabs.map((tab) => {
//           const Icon = tab.icon;
//           const isActive = activeTab === tab.id;

//           return (
//             <Link
//               key={tab.id}
//               to={tab.path}
//               onClick={() => handleTabClick(tab.id)}
//               className={`flex-1 text-center py-3 px-2 text-sm font-medium transition-all duration-200
//                 flex flex-col items-center justify-center
//                 ${
//                   isActive
//                     ? "text-[#1469be] border-b-2 border-[#7d2fd0] bg-[#7bc2f5]"
//                     : "text-[#aaa5a5] hover:text-[#0D47A1] hover:bg-[#F5F5F5]"
//                 }`}
//             >
//               <Icon className="w-5 h-5 mb-1" />
//               <span>{tab.label}</span>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default NavigationTabs;

import React from "react";
import { Target, BarChart3, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "problems", label: "Problems", icon: Target, path: "/problems" },
    { id: "stats", label: "Stats", icon: BarChart3, path: "/stats" },
    { id: "mindmap", label: "Mind Map", icon: Share2, path: "/mindmap" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="sticky top-[95px] z-40 px-0.6 py-1">
      <div className="flex w-full bg-[#A855F7] text-[#FFFF] rounded-xl shadow-lg border border-[#A855F7] overflow-hidden">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <Link
              key={tab.id}  
              to={tab.path}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-1 text-center py-2 px-2 text-sm font-medium transition-all duration-300
                flex flex-col items-center justify-center
                ${
                  isActive
                    ? "bg-[#7E22CE] text-[#FFFF] shadow-md"
                    : "hover:bg-[#9333EA] opacity-80 text-[#FFFF]"
                }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationTabs;
