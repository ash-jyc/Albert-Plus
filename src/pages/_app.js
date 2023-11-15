// pages/_app.js
import '@/styles/global.css'; // Add this line to include global CSS

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
