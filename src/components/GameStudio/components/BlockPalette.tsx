import React from 'react';
import { FiMousePointer, FiMove, FiRotateCcw, FiPlay, FiPause } from 'react-icons/fi';

const BlockPalette = () => {
  const categories = [
    {
      name: 'Events',
      color: 'bg-yellow-100 border-yellow-300',
      blocks: [
        { name: 'When Game Starts', icon: FiPlay },
        { name: 'When Clicked', icon: FiMousePointer },
        { name: 'When Key Pressed', icon: 'K' },
      ]
    },
    {
      name: 'Motion',
      color: 'bg-blue-100 border-blue-300',
      blocks: [
        { name: 'Move', icon: FiMove },
        { name: 'Turn', icon: FiRotateCcw },
        { name: 'Go to Position', icon: '→' },
      ]
    },
    {
      name: 'Control',
      color: 'bg-purple-100 border-purple-300',
      blocks: [
        { name: 'If', icon: '?' },
        { name: 'Repeat', icon: '⟲' },
        { name: 'Wait', icon: FiPause },
      ]
    },
    {
      name: 'Variables',
      color: 'bg-green-100 border-green-300',
      blocks: [
        { name: 'Set Variable', icon: '=' },
        { name: 'Change Variable', icon: '±' },
        { name: 'Show Variable', icon: '👁' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${category.color.replace('border-', 'bg-').replace('-300', '-500')}`} />
            {category.name}
          </h3>
          <div className="space-y-2">
            {category.blocks.map((block, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-2 cursor-grab active:cursor-grabbing transition-all hover:shadow-sm ${category.color}`}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('text/plain', JSON.stringify({
                    type: 'block',
                    category: category.name,
                    name: block.name
                  }));
                }}
              >
                <div className="flex items-center space-x-2">
                  {typeof block.icon === 'function' ? (
                    <block.icon className="w-4 h-4 text-gray-600" />
                  ) : (
                    <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-gray-600">
                      {block.icon}
                    </span>
                  )}
                  <span className="text-sm font-medium text-gray-700">{block.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockPalette;
