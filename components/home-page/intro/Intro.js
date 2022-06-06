import * as React from 'react';
import { Row, Col} from 'react-bootstrap';
import Image from 'next-image-export-optimizer';
import Link from 'next/link';

import { prefix } from '../../../utils/prefix';
import styles from './Intro.module.css';

export default function Intro() {

  return (
    <Col sm={12}>
            <Row className={styles.introTopRow}>
              <Col sm={12} md={8}>
                <Image className={styles.homePageLogo} src={`${prefix}/images/ballerina-logo-white.svg`} height={61} width={330} alt="Ballerina Logo"/>
              </Col>
              <Col sm={12} md={4}></Col>
            </Row>
            <Row className={styles.introBottomRow}>
              <Col sm={12} md={8} className={styles.description}>
                <p>Ballerina is an open-source programming language for the cloud that makes it easier to use, combine, and create network services.</p>
              </Col>

              <Col sm={12} md={4}>
                <a className={styles.homeIntroButton} target="_blank" href={`${prefix}/learn/getting-started-with-ballerina/`} rel="noreferrer">
                  Get started
                  <p>Install Ballerina, set it all up <br/>and take it for a spin.</p>
                </a>
                <a className={`${styles.homeIntroButton} ${styles.playButton}`} target="_blank" href={`${prefix}/learn/by-example/`} rel="noreferrer">
                  Examples
                  <p>Explore and try Ballerina examples.<br/> &nbsp;</p>
                </a>
              </Col>
            </Row>
          </Col>
  );
}