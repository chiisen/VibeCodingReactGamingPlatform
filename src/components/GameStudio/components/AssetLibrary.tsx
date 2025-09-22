import React, { useState } from 'react';
import { FiImage, FiMusic, FiFileText, FiUpload } from 'react-icons/fi';

const AssetLibrary = () => {
  const [activeTab, setActiveTab] = useState('sprites');

  const tabs = [
    { id: 'sprites', label: 'Sprites', icon: FiImage },
    { id: 'sounds', label: 'Sounds', icon: FiMusic },
    { id: 'backgrounds', label: 'Backgrounds', icon: FiFileText },
  ];

  const sampleSprites = [
    { name: 'Player', preview: '🧑', color: 'bg-blue-200' },
    { name: 'Enemy', preview: '👹', color: 'bg-red-200' },
    { name: 'Coin', preview: '🪙', color: 'bg-yellow-200' },
    { name: 'Platform', preview: '📦', color: 'bg-gray-200' },
    { name: 'Heart', preview: '❤️', color: 'bg-pink-200' },
    { name: 'Star', preview: '⭐', color: 'bg-yellow-300' },
  ];

  const sampleSounds = [
    { name: 'Jump', duration: '0:02' },
    { name: 'Coin', duration: '0:01' },
    { name: 'Background Music', duration: '2:30' },
    { name: 'Game Over', duration: '0:03' },
  ];

  const sampleBackgrounds = [
    { name: 'Forest', color: 'bg-green-200' },
    { name: 'Space', color: 'bg-purple-200' },
    { name: 'Desert', color: 'bg-yellow-200' },
    { name: 'City', color: 'bg-gray-300' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'sprites':
        return (
          <div className="grid grid-cols-2 gap-3">
            {sampleSprites.map((sprite, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className={`w-full h-16 ${sprite.color} rounded flex items-center justify-center text-2xl mb-2`}>
                  {sprite.preview}
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">{sprite.name}</p>
              </div>
            ))}
          </div>
        );
      case 'sounds':
        return (
          <div className="space-y-2">
            {sampleSounds.map((sound, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center space-x-3">
                  <FiMusic className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{sound.name}</p>
                    <p className="text-xs text-gray-500">{sound.duration}</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  <FiPlay className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        );
      case 'backgrounds':
        return (
          <div className="grid grid-cols-2 gap-3">
            {sampleBackgrounds.map((bg, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className={`w-full h-16 ${bg.color} rounded mb-2`} />
                <p className="text-sm font-medium text-gray-700 text-center">{bg.name}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex space-x-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Upload Button */}
      <div className="flex justify-center">
        <button className="flex items-center space-x-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors">
          <FiUpload className="w-4 h-4" />
          <span className="text-sm">Upload Asset</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default AssetLibrary;
