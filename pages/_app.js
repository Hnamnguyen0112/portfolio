import { AppWrapper } from '../context/state';

import 'devicon/devicon.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
