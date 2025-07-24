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
  { id: '5', position: { x: 30, y: 300 }, data: { label: 'Arrays' }, type: 'easy' },
  { id: '6', position: { x: 150, y: 300 }, data: { label: 'Linked Lists' }, type: 'easy' },
  { id: '7', position: { x: 270, y: 300 }, data: { label: 'Stacks' }, type: 'easy' },
  { id: '8', position: { x: 390, y: 300 }, data: { label: 'Queues' }, type: 'easy' },
  
  // Array Variations - Eay to Medium
  { id: '9', position: { x: 30, y: 420 }, data: { label: '1D Arrays' }, type: 'easy' },
  { id: '10', position: { x: 30, y: 480 }, data: { label: '2D Arrays' }, type: 'easy' },

  // Linked List Variations - Easy to Medium
  { id: '13', position: { x: 150, y: 420 }, data: { label: 'Singly Linked' }, type: 'easy' },
  { id: '14', position: { x: 150, y: 480 }, data: { label: 'Doubly Linked' }, type: 'medium' },
  { id: '15', position: { x: 150, y: 540 }, data: { label: 'Circular Linked' }, type: 'medium' },
  
  // Queue Variations - Easy to Medium
  { id: '16', position: { x: 390, y: 420 }, data: { label: 'Simple Queue' }, type: 'easy' },
  { id: '17', position: { x: 390, y: 480 }, data: { label: 'Circular Queue' }, type: 'medium' },
  { id: '18', position: { x: 390, y: 540 }, data: { label: 'Deque' }, type: 'medium' },
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
  { id: '27', position: { x: 520, y: 660 }, data: { label: 'B-Tree' }, type: 'hard' },
  { id: '28', position: { x: 520, y: 720 }, data: { label: 'B+ Tree' }, type: 'hard' },
  { id: '29', position: { x: 520, y: 780 }, data: { label: 'Segment Tree' }, type: 'hard' },
  { id: '30', position: { x: 520, y: 840 }, data: { label: 'Fenwick Tree' }, type: 'hard' },
  { id: '31', position: { x: 520, y: 900 }, data: { label: 'Trie' }, type: 'medium' },
  
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
 // NOT YET
const edges = [];

const MindMapTab = () => {
  return (
    <div className="w-full h-screen bg-[#F3F4F6] relative">
      {/* Legend */}
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
        
        {/* <MiniMap 
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
        /> */}

         {/* NEED TO IMPLEMENT TIME COMPLEXITY FOR EVERY DATA STRUCTURE */}

      </ReactFlow>
    </div>
  );
};

// export default MindMapTab;
// import React from 'react';
// import ReactFlow, { Background, Controls } from 'reactflow';
// import 'reactflow/dist/style.css';

// const EasyNode = ({ data }) => {
//   return (
//     <div className="px-4 py-3 shadow-lg rounded-xl bg-[#22C55E] border-2 border-[#4ADE80] text-[#FFFF] font-semibold text-center min-w-28">
//       <div className="text-xs font-bold">{data.label}</div>
//     </div>
//   );
// };

// const MediumNode = ({ data }) => {
//   return (
//     <div className="px-4 py-3 shadow-lg rounded-xl bg-[#deb438] border-2 border-[#FACC15] text-white font-semibold text-center min-w-28">
//       <div className="text-xs font-bold">{data.label}</div>
//     </div>
//   );
// };

// const HardNode = ({ data }) => {
//   return (
//     <div className="px-4 py-3 shadow-lg rounded-xl bg-[#EF4444] border-2 border-[#F87171] text-white font-semibold text-center min-w-28">
//       <div className="text-xs font-bold">{data.label}</div>
//     </div>
//   );
// };

// const RootNode = ({ data }) => {
//   return (
//     <div className="px-8 py-6 shadow-2xl rounded-2xl bg-[#1E40AF] border-3 border-[#60A5FA] text-white font-bold text-center min-w-48">
//       <div className="text-lg font-extrabold">{data.label}</div>
//       <div className="w-12 h-1 bg-blue-400 mx-auto mt-2 rounded-full"></div>
//     </div>
//   );
// };

// const CategoryNode = ({ data }) => {
//   return (
//     <div className="px-6 py-4 shadow-lg rounded-xl bg-[#A855F7] text-white font-semibold text-center min-w-32">
//       <div className="text-sm font-bold">{data.label}</div>
//     </div>
//   );
// };

// const nodeTypes = {
//   easy: EasyNode,
//   medium: MediumNode,
//   hard: HardNode,
//   root: RootNode,
//   category: CategoryNode,
// };

// const nodes = [
//   // Root
//   { id: '1', position: { x: 590, y: 50 }, data: { label: 'Data Structures' }, type: 'root' },
  
//   // Main Categories
//   { id: '2', position: { x: 180, y: 180 }, data: { label: 'Linear Structures' }, type: 'category' },
//   { id: '3', position: { x: 600, y: 180 }, data: { label: 'Non-Linear Structures' }, type: 'category' },
//   { id: '4', position: { x: 1000, y: 180 }, data: { label: 'Abstract Data Types' }, type: 'category' },
  
//   // Linear Structures - Easy
//   { id: '5', position: { x: 30, y: 300 }, data: { label: 'Arrays' }, type: 'easy' },
//   { id: '6', position: { x: 150, y: 300 }, data: { label: 'Linked Lists' }, type: 'easy' },
//   { id: '7', position: { x: 270, y: 300 }, data: { label: 'Stacks' }, type: 'easy' },
//   { id: '8', position: { x: 390, y: 300 }, data: { label: 'Queues' }, type: 'easy' },
  
//   // Array Variations - Easy to Medium
//   { id: '9', position: { x: 30, y: 420 }, data: { label: '1D Arrays' }, type: 'easy' },
//   { id: '10', position: { x: 30, y: 480 }, data: { label: '2D Arrays' }, type: 'easy' },

//   // Linked List Variations - Easy to Medium
//   { id: '13', position: { x: 150, y: 420 }, data: { label: 'Singly Linked' }, type: 'easy' },
//   { id: '14', position: { x: 150, y: 480 }, data: { label: 'Doubly Linked' }, type: 'medium' },
//   { id: '15', position: { x: 150, y: 540 }, data: { label: 'Circular Linked' }, type: 'medium' },
  
//   // Queue Variations - Easy to Medium
//   { id: '16', position: { x: 390, y: 420 }, data: { label: 'Simple Queue' }, type: 'easy' },
//   { id: '17', position: { x: 390, y: 480 }, data: { label: 'Circular Queue' }, type: 'medium' },
//   { id: '18', position: { x: 390, y: 540 }, data: { label: 'Deque' }, type: 'medium' },
//   { id: '19', position: { x: 390, y: 600 }, data: { label: 'Priority Queue' }, type: 'medium' },
  
//   // Non-Linear Structures
//   { id: '20', position: { x: 520, y: 300 }, data: { label: 'Trees' }, type: 'medium' },
//   { id: '21', position: { x: 650, y: 300 }, data: { label: 'Graphs' }, type: 'medium' },
//   { id: '22', position: { x: 780, y: 300 }, data: { label: 'Hash Tables' }, type: 'medium' },
  
//   // Tree Types - Medium to Hard
//   { id: '23', position: { x: 520, y: 420 }, data: { label: 'Binary Tree' }, type: 'medium' },
//   { id: '24', position: { x: 520, y: 480 }, data: { label: 'BST' }, type: 'medium' },
//   { id: '25', position: { x: 520, y: 540 }, data: { label: 'AVL Tree' }, type: 'hard' },
//   { id: '26', position: { x: 520, y: 600 }, data: { label: 'Red-Black Tree' }, type: 'hard' },
  
//   // Graph Types - Medium to Hard
//   { id: '32', position: { x: 650, y: 420 }, data: { label: 'Directed Graph' }, type: 'medium' },
//   { id: '33', position: { x: 650, y: 480 }, data: { label: 'Undirected Graph' }, type: 'medium' },
//   { id: '34', position: { x: 650, y: 540 }, data: { label: 'Weighted Graph' }, type: 'medium' },
//   { id: '35', position: { x: 650, y: 600 }, data: { label: 'DAG' }, type: 'hard' },

//   // Abstract Data Types
//   { id: '38', position: { x: 910, y: 300 }, data: { label: 'Sets' }, type: 'medium' },
//   { id: '39', position: { x: 1040, y: 300 }, data: { label: 'Maps' }, type: 'medium' },
//   { id: '40', position: { x: 1170, y: 300 }, data: { label: 'Heaps' }, type: 'medium' },
  
//   // Set Types - Medium
//   { id: '41', position: { x: 910, y: 420 }, data: { label: 'HashSet' }, type: 'medium' },
  
//   // Map Types - Medium
//   { id: '43', position: { x: 1040, y: 420 }, data: { label: 'HashMap' }, type: 'medium' },
  
//   // Heap Types - Medium to Hard
//   { id: '45', position: { x: 1170, y: 420 }, data: { label: 'Min Heap' }, type: 'medium' },
//   { id: '46', position: { x: 1170, y: 480 }, data: { label: 'Max Heap' }, type: 'medium' },
//   { id: '47', position: { x: 1170, y: 540 }, data: { label: 'Binary Heap' }, type: 'medium' },
// ];

// const edges = [
//   // Root to main categories
//   { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
//   { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', animated: true },
//   { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', animated: true },
  
//   // Linear Structures
//   { id: 'e2-5', source: '2', target: '5', label: 'Access: O(1), Search: O(n)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
//   { id: 'e2-6', source: '2', target: '6', label: 'Access: O(n), Insert: O(1)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
//   { id: 'e2-7', source: '2', target: '7', label: 'Push/Pop: O(1)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
//   { id: 'e2-8', source: '2', target: '8', label: 'Enqueue/Dequeue: O(1)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
  
//   // Array variations
//   { id: 'e5-9', source: '5', target: '9', label: 'O(1)', labelStyle: { fontSize: '9px' } },
//   { id: 'e5-10', source: '5', target: '10', label: 'O(1)', labelStyle: { fontSize: '9px' } },
  
//   // Linked List variations
//   { id: 'e6-13', source: '6', target: '13', label: 'O(n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e6-14', source: '6', target: '14', label: 'O(n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e6-15', source: '6', target: '15', label: 'O(n)', labelStyle: { fontSize: '9px' } },
  
//   // Queue variations
//   { id: 'e8-16', source: '8', target: '16', label: 'O(1)', labelStyle: { fontSize: '9px' } },
//   { id: 'e8-17', source: '8', target: '17', label: 'O(1)', labelStyle: { fontSize: '9px' } },
//   { id: 'e8-18', source: '8', target: '18', label: 'O(1)', labelStyle: { fontSize: '9px' } },
//   { id: 'e8-19', source: '8', target: '19', label: 'Insert: O(log n)', labelStyle: { fontSize: '9px' } },
  
//   // Non-Linear Structures
//   { id: 'e3-20', source: '3', target: '20', label: 'Search: O(log n) - O(n)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
//   { id: 'e3-21', source: '3', target: '21', label: 'Search: O(V+E)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
//   { id: 'e3-22', source: '3', target: '22', label: 'Average: O(1)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
  
//   // Tree variations
//   { id: 'e20-23', source: '20', target: '23', label: 'O(n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e20-24', source: '20', target: '24', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e20-25', source: '20', target: '25', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e20-26', source: '20', target: '26', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e20-27', source: '20', target: '27', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e20-28', source: '20', target: '28', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e20-29', source: '20', target: '29', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e20-30', source: '20', target: '30', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e20-31', source: '20', target: '31', label: 'O(m)', labelStyle: { fontSize: '9px' } },
  
//   // Graph variations
//   { id: 'e21-32', source: '21', target: '32', label: 'O(V+E)', labelStyle: { fontSize: '9px' } },
//   { id: 'e21-33', source: '21', target: '33', label: 'O(V+E)', labelStyle: { fontSize: '9px' } },
//   { id: 'e21-34', source: '21', target: '34', label: 'O(V+E)', labelStyle: { fontSize: '9px' } },
//   { id: 'e21-35', source: '21', target: '35', label: 'O(V+E)', labelStyle: { fontSize: '9px' } },
  
//   // Abstract Data Types
//   { id: 'e4-38', source: '4', target: '38', label: 'Average: O(1)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
//   { id: 'e4-39', source: '4', target: '39', label: 'Average: O(1)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
//   { id: 'e4-40', source: '4', target: '40', label: 'Insert: O(log n)', labelStyle: { fontSize: '10px', fontWeight: 'bold' } },
  
//   // Set variations
//   { id: 'e38-41', source: '38', target: '41', label: 'O(1)', labelStyle: { fontSize: '9px' } },
  
//   // Map variations
//   { id: 'e39-43', source: '39', target: '43', label: 'O(1)', labelStyle: { fontSize: '9px' } },
  
//   // Heap variations
//   { id: 'e40-45', source: '40', target: '45', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e40-46', source: '40', target: '46', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
//   { id: 'e40-47', source: '40', target: '47', label: 'O(log n)', labelStyle: { fontSize: '9px' } },
// ];

// const MindMapTab = () => {
//   return (
//     <div className="w-full h-screen bg-[#F3F4F6] relative">
//       {/* Legend */}
//       <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg z-10 border border-[#E5E7EB]">
//         <h3 className="font-bold text-sm mb-2">Difficulty Level</h3>
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-[#22C55E] rounded"></div>
//             <span className="text-xs">Easy</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-[#EAB308] rounded"></div>
//             <span className="text-xs">Medium</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-4 h-4 bg-[#EF4444] rounded"></div>
//             <span className="text-xs">Hard</span>
//           </div>
//         </div>
//       </div>

//       {/* Time Complexity Legend */}
//       <div className="absolute top-4 right-4 bg-[#FFFF] p-4 rounded-lg shadow-lg z-10 border border-[#E5E7EB] ">
//         <h3 className="font-bold text-sm mb-2">Time Complexity Guide</h3>
//         <div className="text-xs space-y-1">
//           <div>O(1) - Constant</div>
//           <div>O(log n) - Logarithmic</div>
//           <div>O(n) - Linear</div>
//           <div>O(V+E) - Vertices + Edges</div>
//           <div>O(m) - String length</div>
//         </div>
//       </div>
      
//       <ReactFlow 
//         nodes={nodes} 
//         edges={edges} 
//         nodeTypes={nodeTypes}
//         fitView
//         fitViewOptions={{ padding: 80, includeHiddenNodes: false, maxZoom: 0.8 }}
//         attributionPosition="bottom-left"
//         className="bg-transparent"
//         defaultEdgeOptions={{
//           style: { strokeWidth: 2, stroke: '#6366f1' },
//           markerEnd: { type: 'arrowclosed', color: '#6366f1' },
//         }}
//       >
//         <Background color="#e2e8f0" gap={20} size={1} />
//         <Controls className="bg-[#FFFF] shadow-lg rounded-lg border border-[#E5E7EB]" />
        
//       </ReactFlow>
//     </div>
//   );
// };

export default MindMapTab;