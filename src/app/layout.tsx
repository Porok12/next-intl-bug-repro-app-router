import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <React.Suspense fallback={null}>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </React.Suspense>
      </body>
    </html>
  );
}
