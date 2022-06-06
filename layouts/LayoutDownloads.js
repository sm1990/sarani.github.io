import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Container, Row, Stack, Col} from 'react-bootstrap';

import Footer from '../components/common/footer/Footer';

export default function Layout({ children }) {
  const TopNav = dynamic(() => import('../components/common/top-nav/TopNav'), { ssr: false });

  return (
    <>
      <Head>
        <title>Ballerina downloads</title>
        <meta name="description" content="Download the Ballerina programming language for Windows, Linux and MacOS. You can find the release notes, plugin downloads and archived versions here too."/>
        <meta name="keywords" content="ballerina, ballerina downloads, release notes, getting started, programming language"/>

        {/* <!--FB--> */}
        <meta property="og:type" content="article"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Ballerina - Ballerina downloads"/>
        <meta property="og:description" content="A programming language for the cloud that makes it easier to use, combine, and create network services."/>

        {/* <!--LINKED IN  --> */}
        <meta property="og:title" content="Ballerina"/>
        <meta property="og:description" content="A programming language for the cloud that makes it easier to use, combine, and create network services."/>

        {/* <!--TWITTER--> */}
        <meta name="twitter:description" content="A programming language for the cloud that makes it easier to use, combine, and create network services."/>
        <meta name="twitter:text:description" content="A programming language for the cloud that makes it easier to use, combine, and create network services."/> 

        {/* Google analytics */}
        <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"/>
        <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-PSL2TX4"/>
        <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-92163714-2"/>

        <script async src="/jquery/jquery.min.js"/>
        <script async src="/shiki/shiki.js" />
      </Head>
      <Stack gap={0} className='main-wrapper downloads'>
        <TopNav launcher='downloads'/>
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