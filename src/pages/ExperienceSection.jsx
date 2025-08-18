import React from 'react';
import { useTranslation } from 'react-i18next';

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <div id="experience" className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('experiences.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="space-y-8">
          <div className="border-l-4 border-primary pl-8 py-4 relative">
            <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="text-xl font-semibold text-gray-900">{t('experiences.jobTitle')}</h3>
              <span className="text-primary font-medium">{t('experiences.period')}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <i className="fas fa-building mr-2 text-sm"></i>
              <span>{t('experiences.company')}</span>
            </div>
            <p className="text-gray-600">{t('experiences.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
