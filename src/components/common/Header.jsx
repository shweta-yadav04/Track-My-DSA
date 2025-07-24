import React from "react";
import { Target } from 'lucide-react';

const Header =({}) =>
{  return(
    <div className="bg-[#FFFFFF] overflow-hidden opacity-90 backdrop:blur-sm border-b border-[#6B7280] sticky top-0 z-400">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '0.5rem'}}>
                <div className="flex items-center space-x-4 gap-3">
                    <div style={{background: 'linear-gradient(to right, #2563EB, #9333EA)',padding: '0.5rem',  borderRadius: '0.5rem'}}>
                      <Target className="w-10 h-10 text-[#FFFFFF]"/>
                    </div>
           
                    <div>
                        <h1 style={{fontSize: '2.0rem', fontWeight: 'bold', background: 'linear-gradient(to right, #2563EB, #9333EA)', WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}> DSA Tracker</h1>
                        <p className="text-sm text-[#4B5563] font-bold," > Master Data Structures and Algorithm</p>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
   
    ) 
}
export default Header;