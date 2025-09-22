import React from 'react';
import { FiPlay, FiPause, FiRotateCcw } from 'react-icons/fi';

const GamePreview = () => {
  const handlePlay = () => {
    console.log('Playing game preview...');
  };

  const handlePause = () => {
    console.log('Pausing game preview...');
  };

  const handleReset = () => {
    console.log('Resetting game preview...');
  };

  return (
    <div className="space-y-3">
      {/* Preview Window */}
      <div className="bg-gray-100 border border-gray-200 rounded-lg aspect-video flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="text-3xl mb-2">🎮</div>
          <p className="text-sm">Game Preview</p>
          <p className="text-xs text-gray-300">Click play to test your game</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-2">
        <button
          onClick={handlePlay}
          className="flex items-center space-x-1 px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
        >
          <FiPlay className="w-3 h-3" />
          <span>Play</span>
        </button>
        <button
          onClick={handlePause}
          className="flex items-center space-x-1 px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 transition-colors"
        >
          <FiPause className="w-3 h-3" />
          <span>Pause</span>
        </button>
        <button
          onClick={handleReset}
          className="flex items-center space-x-1 px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
        >
          <FiRotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Game Info */}
      <div className="text-center text-xs text-gray-500">
        <p>Canvas: 800x600</p>
        <p>FPS: 60</p>
      </div>
    </div>
  );
};

export default GamePreview;
