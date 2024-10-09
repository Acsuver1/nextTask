import '../app/globals.css';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
