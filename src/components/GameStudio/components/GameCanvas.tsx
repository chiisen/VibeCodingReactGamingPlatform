import React, { useState, useRef } from 'react';

interface Block {
  id: string;
  type: string;
  category: string;
  name: string;
  x: number;
  y: number;
}

const GameCanvas = ({ isPlaying, gameCode }: { isPlaying: boolean; gameCode: any[] }) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    try {
      const blockData = JSON.parse(e.dataTransfer.getData('text/plain'));
      const newBlock: Block = {
        id: Date.now().toString(),
        type: blockData.type,
        category: blockData.category,
        name: blockData.name,
        x,
        y
      };

      setBlocks(prev => [...prev, newBlock]);
    } catch (error) {
      console.error('Failed to parse dropped block data:', error);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleBlockClick = (blockId: string) => {
    console.log('Block clicked:', blockId);
  };

  const handleBlockDelete = (blockId: string) => {
    setBlocks(prev => prev.filter(block => block.id !== blockId));
  };

  return (
    <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
      <div
        ref={canvasRef}
        className="w-full h-full relative bg-gray-50"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* Canvas Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Render Blocks */}
        {blocks.map((block) => (
          <div
            key={block.id}
            className="absolute cursor-pointer select-none"
            style={{
              left: block.x,
              top: block.y,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => handleBlockClick(block.id)}
          >
            <div className="bg-white border-2 border-blue-300 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">
                    {block.category.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">{block.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBlockDelete(block.id);
                  }}
                  className="ml-2 text-red-400 hover:text-red-600 text-xs"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {blocks.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <p className="text-lg font-medium mb-2">Start Building Your Game</p>
              <p className="text-sm">Drag blocks from the palette to create game logic</p>
            </div>
          </div>
        )}

        {/* Game Status Indicator */}
        {isPlaying && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Playing
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCanvas;
