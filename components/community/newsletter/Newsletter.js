import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import styles from './Newsletter.module.css';
import { prefix } from '../../../utils/prefix';

export default function Newsletter() {

    const [hoverBtn, setHoverBtn] = React.useState(false);

    let linkArrowPath = prefix + '/images/toc-bg.svg';
    let linkArrowHoverPath = prefix + '/images/toc-bg-hover.svg';

    const linkArrow = {
            background: 'url('+ linkArrowPath +') no-repeat scroll right center',
            paddingRight: '25px'
    }

    const linkArrowHover = {
            background: 'url('+ linkArrowHoverPath +') no-repeat scroll right center',
            paddingRight: '25px'
    }

    return (
        <Col xs={12}>
            <Row>
                <Col xs={12}>
                <h2 id='subscribe-to-our-newsletter'>Subscribe to our newsletter</h2>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} lg={6}>
                <p>
                    Want to get hand-picked content and the latest news on Ballerina delivered directly to your inbox? Then subscribe to our monthly newsletter today!
                </p>
                <iframe src="https://resources.wso2.com/l/142131/2022-01-05/b3x14k" width="100%" type="text/html" frameborder="0" allowTransparency="true" className={styles.iframe}></iframe>
                </Col>

                <Col sm={12} md={6} lg={6}> 
                    <p className={styles.linkWrap}
                        onMouseEnter={()=> {
                            setHoverBtn(true);
                        }}
                        onMouseLeave={()=> {
                            setHoverBtn(false);
                        }}
                        style={
                            (hoverBtn ? linkArrowHover : linkArrow)
                        }>
                        <a href="/community/ballerina-newsletter" target="_blank" className={styles.viewAll}>View all newsletters </a>
                    </p>
                </Col>
            </Row>
        </Col>
    );
}
