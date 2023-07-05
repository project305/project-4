// import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
