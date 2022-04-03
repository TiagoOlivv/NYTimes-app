import React from 'react';

import { AnimatedHeaderProvider } from './animatedHeader';

export const AppProvider: React.FC = ({ children }) => (
  <AnimatedHeaderProvider>{children}</AnimatedHeaderProvider>
);
