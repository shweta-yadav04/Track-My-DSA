    import React from "react";

    const PieChart = ({ solvedCount, totalCount}) => {
    const percentage = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0;

    return (
        <div className="bg-[#FFFF] backdrop-blur-sm rounded-xl p-6 border border-[#EEEEE]">
        <h3 className="text-lg font-semibold text-[#212121] mb-4">Completion Rate</h3>

        <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                {/* Background Circle */}
                <path
                d="M18 2.0845 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
                />
                {/* Progress Arc */}
                <path
                d="M18 2.0845 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray={`${percentage}, 100`}
                strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#212121]">
                {Math.round(percentage)}%
                </span>
            </div>
            </div>
        </div>

        <div className="mt-4 space-y-2 text-sm text-[#575c64]">
            <div className="flex justify-between">
            <span>Solved</span>
            <span className="font-semibold text-[#38a169]">{solvedCount}</span>
            </div>
            <div className="flex justify-between">
            <span>Remaining</span>
            <span className="font-semibold text-[#E53935]">{totalCount - solvedCount}</span>
            </div>
            <div className="flex justify-between">
            <span>Total</span>
            <span className="font-semibold text-[#212121]">{totalCount}</span>
            </div>
        </div>
        </div>
    );
    };

    export default PieChart;
   