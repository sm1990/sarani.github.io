import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import { prefix } from '../../../utils/prefix';
import styles from './LeftNav.module.css';

export default function LeftNav(props) {
  const launcher = props.launcher;
  let id = props.id;
  let mainDir = props.mainDir;
  let sub = props.sub;
  let third = props.third;
  const Elements = props.LearnToc.subDirectories;

  function comparePositions(a, b) {
    return a.position - b.position;
  }

  function CheckActive(eventKey) {

    if (mainDir !== eventKey) {
      document.getElementById(mainDir).getElementsByTagName('button')[0].style.color = '#20b6b0';
      document.getElementById(mainDir).getElementsByTagName('button')[0].style.fontWeight = '500';
    }

    if (sub && sub !== eventKey) {
      document.getElementById(sub).getElementsByTagName('button')[0].style.color = '#20b6b0';
      document.getElementById(sub).getElementsByTagName('button')[0].style.fontWeight = '500';
    }

    if (third && third !== eventKey) {
      document.getElementById(third).getElementsByTagName('button')[0].style.color = '#20b6b0';
      document.getElementById(third).getElementsByTagName('button')[0].style.fontWeight = '500';
    }
  }



  const SortedDir = Elements.sort(comparePositions);

  function MainDir(props) {
    let category = props.category;

    return <Accordion.Item eventKey={category.id} className={styles.acItem}>
      <Accordion.Header className={styles.mainDir} onClick={() => CheckActive(category.id)} id={category.id}>{category.dirName}</Accordion.Header>
      <Accordion.Body className={styles.accordionBody}>
        <ul className={styles.firstTier}>
          {
            (category.subDirectories) ?
              <Accordion defaultActiveKey={sub}>
                <SubDir directories={category.subDirectories} activeKey={sub} />
              </Accordion>
              : null
          }
        </ul>
      </Accordion.Body>
    </Accordion.Item>;
  }

  function SubDir(props) {
    let directories = props.directories.sort(comparePositions);

    return directories.map((directory) => (
      <>
        {
          (directory.isDir && directory.position > 0) ?
            <>
              <Accordion.Item eventKey={directory.id} className={styles.acItem}>
                <Accordion.Header onClick={() => CheckActive(directory.id)} id={directory.id}>{directory.dirName}</Accordion.Header>
                <Accordion.Body className={styles.acBody}>
                  <ul className={styles.secondTier}>
                    {
                      (directory.subDirectories) ?
                        <Accordion defaultActiveKey={third}>
                          <ThirdDir directories={directory.subDirectories} activeKey={third} />
                        </Accordion>
                        : null
                    }

                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </>
            :
            (directory.position > 0) ?
              <li key={directory.id}>
                <a id={directory.id} className={(id === directory.id) ? styles.active : null}
                  href={(`${prefix}`) ? `${prefix}` + directory.url : directory.url}>
                  {directory.dirName}
                </a>
              </li>
              : null
        }
      </>

    ));
  }

  function ThirdDir(props) {
    let tdirectories = props.directories.sort(comparePositions);

    return tdirectories.map((directory) => (
      <>
        {
          (directory.isDir && directory.position > 0) ?
            <>
              <Accordion.Item eventKey={directory.id} className={styles.acItem}>
                <Accordion.Header onClick={() => CheckActive(directory.id)} id={directory.id}>{directory.dirName}</Accordion.Header>
                <Accordion.Body className={styles.acBody}>
                  <ul className={styles.secondTier}>
                    {
                      (directory.subDirectories) ?
                        <Accordion defaultActiveKey={third}>
                          <ThirdDir directories={directory.subDirectories} activeKey={third} />
                        </Accordion>
                        : null
                    }
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </>
            :
            (directory.position > 0) ?
              <li key={directory.id}>
                <a id={directory.id} className={(id === directory.id) ? styles.active : null}
                  href={(`${prefix}`) ? `${prefix}` + directory.url : directory.url}>
                  {directory.dirName}
                </a>
              </li>
              : null
        }
      </>

    ));
  }

  return (
    <>

      <Accordion defaultActiveKey={mainDir} flush className={styles.leftNavAccordian}>
        {SortedDir.map((category) => (

          {
            'learn': (category.position > 0) ? <MainDir category={category} /> : null,
            'why-bal': (category.dirName === 'Why Ballerina') ? <MainDir category={category} /> : null,
            'rn': (category.position > 0) ? <MainDir category={category} /> : null,
          }[launcher]
        ))}
      </Accordion>

    </>
  );
}
