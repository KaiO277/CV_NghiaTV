import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              {t('hero.greeting')} <span className="text-primary">{t('hero.name')}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                {t('hero.view_work')}
              </a>
              <a
                href="/CV_TranVanNghia.pdf"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                download
              >
                {t('hero.download_cv')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                <img
                  className="w-full h-full rounded-full object-cover border-4 border-white"
                  src="/avatar1.jpg"
                  alt={t('hero.name')}
                  onError={(e) => { e.target.src = '/path-to-default-image.jpg'; }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white">
                  <i className="fas fa-code text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
