import Theme from '../styles/theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
