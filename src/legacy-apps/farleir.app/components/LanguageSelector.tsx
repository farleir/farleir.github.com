import React from 'react';
import { useI18n } from '../i18n';

const LanguageSelector = () => {
  const { locale, changeLocale } = useI18n();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLocale('en')}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => changeLocale('pt')}
        className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
          locale === 'pt'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
        aria-pressed={locale === 'pt'}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSelector;
