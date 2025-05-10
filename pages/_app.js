// pages/_app.js
import '../styles/globals.css'; // importa o CSS com Tailwind

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
