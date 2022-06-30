import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button, Modal} from 'react-bootstrap';
import Image from 'next-image-export-optimizer';

import Search from '../search/Search';
import { prefix } from '../../../utils/prefix';
import styles from './TopNav.module.css';

const pages = ['Download', 'Playground', 'Learn', 'Central', 'Community', 'Blog'];

const TopNav = (props) => {
  const launcher = props.launcher;
  
  if(global.location.pathname.indexOf('learn') > 0) {
    launcher = launcher + '-learn';
  }
  
  const [show, setShow] = React.useState(false);
  //const [path, setPath] = React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const router = useRouter();
  // router.push(path);
  

  return (
    <>
      <Navbar className={styles[launcher]} expand="lg" fixed='top'>
        <Container fluid>
          <Navbar.Brand href={`${prefix}/`}>
            {(launcher !== "home") ? 
              <Image src={`${prefix}/images/ballerina-logo.svg`} height={28} width={150} alt="Ballerina Logo"/> 
              : null
            }
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          {/* <Nav
              className="topNav ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            > */}
            <Nav
              className={`${styles.topNav} ms-auto my-2 my-lg-0`}
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className={(launcher === 'downloads')? `${styles.active} ${styles.navItem}` : `${styles.navItem}`} href={`${prefix}/downloads`}>Download</Nav.Link>
              <Nav.Link className={styles.navItem} href="https://play.ballerina.io/">Playground</Nav.Link>
              <Nav.Link className={(launcher === 'docs-learn')? `${styles.active} ${styles.navItem}` : `${styles.navItem}`} href={`${prefix}/learn`}>Learn</Nav.Link>
              <Nav.Link className={styles.navItem} href="https://central.ballerina.io/">Central</Nav.Link>
              <Nav.Link className={(launcher === 'community')? `${styles.active} ${styles.navItem}` : `${styles.navItem}`} href={`${prefix}/community`}>Community</Nav.Link>
              <Nav.Link className={styles.navItem} href="https://blog.ballerina.io/">Blog</Nav.Link>
              <NavDropdown title="Swan Lake" id={styles.navbarScrollingDropdown}>
                <NavDropdown.Item href={`${prefix}/learn/`}>Swan-Lake</NavDropdown.Item>
                <NavDropdown.Item href={`${prefix}/1.2/learn/`}>V 1.2</NavDropdown.Item>
                <NavDropdown.Item href={`${prefix}/1.1/learn/`}>V 1.1</NavDropdown.Item>
                <NavDropdown.Item href={`${prefix}/1.0/learn/`}>V 1.0</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              {/* <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              <Button className={styles.searchButton} aria-label="Search" onClick={handleShow}>
                <span className={styles.searchButtonContainer}>
                  <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20">
                    <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className={styles.searchButtonIcon}>Search</span>
                </span>
                <span className={styles.searchButtonKeys}>
                  <span className={styles.searchButtonKey}>
                    <svg width="15" height="15" className="DocSearch-Control-Key-Icon">
                      <path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="square"></path>
                    </svg>
                  </span>
                  <span className={styles.searchButtonKey}>K</span>
                </span>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className={styles.searchModal}>
          <Search/>
        </Modal.Body>
      </Modal>
    </>

  );
};
export default TopNav;
