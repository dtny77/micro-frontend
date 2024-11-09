import {useEffect, useState} from 'react';


export default function App({ Component, pageProps }) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;

  return <Component {...pageProps} />;
}
