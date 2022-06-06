import React from 'react';
import { Alert, Container, Row, Stack, Col, Tabs, Tab} from 'react-bootstrap';
import Image from 'next-image-export-optimizer';

import Layout from '../layouts/LayoutCommunity';

export default function Downloads() {
 
  return (
    <Layout>
      <Col sm={12}>
        <Row className="pageHeader pageContentRow">
          <Col xs={12}>
            <h1>Community</h1> 
          </Col>
        </Row>

        <Row className="pageHeader pageContentRow">
          <Col xs={12}>
            <p>Welcome to the Ballerina community! Use the below channels to ask questions, find answers, post feedback, and help establish Ballerina as a truly community-owned resource.</p> 
          </Col>
        </Row>

        {/* <Row className="pageHeader pageContentRow">
          <Col xs={12}>
            <h1>Community</h1> 
          </Col>
        </Row> */}

        
      </Col>
    </Layout>
    
  );
}
