import { RocketIcon } from './icons/FeatureIcons';
import { useI18n } from '../i18n';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  const { t } = useI18n();

  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3 shrink-0">
            <RocketIcon className="w-7 h-7 text-blue-600 dark:text-blue-500" />
            <span className="text-lg font-bold text-gray-800 dark:text-white tracking-tight">{t('headerTitle')}</span>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-sm">
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-1.5 text-sm text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                  aria-label={t('searchPlaceholder')}
                />
            </div>
          </div>
          <div className="shrink-0">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
