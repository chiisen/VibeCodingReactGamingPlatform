import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiPlay, FiUsers, FiStar } from 'react-icons/fi';
import { useTranslation } from '../../i18n.tsx';

const LandingPage = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: FiCode,
      title: t('landing.features.visualCoding.title'),
      description: t('landing.features.visualCoding.description')
    },
    {
      icon: FiPlay,
      title: t('landing.features.instantPreview.title'),
      description: t('landing.features.instantPreview.description')
    },
    {
      icon: FiUsers,
      title: t('landing.features.collaborate.title'),
      description: t('landing.features.collaborate.description')
    },
    {
      icon: FiStar,
      title: t('landing.features.sharePlay.title'),
      description: t('landing.features.sharePlay.description')
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          {t('landing.hero.title')}
          <span className="text-primary-500 block">{t('landing.hero.subtitle')}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('landing.hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/studio"
            className="bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
          >
            {t('landing.hero.startCreating')}
            <FiArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/gallery"
            className="bg-white text-primary-500 border-2 border-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            {t('landing.hero.exploreGames')}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('landing.features.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('landing.features.description')}
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
          {t('landing.cta.title')}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {t('landing.cta.description')}
        </p>
        <Link
          to="/studio"
          className="bg-white text-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
        >
          {t('landing.cta.createYourFirstGame')}
          <FiArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
