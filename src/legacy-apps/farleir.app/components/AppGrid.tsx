import React from 'react';
import AppItem from './AppItem';
import type { App } from '../types';
import { useI18n } from '../i18n';

interface AppGridProps {
  apps: App[];
  onAppSelect: (app: App) => void;
}

const AppGrid: React.FC<AppGridProps> = ({ apps, onAppSelect }) => {
  const { t } = useI18n();
  if (apps.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500 dark:text-gray-400">
        <h3 className="text-xl font-semibold">{t('noAppsFoundTitle')}</h3>
        <p className="mt-2">{t('noAppsFoundDescription')}</p>
      </div>
    );
  }

  return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4">
        {apps.map((app) => (
          <AppItem key={app.name} app={app} onSelect={onAppSelect} />
        ))}
      </div>
  );
};

export default AppGrid;
