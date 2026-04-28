import React, { useEffect } from 'react';
import type { App } from '../types';
import { useI18n } from '../i18n';

interface AppModalProps {
  app: App | null;
  onClose: () => void;
}

const AppModal: React.FC<AppModalProps> = ({ app, onClose }) => {
  const { t } = useI18n();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!app) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-modal-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
          <h2 id="app-modal-title" className="text-xl font-bold text-gray-800 dark:text-white">{app.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label={t('closeModal')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <main className="p-6 overflow-y-auto">
          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed mb-6">
            {app.longDescription}
          </p>
          {app.screenshot && (
            <div className="rounded-lg overflow-hidden border dark:border-gray-700">
              <img src={app.screenshot} alt={`${app.name} screenshot`} className="w-full h-auto object-cover max-h-80" />
            </div>
          )}
        </main>
        <footer className="flex justify-end p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 shrink-0">
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            {t('openApp')}
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AppModal;
