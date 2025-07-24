import React from "react";
import { useNavigate } from "react-router-dom";
import TopicCard from "./TopicCard";

const TopicsGrid = ({problems, handleTopicClick }) => {
  const navigate = useNavigate();

  const topics = [...new Set(problems.map(p => p.topic))];
    
  const handleTopicCardClick = (topicName) => {

    if (handleTopicClick) {
      handleTopicClick(topicName);
    }
    
  };
      return (
        <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-3">
          {topics.map((topic) => {
            const topicProblems = problems.filter(p => p.topic === topic);
            const totalCount = topicProblems.length;
            const solvedCount = topicProblems.filter(p => p.status.toLowerCase() === 'solved').length;
            const easyCount = topicProblems.filter(p => p.difficulty === 'Easy').length;
            const mediumCount = topicProblems.filter(p => p.difficulty === 'Medium').length;
            const hardCount = topicProblems.filter(p => p.difficulty === 'Hard').length;
            const totalTime = topicProblems.reduce((acc, cur) => acc + (cur.AverageTime || 0), 0);
            const avgTime = totalCount > 0 ? Math.round(totalTime / totalCount) : 0;
    
            const completionRate = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0;

           return(   <TopicCard
            key={topic}
            topic={topic}
            easyCount={easyCount}
            mediumCount={mediumCount}
            hardCount={hardCount}
            totalCount={totalCount}
            avgTime={avgTime}
            completionRate={completionRate}
            handleClick={handleTopicClick}
          />)
          })}
          </div>
      )
    };
export default TopicsGrid;
    
