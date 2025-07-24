import React, { useEffect } from "react";
import { useState } from "react";
import Header from './common/Header';
import NavigationTabs from './common/NavigationTabs';
import TopicsGrid from "./problems/TopicsGrid";
import { problemsData } from "../data/problemsData";
import { Circle, CheckCircle } from "lucide-react";
import ProblemLists from "./problems/ProblemLists";
import MindMapTab from "../map/MindMapTab";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DSATracker = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {topic} = useParams();

    const getActiveTab = (pathname) =>{
        if (pathname.startsWith('/problems')) return 'problems';
        if (pathname.startsWith('/stats')) return 'stats';
        if (pathname.startsWith('/mindmap')) return 'mindmap';
        return 'problems';
    }


    const [activeTab, setActiveTab] = useState(() => getActiveTab(location.pathname));
    const [selectedTopic, setSelectedTopic] = useState(topic || null);
    const [problem, setProblems] = useState(problemsData); 
    
    //updating state whenever the url changes
    useEffect( () =>{
        const newTab = getActiveTab(location.pathname);
        setActiveTab(newTab);
        // setSelectedTopic(topic || null);
       // Only update selectedTopic if URL has a topic param
        if (topic !== undefined) {
        setSelectedTopic(topic);
  }

    },[location.pathname, topic]);
    
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, [location.pathname]);
      
    // Handle tab changes
    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
        navigate(`/${newTab}`);
    };


     
    const handleTopicClick = (topicName) => {
        setSelectedTopic(topicName);
        navigate(`/problems/${encodeURIComponent(topicName)}`);
    };
    // const handleTopicClick = (topicName) => {
    //     console.log(problem.topic); 
    //     setSelectedTopic(topicName);
    // };

    const handleBackToTopics = () => {
        setSelectedTopic(null);
        navigate('/problems');
    };

    const handleStatusChange = (problemId, newStatus) => {
        setProblems(prev => prev.map(p => 
            p.id === problemId ? { ...p, status: newStatus } : p
        ));
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'Solved': 
                return <CheckCircle className="w-5 h-5 text-[#48bb78]" />;
            case 'Attempted':
                return <Circle className="w-5 h-5 text-[#f59e0b] fill-[#F59E08]" />;
            default:
                return <Circle className="w-5 h-5 text-[#94a3b8]" />;
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Easy': return 'bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]';
            case 'Medium': return 'bg-[#FEF9C3] text-[#854D0E] border-[#FEF08A]';
            case 'Hard': return 'bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const total = problem.length;
    const solved = problem.filter(p => p.status.toLowerCase() === 'solved').length;

    const stats = { total, solved };
    console.log("DSATracker loaded");
    return (
        <div style={{minHeight: '100vh',minWidth:'100vh', background: 'linear-gradient(to bottom right, #f8fafc, #eff6ff, #eef2ff)'}}>
            <Header />

            <NavigationTabs activeTab={activeTab} setActiveTab={handleTabChange }/>
            
            {activeTab === 'problems' && !selectedTopic && (
                <TopicsGrid handleTopicClick={handleTopicClick} problems={problem}/> 
            )}

            {activeTab === 'problems' && selectedTopic && (
                <ProblemLists
                    currentProblems={problem.filter(p => p.topic === selectedTopic)} 
                    selectedTopic={selectedTopic}
                    handleBackToTopics={handleBackToTopics}
                    handleStatusChange={handleStatusChange}          
                    getStatusIcon={getStatusIcon}                
                    getDifficultyColor={getDifficultyColor} 
                />
            )}
            
            {activeTab === 'stats' && <StatsTab />}
            {activeTab === 'mindmap' && <MindMapTab/>}
        </div>
    );
};

export default DSATracker;