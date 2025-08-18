import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white w-full">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo + mô tả */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-auto mr-2"
              />
              <span className="text-xl font-bold">KaiO-Dev</span>
            </div>
            <p className="mt-2 text-gray-400">{t('footer.description')}</p>
          </div>

          {/* Mạng xã hội */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/KaiO277"
              aria-label={t('footer.social.github')}
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/imKaiO7"
              aria-label={t('footer.social.facebook')}
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://twitter.com/your-twitter-username"
              aria-label={t('footer.social.twitter')}
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/your-stackoverflow-id"
              aria-label={t('footer.social.stackoverflow')}
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow text-xl"></i>
            </a>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
