import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import styles from './Language.module.css';
import { prefix } from '../../../utils/prefix';

export default function Language() {

  return (
    <>
      <Row className="pageContentRow learnRow">
        <Col xs={12} md={12}>
          <h2>Learn the language</h2>
        </Col>
      </Row>

      <Row className="pageContentRow">
        <Col xs={12} lg={6}>
          <div className={styles.langRow}>
            <a href={`${prefix}/learn/language-basics/`} className={styles.linkText}>Language basics</a>
          </div>

          <div className={styles.langRow}>
            <a href={`${prefix}/learn/distinctive-language-features/network-interaction/`} className={styles.linkText}>Distinctive language features - Network &amp; Data</a>
          </div>

          <div className={styles.langRow}>
            <a href={`${prefix}/learn/work-with-data-using-queries-in-ballerina/`} className={styles.linkText}>Working with data - Query, Table, &amp; XML</a>
          </div>

          <div className={styles.langRow}>
            <a href={`${prefix}/learn/distinctive-language-features/concurrency`} className={styles.linkText}>Advance language features - Concurrency</a>
          </div>

          <div className={styles.langRow}>
            <a href={`${prefix}/learn/#`} className={styles.linkText}>Completeing the picture</a>
          </div>

          <div className={styles.langRow}>
          <a href={`${prefix}/learn/#`} className={styles.linkBtn}>Complete language guide slides</a>
          <a href="https://www.youtube.com/watch?list=PL7JOecNWBb0KX8RGAjF-oRknb_YIYN-dR&v=My_uqtHvXV8" className={styles.linkBtn}>Watch video</a>
          </div>
        </Col>

        {/* <Col xs={12} lg={6} className={styles.btnCol}>
          <div><a href={`${prefix}/learn/#`} className={styles.langSlides}>Complete language guide slides</a></div>
          <div><a href="https://www.youtube.com/watch?list=PL7JOecNWBb0KX8RGAjF-oRknb_YIYN-dR&v=My_uqtHvXV8" className={styles.linkVideo}>Watch video</a></div>
        </Col> */}
      </Row>
    </>
  );
}
