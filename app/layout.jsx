import '@/src/styles/tokens.css';
import '@/src/styles/flow-unify.css';
import '@/src/index.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { Providers } from '@/src/components/Providers';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import BottomNav from '@/src/components/BottomNav';
import { AppShellWrapper } from '@/src/components/AppShellWrapper';

export const metadata = {
  title: 'Magnevents — Premium Live Artist Booking',
  description: 'Artist-first booking for weddings, corporate nights, and concerts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <AppShellWrapper>
            {children}
          </AppShellWrapper>
        </Providers>
      </body>
    </html>
  );
}
