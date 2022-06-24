import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Container, Row, Stack, Col} from 'react-bootstrap';

import Footer from '../components/common/footer/Footer';

export default function Layout({ children }) {
  const TopNav = dynamic(() => import('../components/common/top-nav/TopNav'), { ssr: false });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        
      </Head>
      <Stack gap={0} className='main-wrapper community'>
        <TopNav launcher='community'/>
        <Container className='wrap-page-content' fluid>
          <Row className='community-wrap-row'>
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