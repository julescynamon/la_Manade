import '../styles/global.css';
import Layout from './components/layout';
import CookieConsent from 'react-cookie-consent';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <CookieConsent>
                Ce site utilise des cookies pour améliorer l'expérience
                utilisateur. En utilisant notre site, vous acceptez notre
                politique de confidentialité.
            </CookieConsent>
        </Layout>
    );
}

export default MyApp;
