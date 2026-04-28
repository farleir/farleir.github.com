import React from 'react';
import type { App } from '../types';

interface AppItemProps {
  app: App;
}

const AppItem: React.FC<AppItemProps> = ({ app }) => {
  const Icon = app.icon;
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-start p-4 text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-200 group h-40"
    >
      <div className="w-12 h-12 mb-3 shrink-0">
        <Icon className="w-full h-full" />
      </div>
      <div className="flex flex-col">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {app.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {app.description}
          </p>
      </div>
    </a>
  );
};

export default AppItem;
