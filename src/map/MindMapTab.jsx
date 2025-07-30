import React from 'react';
import { X } from 'lucide-react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import { useState } from 'react';
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

// Helper
const getDifficultyColor = (type) => {
  switch (type) {
    case 'easy': return '#22C55E';
    case 'medium': return '#EAB308';
    case 'hard': return '#EF4444';
    case 'category': return '#A855F7';
    case 'root': return '#1E40AF';
    default: return '#6B7280';
  }
};
const nodes = [
  // Root
  { id: '1', position: { x: 590, y: 50 }, data: { label: 'Data Structures' }, type: 'root' },
  
  // Main Categories
  { id: '2', position: { x: 180, y: 180 }, data: { label: 'Linear Structures', time: 'Data elements arranged in sequential order' }, type: 'category' },
  { id: '3', position: { x: 600, y: 180 }, data: { label: 'Non-Linear Structures', time: 'Data elements arranged in hierarchical or networked fashion' }, type: 'category' },
  { id: '4', position: { x: 1000, y: 180 }, data: { label: 'Abstract Data Types', time: 'High-level data structures with defined operations' }, type: 'category' },
  
  // Linear Structures - Easy
  { id: '5', position: { x: 30, y: 300 }, data: { label: 'Arrays',time: 'Access: O(1), Insert/Delete: O(n)' }, type: 'easy'},
  { id: '6', position: { x: 150, y: 300 }, data: { label: 'Linked Lists', time: 'Access: O(n), Insert/Delete: O(1)' }, type: 'easy' },
  { id: '7', position: { x: 270, y: 300 }, data: { label: 'Stacks', time: 'Push/Pop: O(1)'  }, type: 'easy' },
  { id: '8', position: { x: 390, y: 300 }, data: { label: 'Queues', time: 'Enqueue/Dequeue: O(1)'}, type: 'easy' },
  
  // Array Variations - Eay to Medium
  { id: '9', position: { x: 30, y: 420 }, data: { label: '1D Arrays',time: 'Access: O(1), Insert/Delete: O(n)' }, type: 'easy' },
  { id: '10', position: { x: 30, y: 480 }, data: { label: '2D Arrays', time: 'Access: O(1), Insert/Delete: O(n²)' }, type: 'easy' },

  // Linked List Variations - Easy to Medium
  { id: '13', position: { x: 150, y: 420 }, data: { label: 'Singly Linked',time: 'Access: O(n), Insert/Delete: O(1)' }, type: 'easy' },
  { id: '14', position: { x: 150, y: 480 }, data: { label: 'Doubly Linked', time: 'Insert/Delete: O(1), Search: O(n)' }, type: 'medium' },
  { id: '15', position: { x: 150, y: 540 }, data: { label: 'Circular Linked',time: 'Access: O(n), Insert/Delete: O(1)' }, type: 'medium' },
  
  // Queue Variations - Easy to Medium
  { id: '16', position: { x: 390, y: 420 }, data: { label: 'Simple Queue',time: 'Enqueue: O(1), Dequeue: O(n)' }, type: 'easy' },
  { id: '17', position: { x: 390, y: 480 }, data: { label: 'Circular Queue',time: 'Enqueue/Dequeue: O(1)' }, type: 'medium' },
  { id: '18', position: { x: 390, y: 540 }, data: { label: 'Deque', time: 'Insert/Delete (both ends): O(1)'  }, type: 'medium' },
  { id: '19', position: { x: 390, y: 600 }, data: { label: 'Priority Queue',time: 'Insert: O(log n), Remove Max/Min: O(log n)' }, type: 'medium' },
  
  // Non-Linear Structures
  { id: '20', position: { x: 520, y: 300 }, data: { label: 'Trees',time: 'Search/Insert/Delete: O(n)' }, type: 'medium' },
  { id: '21', position: { x: 650, y: 300 }, data: { label: 'Graphs', time: 'Add Edge: O(1), Search: O(V + E)' }, type: 'medium' },
  { id: '22', position: { x: 780, y: 300 }, data: { label: 'Hash Tables',time: 'Search/Insert/Delete: O(1) avg, O(n) worst' }, type: 'medium' },
  
  // Tree Types - Medium to Hard
  { id: '23', position: { x: 520, y: 420 }, data: { label: 'Binary Tree',  time: 'Search/Insert/Delete: O(n)' }, type: 'medium' },
  { id: '24', position: { x: 520, y: 480 }, data: { label: 'BST', time: 'Search/Insert/Delete: O(log sets, map, hashet, min heap, max heapn)' }, type: 'medium' },
  { id: '25', position: { x: 520, y: 540 }, data: { label: 'AVL Tree', time: 'Search/Insert/Delete: O(log n)' }, type: 'hard' },
  { id: '26', position: { x: 520, y: 600 }, data: { label: 'Red-Black Tree', time: 'Search/Insert/Delete: O(log n)' }, type: 'hard' },
  { id: '27', position: { x: 520, y: 660 }, data: { label: 'Trie', time: 'Insert: O(log n), Extract: O(log n)' }, type: 'hard' },
  
  // Graph Types - Medium to Hard
  { id: '32', position: { x: 650, y: 420 }, data: { label: 'Directed Graph', time: 'DFS/BFS: O(V + E)' }, type: 'medium' },
  { id: '33', position: { x: 650, y: 480 }, data: { label: 'Undirected Graph', time: 'DFS/BFS: O(V + E)' }, type: 'medium' },
  { id: '34', position: { x: 650, y: 540 }, data: { label: 'Weighted Graph',time: 'Dijkstra: O(E + V log V)' }, type: 'medium' },
  { id: '35', position: { x: 650, y: 600 }, data: { label: 'DAG',time: 'Toposort: O(V + E)' }, type: 'hard' },
  

  // Abstract Data Types
  { id: '38', position: { x: 910, y: 300 }, data: { label: 'Sets' }, type: 'medium' },
  { id: '39', position: { x: 1040, y: 300 }, data: { label: 'Maps' }, type: 'medium' },
  { id: '40', position: { x: 1170, y: 300 }, data: { label: 'Heaps', time: 'Insert: O(log n), Extract: O(log n)' }, type: 'medium' },
  
  // Set Types - Mediumm
  { id: '41', position: { x: 910, y: 420 }, data: { label: 'HashSet',time: 'Insert/Delete/Search: O(1) avg, O(n) worst'}, type: 'medium' },
 
  
  // Map Types - Medium
  { id: '43', position: { x: 1040, y: 420 }, data: { label: 'HashMap', time: 'Get/Put/Delete: O(1) avg, O(n) worst' }, type: 'medium' },

  
  // Heap Types - Medium to Hard
  { id: '45', position: { x: 1170, y: 420 }, data: { label: 'Min Heap', time: 'Insert/Delete: O(log n), Min: O(1)' }, type: 'medium' },
  { id: '46', position: { x: 1170, y: 480 }, data: { label: 'Max Heap', time: 'Insert/Delete: O(log n), Max: O(1)' }, type: 'medium' },
  { id: '47', position: { x: 1170, y: 540 }, data: { label: 'Binary Heap' }, type: 'medium' },
  
];
 // NOT YEt
const edges = [];

const MindMapTab = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const closePanel = () => {
    setSelectedNode(null);
  };

  return (
    
    <div className="w-full h-screen bg-[#F3F4F6] relative">
      
      <div className="absolute top-4 left-4 bg-[#FFFF] p-4 rounded-lg shadow-lg z-10 border border-[#E5E7EB]">
        <h3 className="font-bold text-sm mb-2">Difficulty Level</h3>
        <div className="flex flex-col gap-2 font-semibold">
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
          <p className='mt-2'>-------------------------</p>
      
        <h3 className="font-bold text-sm mb-2 mt-2">Time Complexity Guide</h3>
       <div className="text-xs space-y-1 font-semibold ">
         <div>O(1) - Constant</div>
         <div>O(log n) - Logarithmic</div>
         <div>O(n) - Linear</div>
        <div>O(V+E) - Vertices + Edges</div>
        <div>O(m) - String length</div>
      </div>
      </div>
      
     {/* Info Panel on Node Click */}
     {selectedNode && (
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg border-2 border-gray-200 w-80 z-20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: getDifficultyColor(selectedNode.type) }}></div>
              <h3 className="text-sm font-bold text-gray-800">{selectedNode.data.label}</h3>
            </div>
            <button onClick={closePanel} className="text-gray-500 hover:text-gray-700 text-lg font-bold"><X/></button>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="text-xs font-semibold text-gray-600 mb-1">Time Complexity:</h4>
              <p className="text-xs text-gray-800 bg-gray-50 p-2 rounded font-mono">
                {selectedNode.data.time || 'Time complexity information not available'}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
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
