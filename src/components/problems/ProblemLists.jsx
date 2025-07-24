import { useState } from "react";
import React from "react";
import ProblemCard from "./ProblemCard";
import { ArrowLeft, Search } from "lucide-react";

const ProblemLists = ({ currentProblems, selectedTopic, handleBackToTopics, handleStatusChange, getStatusIcon, getDifficultyColor }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [difficultyFilter, setDifficultyFilter] = useState("all");

    // Filter problems based on search term and difficulty
    const filteredProblems = currentProblems.filter(problem => {
        const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             problem.description?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDifficulty = difficultyFilter === "all" || 
                                 problem.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
        return matchesSearch && matchesDifficulty;
    });

    return (
        <div className="p-3">
             
             <h2 className="text-xl font-bold mb-4 ml-6">Problems on {selectedTopic}</h2>
             {/* Navigation and Controls */}
            <div className="flex flex-wrap flex-row space-y-3 mb-7 gap-4">
                <div className="flex items-center mr-6 space-x-3">
                    <button onClick={handleBackToTopics} className="flex items-center space-x-2">
                        <ArrowLeft className="w-5 h-5 mr-1 cursor-pointer" />
                        <span className="underline text-[#1D4ED8] cursor-pointer">Back To Topics</span>
                    </button>
                </div>

                
                
                {/* Search Bar and Filter */}
                <div className="flex flex-row flex-wrap sm:flex-row gap-3 justify-evenly">
                    {/* Search Bar */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-4 text-[#9E9E9E]" />
                        <input
                            type="text"
                            placeholder="Search problems..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-100 pl-10 pr-4 py-2 border border-[#9E9E9E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2748a4] focus:border-transparent"
                        />
                        
                       
                    </div>
                     {/* Difficulty Filter */}
                     <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-[#616161] whitespace-nowrap mr-1">Difficulty:</span>
                        <select
                            value={difficultyFilter}
                            onChange={(e) => setDifficultyFilter(e.target.value)}
                            className="px-3 py-2 border border-[#9E9E9E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent bg-[#FFFFFF]"
                        >
                            <option value="all">All</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    
                    
                </div>
            </div>

            {/* Problems List */}
            <div className="space-y-4">
                {filteredProblems.length > 0 ? (
                    filteredProblems.map(problem => (
                        <ProblemCard 
                            key={problem.id}
                            problem={problem}
                            handleStatusChange={handleStatusChange}
                            getStatusIcon={getStatusIcon}
                            getDifficultyColor={getDifficultyColor}
                        />
                    ))
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        <p>No problems found matching your criteria.</p>
                        <p className="text-sm mt-2">Try adjusting your search term or difficulty filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProblemLists;