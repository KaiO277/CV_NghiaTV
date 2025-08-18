import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div id="about" className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('abouts.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('abouts.whoAmI')}</h3>
            <p className="text-gray-600 mb-6">{t('abouts.paragraph1')}</p>
            <p className="text-gray-600 mb-6">{t('abouts.paragraph2')}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                <span className="text-gray-700">{t('abouts.location')}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <span className="text-gray-700">
                  <a href={`mailto:${t('abouts.email')}`}>{t('abouts.email')}</a>
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-2"></i>
                <span className="text-gray-700">{t('abouts.phone')}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-calendar-alt text-primary mr-2"></i>
                <span className="text-gray-700">{t('abouts.availability')}</span>
              </div>
            </div>
          </div>
          <div id="skills" className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('abouts.mySkills')}</h3>
            <div className="space-y-4">
              {[
                { skill: t('abouts.skills.python'), percent: "90%" },
                { skill: t('abouts.skills.react'), percent: "55%" },
                { skill: t('abouts.skills.php'), percent: "80%" },
                { skill: t('abouts.skills.git'), percent: "80%" },
                { skill: t('abouts.skills.reactNative'), percent: "65%" },
              ].map(({ skill, percent }) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <span className="text-gray-500">{percent}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: percent }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
