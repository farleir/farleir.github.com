import React from 'react';
import type { App } from '../types';

interface AppItemProps {
  app: App;
  onSelect: (app: App) => void;
}

const AppItem: React.FC<AppItemProps> = ({ app, onSelect }) => {
  const Icon = app.icon;
  
  const baseClasses = "relative flex flex-col items-center text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-200 group h-40 overflow-hidden w-full";

  if (app.thumbnail) {
    return (
      <button
        onClick={() => onSelect(app)}
        className={`${baseClasses} justify-end p-3`}
        aria-label={`Details for ${app.name}`}
      >
        <img src={app.thumbnail} alt={`${app.name} thumbnail`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-white">
          <h3 className="text-sm font-semibold drop-shadow-md">
              {app.name}
          </h3>
          <p className="text-xs text-gray-200 mt-1 drop-shadow-md px-1 line-clamp-2">
              {app.description}
          </p>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={() => onSelect(app)}
      className={`${baseClasses} justify-start p-4`}
      aria-label={`Details for ${app.name}`}
    >
      <div className="w-12 h-12 mb-3 shrink-0">
        <Icon className="w-full h-full" />
      </div>
      <div className="flex flex-col">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {app.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {app.description}
          </p>
      </div>
    </button>
  );
};

export default AppItem;
