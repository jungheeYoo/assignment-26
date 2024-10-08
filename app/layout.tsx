import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Tweets',
    default: 'Tweets',
  },
  description: 'What is going on? Write down anything!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 text-black max-w-screen-sm mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
