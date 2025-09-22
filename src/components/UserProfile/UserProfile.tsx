import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiEdit, FiSettings, FiStar, FiHeart, FiPlay, FiCalendar, FiTrophy } from 'react-icons/fi';

const UserProfile = () => {
  const { userId } = useParams<{ userId?: string }>();
  const [activeTab, setActiveTab] = useState('games');

  // Sample user data - in a real app, this would be fetched based on userId
  const user = {
    id: userId || 'current-user',
    username: 'GameCreator123',
    displayName: 'Alex Chen',
    bio: 'Passionate game developer and educator. Love creating fun learning experiences!',
    avatar: '👨‍💻',
    joinDate: '2024-01-15',
    location: 'San Francisco, CA',
    website: 'https://alexchen.dev',
    stats: {
      gamesCreated: 12,
      totalPlays: 15420,
      totalLikes: 892,
      followers: 234,
      following: 156
    }
  };

  const tabs = [
    { id: 'games', label: 'My Games', icon: FiPlay },
    { id: 'liked', label: 'Liked Games', icon: FiHeart },
    { id: 'achievements', label: 'Achievements', icon: FiTrophy },
  ];

  // Sample user's games
  const userGames = [
    {
      id: '1',
      title: 'Space Adventure',
      description: 'Navigate through space and collect stars!',
      thumbnail: '🚀',
      plays: 1250,
      likes: 89,
      rating: 4.5,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Math Quiz Challenge',
      description: 'Test your math skills in this fun quiz game',
      thumbnail: '🧮',
      plays: 890,
      likes: 67,
      rating: 4.2,
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      title: 'Puzzle Master',
      description: 'Solve challenging puzzles to advance',
      thumbnail: '🧩',
      plays: 2100,
      likes: 156,
      rating: 4.8,
      createdAt: '2024-01-08'
    }
  ];

  const achievements = [
    { name: 'First Game', description: 'Created your first game', icon: '🎮', unlocked: true },
    { name: 'Popular Creator', description: 'Reached 1000 plays', icon: '⭐', unlocked: true },
    { name: 'Game Master', description: 'Created 10 games', icon: '👑', unlocked: true },
    { name: 'Community Favorite', description: 'Received 500 likes', icon: '❤️', unlocked: false },
    { name: 'Educator', description: 'Created 5 educational games', icon: '📚', unlocked: false },
    { name: 'Speed Runner', description: 'Created a game in under 1 hour', icon: '⚡', unlocked: false },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'games':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userGames.map((game) => (
              <div key={game.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl">
                  {game.thumbnail}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{game.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>👁 {game.plays} plays</span>
                    <span>❤️ {game.likes} likes</span>
                    <span>⭐ {game.rating}</span>
                  </div>
                  <Link
                    to={`/play/${game.id}`}
                    className="w-full bg-primary-500 text-white text-center px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FiPlay className="w-4 h-4" />
                    <span>Play Game</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        );

      case 'liked':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample liked games */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-6xl">
                🎯
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Practice</h3>
                <p className="text-gray-600 text-sm mb-3">Improve your aim in this fun shooting game</p>
                <Link
                  to="/play/liked-1"
                  className="w-full bg-primary-500 text-white text-center px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Play Game
                </Link>
              </div>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  achievement.unlocked
                    ? 'bg-yellow-50 border-yellow-300'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`text-3xl ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold ${achievement.unlocked ? 'text-yellow-800' : 'text-gray-600'}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${achievement.unlocked ? 'text-yellow-700' : 'text-gray-500'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-4xl">
            {user.avatar}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{user.displayName}</h1>
              <span className="text-gray-500">@{user.username}</span>
              {userId === 'current-user' && (
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <FiEdit className="w-4 h-4" />
                </button>
              )}
            </div>

            <p className="text-gray-600 mb-4">{user.bio}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4" />
                Joined {new Date(user.joinDate).toLocaleDateString()}
              </span>
              <span>{user.location}</span>
              <a href={user.website} className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </div>
          </div>

          {userId === 'current-user' && (
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <FiSettings className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {Object.entries(user.stats).map(([key, value]) => {
          const labels = {
            gamesCreated: 'Games',
            totalPlays: 'Total Plays',
            totalLikes: 'Likes',
            followers: 'Followers',
            following: 'Following'
          };

          return (
            <div key={key} className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">{value.toLocaleString()}</div>
              <div className="text-sm text-gray-600">{labels[key as keyof typeof labels]}</div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-700 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default UserProfile;
