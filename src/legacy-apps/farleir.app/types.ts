import React from 'react';

export interface App {
  id: string;
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  category: string;
  thumbnail?: string;
  screenshot?: string;
  longDescription?: string;
  isFeatured?: boolean;
}
