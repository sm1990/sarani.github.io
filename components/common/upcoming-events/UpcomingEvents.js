import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import styles from './UpcomingEvents.module.css';

export default function UpcomingEvents() {

  return (
    <>
      <Row className={styles.eventRows}>
        <Col sm={12} md={2} className={styles.eventDateContainer}>
          <p className={`${styles.eventDate} ${styles.eventDateNum}`}>May 25, 2022</p>	
          <p className={styles.eventDate}>Wed., 6.30 p.m. PDT</p>	
          <p className="eventLocation">Online</p>
        </Col>
        <Col sm={12} md={7} className={styles.eventDetail} id="eventDetails">
          <a target="_blank" href="https://www.meetup.com/sfjava/events/284669431" rel="noreferrer">	
            <p className="eventName">Meetup</p>	
          </a>
          <h5>Ballerina: A Language to Develop, Consume and Combine Network Services</h5>		
          <a target="_blank" href="https://twitter.com/sameerajayasoma" rel="noreferrer">Sameera Jayasoma</a>, Senior Director, WSO2
        </Col>
        <Col sm={12} md={3} className={styles.eventURL}>
          <a className={styles.eventRegistration} href="https://www.womentech.net/speaker/Anupama/Pathirage/70302" target="_blank" rel="noreferrer">More info</a>
        </Col>
      </Row>

      <Row className={styles.eventRows}>
        <Col sm={12} md={2} className={styles.eventDateContainer}>
          <p className={`${styles.eventDate} ${styles.eventDateNum}`}>May 25, 2022</p>	
          <p className={styles.eventDate}>Wed., 6.30 p.m. PDT</p>	
          <p className="eventLocation">Online</p>
        </Col>
        <Col sm={12} md={7} className={styles.eventDetail} id="eventDetails">
          <a target="_blank" href="https://www.meetup.com/sfjava/events/284669431" rel="noreferrer">	
            <p className="eventName">Meetup</p>	
          </a>
          <h5>Ballerina: A Language to Develop, Consume and Combine Network Services</h5>		
          <a target="_blank" href="https://twitter.com/sameerajayasoma" rel="noreferrer">Sameera Jayasoma</a>, Senior Director, WSO2
        </Col>
        <Col sm={12} md={3} className={styles.eventURL}>
          <a className={styles.eventRegistration} href="https://www.womentech.net/speaker/Anupama/Pathirage/70302" target="_blank" rel="noreferrer">More info</a>
        </Col>
      </Row>
    </>

  );
}
