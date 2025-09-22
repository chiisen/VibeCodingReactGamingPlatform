import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiPlay, FiPause, FiRotateCcw, FiHeart, FiShare2, FiFlag } from 'react-icons/fi';

const GamePlayer = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Sample game data - in a real app, this would be fetched based on gameId
  const game = {
    id: gameId,
    title: 'Space Adventure',
    description: 'Navigate through space and collect stars in this exciting arcade game!',
    author: 'SpaceExplorer',
    rating: 4.5,
    plays: 1250,
    likes: 89,
    category: 'Arcade',
    controls: ['Arrow Keys: Move', 'Space: Jump', 'Enter: Start/Restart'],
    instructions: 'Collect all the stars while avoiding obstacles. Reach the end to win!'
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    // In a real app, you'd show a toast notification
    alert('Game link copied to clipboard!');
  };

  const handleReport = () => {
    // In a real app, you'd open a report modal
    alert('Report functionality would be implemented here');
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Game Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{game.title}</h1>
            <p className="text-gray-600 mb-4">{game.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>by <Link to={`/profile/${game.author}`} className="text-primary-600 hover:text-primary-700">{game.author}</Link></span>
              <span>•</span>
              <span>{game.category}</span>
              <span>•</span>
              <span>⭐ {game.rating}</span>
              <span>•</span>
              <span>👁 {game.plays.toLocaleString()} plays</span>
              <span>•</span>
              <span>❤️ {game.likes} likes</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isLiked
                  ? 'bg-red-100 text-red-700 border border-red-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{isLiked ? 'Liked' : 'Like'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <FiShare2 className="w-4 h-4" />
              <span>Share</span>
            </button>

            <button
              onClick={handleReport}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <FiFlag className="w-4 h-4" />
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Game Canvas */}
        <div className="lg:col-span-3">
          <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
            {/* Game Canvas Placeholder */}
            <div className="text-center text-white">
              <div className="text-8xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">Space Adventure</h3>
              <p className="text-gray-300 mb-4">Click play to start the game!</p>

              {/* Game Status Overlay */}
              {isPlaying && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Playing
                </div>
              )}

              {/* Play Button */}
              <button
                onClick={handlePlay}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isPlaying
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {isPlaying ? 'Pause Game' : 'Start Game'}
              </button>
            </div>

            {/* Game UI Elements (when playing) */}
            {isPlaying && (
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-3 rounded">
                <div className="text-sm">
                  <div>Score: 1250</div>
                  <div>Lives: 3</div>
                  <div>Level: 1</div>
                </div>
              </div>
            )}
          </div>

          {/* Game Controls */}
          <div className="mt-4 bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Controls</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
              {game.controls.map((control, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded">
                  {control}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Game Instructions */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">How to Play</h3>
            <p className="text-sm text-gray-600">{game.instructions}</p>
          </div>

          {/* Game Stats */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Game Stats</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Plays:</span>
                <span className="font-medium">{game.plays.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rating:</span>
                <span className="font-medium">⭐ {game.rating}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Likes:</span>
                <span className="font-medium">❤️ {game.likes}</span>
              </div>
            </div>
          </div>

          {/* More Games by Author */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">More by {game.author}</h3>
            <div className="space-y-2">
              <Link to="/play/2" className="block text-sm text-primary-600 hover:text-primary-700">
                Math Quiz Challenge
              </Link>
              <Link to="/play/3" className="block text-sm text-primary-600 hover:text-primary-700">
                Puzzle Master
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
