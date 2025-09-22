import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter, FiStar, FiPlay, FiHeart } from 'react-icons/fi';

interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  rating: number;
  plays: number;
  likes: number;
  category: string;
  createdAt: string;
}

const GameGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Games' },
    { id: 'arcade', label: 'Arcade' },
    { id: 'puzzle', label: 'Puzzle' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'educational', label: 'Educational' },
  ];

  // Sample games data
  const sampleGames: Game[] = [
    {
      id: '1',
      title: 'Space Adventure',
      description: 'Navigate through space and collect stars!',
      thumbnail: '🚀',
      author: 'SpaceExplorer',
      rating: 4.5,
      plays: 1250,
      likes: 89,
      category: 'arcade',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Math Quiz Challenge',
      description: 'Test your math skills in this fun quiz game',
      thumbnail: '🧮',
      author: 'MathWizard',
      rating: 4.2,
      plays: 890,
      likes: 67,
      category: 'educational',
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      title: 'Puzzle Master',
      description: 'Solve challenging puzzles to advance',
      thumbnail: '🧩',
      author: 'PuzzleKing',
      rating: 4.8,
      plays: 2100,
      likes: 156,
      category: 'puzzle',
      createdAt: '2024-01-08'
    },
    {
      id: '4',
      title: 'Dragon Quest',
      description: 'Embark on an epic adventure to defeat the dragon',
      thumbnail: '🐉',
      author: 'AdventureSeeker',
      rating: 4.6,
      plays: 3400,
      likes: 234,
      category: 'adventure',
      createdAt: '2024-01-05'
    },
    {
      id: '5',
      title: 'Racing Championship',
      description: 'Race against other players in this thrilling game',
      thumbnail: '🏎️',
      author: 'SpeedDemon',
      rating: 4.3,
      plays: 1800,
      likes: 123,
      category: 'arcade',
      createdAt: '2024-01-03'
    },
    {
      id: '6',
      title: 'Memory Game',
      description: 'Test and improve your memory skills',
      thumbnail: '🧠',
      author: 'MindTrainer',
      rating: 4.4,
      plays: 950,
      likes: 78,
      category: 'educational',
      createdAt: '2024-01-01'
    }
  ];

  const filteredGames = sampleGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Game Gallery</h1>
        <p className="text-gray-600">Discover amazing games created by the community</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search games, creators, or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center space-x-2">
          <FiFilter className="text-gray-400 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <div key={game.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
            {/* Game Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl">
              {game.thumbnail}
            </div>

            {/* Game Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {game.title}
                </h3>
                <div className="flex items-center space-x-1 text-sm text-yellow-500">
                  <FiStar className="w-4 h-4 fill-current" />
                  <span>{game.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {game.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>by {game.author}</span>
                <span>{new Date(game.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>👁 {formatNumber(game.plays)} plays</span>
                  <span>❤️ {formatNumber(game.likes)} likes</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Link
                  to={`/play/${game.id}`}
                  className="flex-1 bg-primary-500 text-white text-center px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <FiPlay className="w-4 h-4" />
                  <span>Play</span>
                </Link>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <FiHeart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No games found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default GameGallery;
