import "@/styles/globals.css";
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
