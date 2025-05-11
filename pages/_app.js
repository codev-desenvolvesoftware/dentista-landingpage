// pages/_app.js
import '../styles/globals.css'; // importa o CSS com Tailwind
import Head from 'next/head';


<Head>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
</Head>

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
