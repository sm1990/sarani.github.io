import Head from 'next/head';
// import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Row, Stack } from 'react-bootstrap';

import Footer from '../components/common/footer/Footer';

export default function Layout({ children }) {
  const TopNav = dynamic(() => import('../components/common/top-nav/TopNav'), { ssr: false });

  return (
    <>
      <Head>
        {/* <script async src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script async src="https://unpkg.com/shiki" /> */}

        {/* <script src="/prism/prism.js"></script>
        <script src="/prism/prism-ballerina.js"></script> */}

        {/* <link rel="stylesheet" href="/prism/prism.css"/> */}

        {/* Google analytics */}
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js" />
        <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-PSL2TX4" />
        <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-92163714-2" />

        {/* <script async src="/jquery/jquery.min.js"/>
        <script async src="/shiki/shiki.js" /> */}

      </Head>
      <Stack gap={0} className='main-wrapper home'>
        <TopNav launcher='home' />
        <div className='wrap-page-content'>
          <Row className='contentRow'>
            {children}
          </Row>
        </div>

        <Footer />

      </Stack>

    </>
  );
}