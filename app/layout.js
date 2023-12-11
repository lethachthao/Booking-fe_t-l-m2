import { Inter } from 'next/font/google';
import '../style/globals.css';
import { cn } from '@/utils/cn';
import { fontInter } from '../lib/font';
import RootProvider from '@/components/provider/root-provider';
import { App } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Booking',
  description: 'A project built-in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={cn(
          fontInter.variable,
          'overflow-x-hidden min-h-full text-base',
        )}
      >
        <RootProvider>
          <App>
            <main className=" relative" role="main">
              {children}
            </main>
          </App>
        </RootProvider>
      </body>
    </html>
  );
}
