import React from 'react';
import { Alert, Container, Row, Stack, Col } from 'react-bootstrap';


import Layout from '../layouts/LayoutCommunity';
import Newsletter from '../components/community/newsletter/Newsletter';
import Events from '../components/community/events/Events';
import Resources from '../components/community/resources/Resources';
import Slack from '../components/community/slack/Slack';
import TechTalk from '../components/community/tech-talk/TechTalk';
import GetInvolved from '../components/community/get-involved/GetInvolved';
import Contact from '../components/community/contact/Contact';
import { prefix } from '../utils/prefix';

export default function Downloads() {
 
  return (
    <Layout>
      <Col sm={12}>
      <div class="collapse navbar-collapse" id="myNavbar">
               <ul class="nav navbar-nav secondary-nav" >
                 <li class="active"><a href="#subscribe-to-our-newsletter">Newsletter</a></li>
                 <li><a href="#events">Events</a></li>
                 <li><a href="#resources">Resources</a></li>
                 <li><a href="#ballerina-slack-community">Slack</a></li>
                 <li><a href="#monthly-tech-talk">Tech Talk</a></li>
                 <li><a href="#get-involved">Get involved</a></li>
                 <li><a href="#contact-us">Contact us</a></li>
               </ul>
               
             </div>
        <Row className="pageHeader pageContentRow communityRow">
          <Col xs={12}>
            <h1>Community</h1> 
          </Col>
        </Row>

        <Row className="pageContentRow communityRow">
          <Col xs={12}>
            <p>Welcome to the Ballerina community! Use the below channels to ask questions, find answers, post feedback, and help establish Ballerina as a truly community-owned resource.</p> 
          </Col>
        </Row>

        <Row className="pageContentRow communityRow">
          <Newsletter/>
        </Row>

        <Row className="pageContentRow communityRow">
          <Events/>
        </Row>

        <Row className="pageContentRow communityRow">
          <Resources/>
        </Row>

        <Row className="pageContentRow communityRow slackRow">
          <Slack/>
        </Row>

        <Row className="pageContentRow communityRow">
          <TechTalk/>
        </Row>

        <Row className="pageContentRow communityRow">
          <GetInvolved/>
        </Row>



        <Row className="pageContentRow communityRow">
          <Contact/>
        </Row>

      </Col>
    </Layout>
    
  );
}
