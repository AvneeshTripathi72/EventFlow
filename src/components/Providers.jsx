"use client";

import { ThemeProvider } from '@/src/contexts/ThemeContext';

export function Providers({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
