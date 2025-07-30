import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

const EasyNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-[#22C55E] border-2 border-[#4ADE80] text-[#FFFF] font-semibold text-center min-w-28">
      <div className="text-xs font-bold">{data.label}</div>
    </div>
  );
};

const MediumNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-[#EAB308] border-2 border-[#FACC15] text-[#FFFF] font-semibold text-center min-w-28 ">
      <div className="text-xs font-bold">{data.label}</div>
    </div>
  );
};

const HardNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-[#EF4444] border-2 border-[#F87171]  text-[#FFFF] font-semibold text-center min-w-28 ">
      <div className="text-xs font-bold">{data.label}</div>
    </div>
  );
};

const RootNode = ({ data }) => {
  return (
    <div className="px-8 py-6 shadow-2xl rounded-2xl bg-[#1E40AF] border-3 border-[#60A5FA] text-[#FFFF] font-bold text-center min-w-48 ">
      <div className="text-lg font-extrabold">{data.label}</div>
      <div className="w-12 h-1 bg-blue-400 mx-auto mt-2 rounded-full"></div>
    </div>
  );
};

const CategoryNode = ({ data }) => {
  return (
    <div className="px-6 py-4 shadow-lg rounded-xl bg-[#A855F7] text-[#FFFF] font-semibold text-center min-w-32">
      <div className="text-sm font-bold">{data.label}</div>
    </div>
  );
};

const nodeTypes = {
  easy: EasyNode,
  medium: MediumNode,
  hard: HardNode,
  root: RootNode,
  category: CategoryNode,
};

const nodes = [
  // Root
  { id: '1', position: { x: 590, y: 50 }, data: { label: 'Data Structures' }, type: 'root' },
  
  // Main Categories
  { id: '2', position: { x: 180, y: 180 }, data: { label: 'Linear Structures' }, type: 'category' },
  { id: '3', position: { x: 600, y: 180 }, data: { label: 'Non-Linear Structures' }, type: 'category' },
  { id: '4', position: { x: 1000, y: 180 }, data: { label: 'Abstract Data Types' }, type: 'category' },
  
  // Linear Structures - Easy
  { id: '5', position: { x: 30, y: 300 }, data: { label: 'Arrays',time: 'Access: O(1), Insert/Delete: O(n)' }, type: 'easy'},
  { id: '6', position: { x: 150, y: 300 }, data: { label: 'Linked Lists', time: 'Access: O(n), Insert/Delete: O(1)' }, type: 'easy' },
  { id: '7', position: { x: 270, y: 300 }, data: { label: 'Stacks', time: 'Push/Pop: O(1)'  }, type: 'easy' },
  { id: '8', position: { x: 390, y: 300 }, data: { label: 'Queues', time: 'Enqueue/Dequeue: O(1)'}, type: 'easy' },
  
  // Array Variations - Eay to Medium
  { id: '9', position: { x: 30, y: 420 }, data: { label: '1D Arrays' }, type: 'easy' },
  { id: '10', position: { x: 30, y: 480 }, data: { label: '2D Arrays' }, type: 'easy' },

  // Linked List Variations - Easy to Medium
  { id: '13', position: { x: 150, y: 420 }, data: { label: 'Singly Linked' }, type: 'easy' },
  { id: '14', position: { x: 150, y: 480 }, data: { label: 'Doubly Linked', time: 'Insert/Delete: O(1), Search: O(n)' }, type: 'medium' },
  { id: '15', position: { x: 150, y: 540 }, data: { label: 'Circular Linked' }, type: 'medium' },
  
  // Queue Variations - Easy to Medium
  { id: '16', position: { x: 390, y: 420 }, data: { label: 'Simple Queue' }, type: 'easy' },
  { id: '17', position: { x: 390, y: 480 }, data: { label: 'Circular Queue' }, type: 'medium' },
  { id: '18', position: { x: 390, y: 540 }, data: { label: 'Deque', time: 'Insert/Delete (both ends): O(1)'  }, type: 'medium' },
  { id: '19', position: { x: 390, y: 600 }, data: { label: 'Priority Queue' }, type: 'medium' },
  
  // Non-Linear Structures
  { id: '20', position: { x: 520, y: 300 }, data: { label: 'Trees' }, type: 'medium' },
  { id: '21', position: { x: 650, y: 300 }, data: { label: 'Graphs' }, type: 'medium' },
  { id: '22', position: { x: 780, y: 300 }, data: { label: 'Hash Tables' }, type: 'medium' },
  
  // Tree Types - Medium to Hard
  { id: '23', position: { x: 520, y: 420 }, data: { label: 'Binary Tree' }, type: 'medium' },
  { id: '24', position: { x: 520, y: 480 }, data: { label: 'BST' }, type: 'medium' },
  { id: '25', position: { x: 520, y: 540 }, data: { label: 'AVL Tree' }, type: 'hard' },
  { id: '26', position: { x: 520, y: 600 }, data: { label: 'Red-Black Tree' }, type: 'hard' },
  
  // Graph Types - Medium to Hard
  { id: '32', position: { x: 650, y: 420 }, data: { label: 'Directed Graph' }, type: 'medium' },
  { id: '33', position: { x: 650, y: 480 }, data: { label: 'Undirected Graph' }, type: 'medium' },
  { id: '34', position: { x: 650, y: 540 }, data: { label: 'Weighted Graph' }, type: 'medium' },
  { id: '35', position: { x: 650, y: 600 }, data: { label: 'DAG' }, type: 'hard' },
  

  // Abstract Data Types
  { id: '38', position: { x: 910, y: 300 }, data: { label: 'Sets' }, type: 'medium' },
  { id: '39', position: { x: 1040, y: 300 }, data: { label: 'Maps' }, type: 'medium' },
  { id: '40', position: { x: 1170, y: 300 }, data: { label: 'Heaps' }, type: 'medium' },
  
  // Set Types - Medium
  { id: '41', position: { x: 910, y: 420 }, data: { label: 'HashSet' }, type: 'medium' },
 
  
  // Map Types - Medium
  { id: '43', position: { x: 1040, y: 420 }, data: { label: 'HashMap' }, type: 'medium' },

  
  // Heap Types - Medium to Hard
  { id: '45', position: { x: 1170, y: 420 }, data: { label: 'Min Heap' }, type: 'medium' },
  { id: '46', position: { x: 1170, y: 480 }, data: { label: 'Max Heap' }, type: 'medium' },
  { id: '47', position: { x: 1170, y: 540 }, data: { label: 'Binary Heap' }, type: 'medium' },
  
];
 // NOT YEt
const edges = [];

const MindMapTab = () => {
  return (
    <div className="w-full h-screen bg-[#F3F4F6] relative">
      
      <div className="absolute top-4 left-4 bg-[#FFFF] p-4 rounded-lg shadow-lg z-10 border border-[#E5E7EB]">
        <h3 className="font-bold text-sm mb-2">Difficulty Level</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#22C55E] rounded"></div>
            <span className="text-xs">Easy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#EAB308] rounded"></div>
            <span className="text-xs">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#EF4444] rounded"></div>
            <span className="text-xs">Hard</span>
          </div>
          </div>
          </div>
        <div className="absolute top-4 right-4 bg-[#FFFF] p-4 rounded-lg shadow-lg z-10 border border-[#E5E7EB] ">
        <h3 className="font-bold text-sm mb-2">Time Complexity Guide</h3>
       <div className="text-xs space-y-1">
         <div>O(1) - Constant</div>
         <div>O(log n) - Logarithmic</div>
         <div>O(n) - Linear</div>
        <div>O(V+E) - Vertices + Edges</div>
        <div>O(m) - String length</div>
      </div>
      </div>
      
      
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 50, includeHiddenNodes: false, maxZoom: 1 }}
        attributionPosition="bottom-left"
        className="bg-transparent"
      >
        <Background color="#e2e8f0" gap={20} size={1} />
        <Controls className="bg-[#FFFF] shadow-lg rounded-lg border border-[#E5E7EB]" />
        
         <MiniMap 
          nodeColor={(node) => {
            switch(node.type) {
              case 'easy': return '#22c55e';
              case 'medium': return '#eab308';
              case 'hard': return '#ef4444';
              case 'category': return '#8b5cf6';
              default: return '#2563eb';
            }
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
          className="bg-[#FFFF] shadow-lg rounded-lg border border-[#E5E7EB]"
        /> 

         {/* NEED TO IMPLEMENT TIME COMPLEXITY FOR EVERY DATA STRUCTURE */}

      </ReactFlow>
    </div>
    
  
  );
}
export default MindMapTab;
