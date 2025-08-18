import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    closeMenu();
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(menu);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    setDropdownOpen(false);
    closeMenu();
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) i18n.changeLanguage(savedLang);

    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]');
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveMenu(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [i18n]);

  return (
    <>
      <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
                <span className="text-xl font-bold text-gray-900">KaiO-Dev</span>
              </div>
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((menu) => (
                <a
                  key={menu}
                  href={`#${menu}`}
                  className={`px-3 py-2 text-sm font-medium ${
                    activeMenu === menu
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-900 hover:text-primary'
                  }`}
                  onClick={() => handleMenuClick(menu)}
                >
                  {t(menu)}
                </a>
              ))}

              {/* Language dropdown for desktop */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium focus:outline-none"
                >
                  <i className="fas fa-globe mr-1"></i>
                  <span>{t('language')}</span>
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-10">
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {t('english')}
                    </button>
                    <button
                      onClick={() => changeLanguage('vi')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {t('vietnamese')}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <i className={`${isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {['home', 'about', 'experience', 'projects', 'contact'].map((menu) => (
              <a
                key={menu}
                href={`/#${menu}`}
                className={`block px-3 py-2 text-base font-medium ${
                  activeMenu === menu
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-900 hover:text-primary'
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                {t(menu)}
              </a>
            ))}
          </div>

          {/* Language selection for mobile */}
          <div className="border-t border-gray-200 pt-4">
            <div className="px-3">
              <span className="block text-sm font-medium text-gray-500 mb-2">{t('language')}</span>
              <button
                onClick={() => changeLanguage('en')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {t('english')}
              </button>
              <button
                onClick={() => changeLanguage('vi')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {t('vietnamese')}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
