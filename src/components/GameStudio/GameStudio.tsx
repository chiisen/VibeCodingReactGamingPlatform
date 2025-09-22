import React, { useState } from 'react';
import { FiPlay, FiSave, FiShare, FiSettings } from 'react-icons/fi';
import GameCanvas from './components/GameCanvas';
import BlockPalette from './components/BlockPalette';
import GamePreview from './components/GamePreview';
import AssetLibrary from './components/AssetLibrary';

const GameStudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameCode, setGameCode] = useState([]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSave = () => {
    console.log('Saving game...');
  };

  const handleShare = () => {
    console.log('Sharing game...');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Game Studio</h1>
            <span className="text-sm text-gray-500">Untitled Game</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiSave className="w-4 h-4" />
              <span>Save</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiShare className="w-4 h-4" />
              <span>Share</span>
            </button>

            <button
              onClick={handlePlay}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-colors ${
                isPlaying
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              <FiPlay className="w-4 h-4" />
              <span>{isPlaying ? 'Stop' : 'Play'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Block Palette */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Blocks</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <BlockPalette />
          </div>
        </div>

        {/* Center - Game Canvas */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-gray-50 p-4">
            <GameCanvas isPlaying={isPlaying} gameCode={gameCode} />
          </div>
        </div>

        {/* Right Sidebar - Assets & Preview */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Assets</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <AssetLibrary />
          </div>

          <div className="p-4 border-t border-gray-200">
            <h3 className="text-md font-semibold text-gray-900 mb-2">Preview</h3>
            <GamePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStudio;
