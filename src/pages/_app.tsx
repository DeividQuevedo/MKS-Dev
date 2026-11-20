//dev-mks/src/pages/_app.tsx

import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
