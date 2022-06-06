import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import LearnToc from '../../../files1.json';
import { prefix } from '../../../utils/prefix';
import styles from './LeftNav.module.css';

export default function LeftNav(props) {
  const launcher = props.launcher;
  let id = props.id;
  const Elements = LearnToc.subDirectories;

  function comparePositions(a, b) {
    return a.position - b.position;
  }
  
  const SortedDir = Elements.sort(comparePositions);

  function MainDir(props) {
    let category = props.category;
    
    return  <Accordion.Item eventKey={category.id}>
              <Accordion.Header>{category.dirName}</Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <ul className={styles.firstTier}>
                {
                (category.subDirectories) ?
                  <SubDir directories={category.subDirectories}/>
                : <li key={category.dirName}>{category.dirName}</li>
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
        <Accordion>
          <Accordion.Item eventKey={directory.id}>
            <Accordion.Header>{directory.dirName}</Accordion.Header>
            <Accordion.Body>
              <ul className={styles.secondTier}>
                <SubDir directories={directory.subDirectories}/>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
       </> 
        : 
          (directory.position > 0) ?
            <li key={directory.dirName}>
              <a id={directory.id} className={(id === directory.id)? "active":null} 
                href={(`${prefix}`)? `${prefix}` + directory.url : '' + directory.url}>
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
    
    <Accordion defaultActiveKey="get-started" flush className={styles.leftNavAccordian}>
      {SortedDir.map((category) => (

        (launcher === 'learn' && category.position > 0) ?
          <MainDir category={category}/>
        
        : (launcher === 'why-bal'  && category.dirName === 'why ballerina') ?
            <MainDir category={category}/>
          : null
      ))}
    </Accordion>

  
    </>
  );
}
