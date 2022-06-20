import Image from 'next-image-export-optimizer';
import dynamic from 'next/dynamic';
import { Col } from 'react-bootstrap';

import Layout from '../layouts/LayoutHome';
import Intro from '../components/home-page/intro/Intro';
import WhyBal from '../components/home-page/why-bal/WhyBal';
import Videos from '../components/home-page/videos/Videos';
import Events from '../components/home-page/events/Events';
import { prefix } from '../utils/prefix';
import styles from '../styles/Home.module.css'


export default function Home() {
  const BalAction = dynamic(() => import('../components/home-page/bal-action/BalAction'), { ssr: false });
  
  return (
    <Layout>
      <Col sm={12}>

        <Row className={styles.homeIntro}>
          <Intro/>
        </Row>



        <Row className={styles.homeBalAction}>
          <BalAction/>
        </Row>



        <Row className={styles.homeWhyBal}>
          <WhyBal/>
        </Row>


        <Row className={styles.homeVideos}>
          <Videos/>
        </Row>


        <Row className={styles.homeEvents}>
          <Events/>
        </Row>
        
      </Col>
    </Layout>
  );
}
