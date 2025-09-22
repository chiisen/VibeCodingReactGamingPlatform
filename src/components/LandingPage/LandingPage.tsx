import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiPlay, FiUsers, FiStar } from 'react-icons/fi';

const LandingPage = () => {
  const features = [
    {
      icon: FiCode,
      title: 'Visual Coding',
      description: 'Create games with drag-and-drop blocks, no coding experience required'
    },
    {
      icon: FiPlay,
      title: 'Instant Preview',
      description: 'See your changes immediately as you build your game'
    },
    {
      icon: FiUsers,
      title: 'Collaborate',
      description: 'Work together with friends on amazing game projects'
    },
    {
      icon: FiStar,
      title: 'Share & Play',
      description: 'Share your creations with the world and play games by others'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Create Games
          <span className="text-primary-500 block">Visually</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          VibeCoding makes game development accessible to everyone. Build amazing games
          with our intuitive visual coding interface - no programming experience required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/studio"
            className="bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
          >
            Start Creating
            <FiArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/gallery"
            className="bg-white text-primary-500 border-2 border-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Explore Games
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Create Amazing Games
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple puzzles to complex adventures, our platform provides all the tools
            you need to bring your game ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Game Development Journey?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of creators who are already building amazing games with VibeCoding.
        </p>
        <Link
          to="/studio"
          className="bg-white text-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
        >
          Create Your First Game
          <FiArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
