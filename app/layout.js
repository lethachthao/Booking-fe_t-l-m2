import { Inter } from 'next/font/google';
import '../style/globals.css';
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
      <body>
        <RootProvider>
          {/* https://ant.design/components/app  - message App */}
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
