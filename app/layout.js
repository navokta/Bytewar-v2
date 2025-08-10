import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SessionWrapper from '../components/SessionWrapper'; // 👈 import the wrapper

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'ByteWar',
  description: 'ByteWar is an online hackathon platform where individuals and teams compete to build innovative tech solutions across themes like AI, Cybersecurity, Web3, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
      <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
    </html>
  );
}