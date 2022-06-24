import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Container, Row, Stack, Col} from 'react-bootstrap';

import Footer from '../components/common/footer/Footer';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  const TopNav = dynamic(() => import('../components/common/top-nav/TopNav'), { ssr: false });

  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/> */}

        {/* <script async src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script async src="https://unpkg.com/shiki" /> */}
        
        {/* <script src="/prism/prism.js"></script>
        <script src="/prism/prism-ballerina.js"></script> */}

        {/* <link rel="stylesheet" href="/prism/prism.css"/> */}

        {/* Google analytics */}
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"/>
        <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-PSL2TX4"/>
        <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-92163714-2"/>

        {/* <script async src="/jquery/jquery.min.js"/>
        <script async src="/shiki/shiki.js" /> */}
        
      </Head>
      <Stack gap={0} className='main-wrapper home'>
        <TopNav launcher='home'/>
        <Container className='wrap-page-content' fluid>
          <Row >
            {/* <Col sm={3} xxl={2} className='leftNav d-none d-sm-block'>
              <LeftNav/>
            </Col>
            <Col xs={12} className='d-block d-sm-none'>Mobile Left Nav</Col> */}
            {children}
          </Row>
        </Container>

        <Footer/>

      </Stack>


      
    </>
  );
}