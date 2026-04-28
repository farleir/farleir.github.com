import React from 'react';
import AppItem from './CallToAction';
import type { App } from '../types';

interface AppGridProps {
  apps: App[];
}

const AppGrid: React.FC<AppGridProps> = ({ apps }) => {
  return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4">
        {apps.map((app) => (
          <AppItem key={app.name} app={app} />
        ))}
      </div>
  );
};

export default AppGrid;
