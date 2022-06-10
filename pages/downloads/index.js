import React from 'react';
import { Alert, Container, Row, Stack, Col, Tabs, Tab} from 'react-bootstrap';
import Image from 'next-image-export-optimizer';
import Link from 'next/link';
import { osName } from 'react-device-detect';
import Layout from '../../layouts/LayoutDownloads';
import { prefix } from '../../utils/prefix';

export default function Downloads() {

   const [key1, setKey1] = React.useState('Windows');
   const [key2, setKey2] = React.useState('Windows');

   React.useEffect(() => {
      
      if (osName.indexOf('Linux') > -1) {
         setKey1('Linux')
         setKey2('Linux')
      }
      if (osName.indexOf('Mac') > -1) {
         setKey1('Mac')
         setKey2('Mac')
      }
   }, [osName])


   let imagePath = '';
  
   if({prefix}) {
      imagePath = prefix + '/images/downloads/vs-code.svg'
   }

   const vscodeIcon = {
      backgroundImage: 'url('+ imagePath +')',
   }

   return (
      <Layout>
         <Col sm={12}>
         <Row className="cDownloadsHeader pageHeader pageContentRow">
            <Col xs={12}>
               <h1>Downloads</h1> 
            </Col>
         </Row>

         <Row className='donwloadVersion pageContentRow'>
            <Col xs={12}>
               <h2 id="swanlake"><span>2201.0.3 (Swan Lake)</span></h2>
            </Col>
         </Row>

         <Row className='downloadDetails pageContentRow'>
         <Col xs={12} sm={4} className="downloads-tabs">
               <Tabs id="swan-lake-releases" 
                     activeKey={key1} 
                     onSelect={(x) => setKey1(x)} 
                     className="mb-3">
                  <Tab eventKey="Windows" title="Windows">
                     <a id="packWindows" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}" className="cGTMDownload cDownload cDownloadNew" data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.windows-installer }}">
                        <div className="cSize">msi <span id="packWindowsName">154mb</span></div>
                     </a>
                     <ul className="cDiwnloadSubLinks">
                     <li><a id="packWindowsMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.md5">md5</a></li>
                     <li><a id="packWindowsSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.sha1">SHA-1</a></li>
                     <li><a id="packWindowsAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.asc">asc</a></li>
                     </ul>
                  </Tab>
                  <Tab eventKey="Linux" title="Linux">
                     <div className='dVersions'>
                        <div className='dVersion'>
                           <a id="packLinux" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}" className="cGTMDownload cDownload cLinuxPKGs  cDownloadNew" data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.linux-installer }}">
                              <div className="cSize">deb <span id="packLinuxName">154mb</span></div>
                           </a>
                           <ul className="cDiwnloadSubLinks">
                              <li><a id="packLinuxMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.md5">md5</a></li>
                              <li><a id="packLinuxSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.sha1">SHA-1</a></li>
                              <li><a id="packLinuxAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.asc">asc</a></li>
                           </ul>
                        </div>
                        <div className='dVersion'>
                           <a id="packLinux" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}" className="cGTMDownload cDownload cLinuxPKGs cDownloadNew" data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.rpm-installer }}">
                              <div className="cSize">rpm <span id="packLinuxName">154mb</span></div>
                           </a>
                           <ul className="cDiwnloadSubLinks">
                              <li><a id="packLinuxMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.md5">md5</a></li>
                              <li><a id="packLinuxSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.sha1">SHA-1</a></li>
                              <li><a id="packLinuxAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.asc">asc</a></li>
                           </ul>
                        </div>
                     </div>
                  </Tab>
                  <Tab eventKey="Mac" title="macOS">
                     <a id="packMac" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}" className="cGTMDownload cDownload cDownloadNew" data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.macos-installer }}">
                        <div className="cSize">pkg <span id="packWindowsName">154mb</span></div>
                     </a>
                     <ul className="cDiwnloadSubLinks">
                        <li><a id="packMacMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.md5">md5</a></li>
                        <li><a id="packMacSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.sha1">SHA-1</a></li>
                        <li><a id="packMacAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.asc">asc</a></li>
                     </ul>
                  </Tab>
               </Tabs>


               <div className="releaseLinks">
                  <div className="cReleaseNotes">
                  <p><a href={`${prefix}/downloads/swan-lake-release-notes/`}>RELEASE NOTES &gt;</a></p>
                  </div>
                  <div className="cReleaseNotes">
                  <p><a href={`${prefix}/downloads/swan-lake-archived`}>ARCHIVED VERSIONS &gt;</a></p>
                  </div>
               </div>

            </Col>
            <Col xs={12} sm={8} className="donwloadInstructions">
               <Alert variant="light">
                  <p><strong>If you are already using Ballerina 2201.0.0 (Swan Lake)</strong>, run either of the commands below to directly update to swanlake 22.xxxx using the <a href={`${prefix}/learn/tooling-guide/cli-tools/update-tool/`}>Ballerina Update Tool.</a></p>
                  <p><code className="highlighter-rouge language-plaintext">bal dist update</code> (or <code className="highlighter-rouge language-plaintext">bal dist pull swanlake 22.xx)</code></p>
                  <p><strong>If you are using a version below 2201.0.0 (Swan Lake)</strong>, run the commands below to update to swanlake 22.xx.</p>
                  
                  <ol>
                     <li>Run bal update to get the latest version of the update tool.</li>
                     <li>Run bal dist update (or bal dist pull 2201.0.3) to update your Ballerina version to 2201.0.3 (Swan Lake).</li>
                  </ol>
                  
                  <p>However, if you are using a version below 2201.0.0 (Swan Lake) and if you already ran <code className="highlighter-rouge language-plaintext">bal dist update</code> (or <code className="highlighter-rouge language-plaintext">bal dist pull swanlake 22.xxx)</code> before <code className="highlighter-rouge language-plaintext">bal update</code>, see <Link href={`${prefix}/downloads/swan-lake-release-notes/2201-0-0-swan-lake/#troubleshooting`}>Troubleshooting</Link> to recover your installation.</p>
               </Alert>
            </Col>
            
         </Row>


         <Row className="downloadsContent pageContentRow">
            <Col xs={12}>
               <p className="line-numbers">
                  To <a href={`${prefix}/learn/installing-ballerina/installation-options/#verifying-the-installation`}>verify that Ballerina was successfully installed</a>, execute 
                  the <code className="highlighter-rouge language-plaintext">bal version<span aria-hidden="true" className="line-numbers-rows"><span></span></span></code> command 
                  in the Terminal/Shell. For more information on installing Ballerina, see <a href={`${prefix}/learn/installing-ballerina/installation-options/`}>Installation options</a>.
               </p>
               <p>Next, install the Ballerina Visual Studio Code extension.</p>
            </Col>
         </Row>

         <Row className="downloadsVSCode pageContentRow">
            <Col xs={12} sm={12} md={4} lg={4}>
               <h3 className="cVSCode" style={vscodeIcon}>Visual Studio Code</h3>
               <a id="packWindows" href="https://marketplace.visualstudio.com/items?itemName=wso2.ballerina" className="cGTMDownload cDownload cDownloadNew" data-download="downloads" target="_blank" rel="noreferrer">
                  <div className="cSize">Ballerina Extension<span id="packWindowsName"></span></div>
               </a>
               <br/>
               <p>Now, you are all set to <a href={`${prefix}/learn/getting-started-with-ballerina/`}>get started with Ballerina.</a></p>
            </Col>
         </Row>

         <Row className="downloadsOther pageContentRow">
            <Col xs={12} sm={12} md={6} lg={6}>
               <div className="cInstallers">
                  <h3>Other installation options</h3>
                  <div className="">
                     <table id="insPackages0">
                        <tr> </tr>
                        <tr>
                           <td>Install via Homebrew (for macOS)
                              <a href={`${prefix}/learn/installing-ballerina/installation-options/#installing-on-macos`} className="cDownloadLinkIcon">
                                 <Image src={`${prefix}/images/right-bg-green-fill.svg`} width={13} height={13} alt="Install via Homebrew (for macOS)"/>
                              </a>
                           </td>
                        </tr>
                        <tr>
                           <td>Install via the ZIP archive
                              <a href={`${prefix}/learn/installing-ballerina/installation-options/#installing-via-the-ballerina-language-zip-file`} className="cDownloadLinkIcon">
                                 <Image src={`${prefix}/images/right-bg-green-fill.svg`} width={13} height={13} alt="Install via the ZIP archive"/>
                              </a>
                           </td>
                        </tr>
                        <tr>
                           <td>Install from source
                              <a href={`${prefix}/learn/installing-ballerina/installation-options/#building-from-source`} className="cDownloadLinkIcon">
                                 <Image src={`${prefix}/images/right-bg-green-fill.svg`} width={13} height={13} alt="Install from source"/>
                              </a>
                           </td>
                        </tr>
                     </table>
                  </div>
               </div>
            </Col>
         </Row>

         <Row className='donwloadVersion pageContentRow'>
         <Col xs={12}>
            <h2 id="swanlake"><span>1.2.29</span></h2>
         </Col>
         </Row>

         <Row className='downloadDetails pageContentRow'>
            <Col xs={12} sm={4} className="downloads-tabs">
               <Tabs id="1.2x-releases" 
                  activeKey={key2} 
                  onSelect={(y) => setKey2(y)} 
                  className="mb-3">
                  <Tab eventKey="Windows" title="Windows">
                     <a id="packWindows" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}" className="cGTMDownload cDownload cDownloadNew" data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.windows-installer }}">
                        <div className="cSize">msi <span id="packWindowsName">154mb</span></div>
                     </a>
                     <ul className="cDiwnloadSubLinks">
                        <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.windows-installer }}.md5">md5</a></li>
                        <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.windows-installer }}.sha1">SHA-1</a></li>
                        <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.windows-installer }}.asc">asc</a></li>
                     </ul>
                  </Tab>
                  <Tab eventKey="Linux" title="Linux">
                     <div className='dVersions'>
                        <div className='dVersion'>
                        <a id="packLinux" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}" className="cGTMDownload cDownload cLinuxPKGs  cDownloadNew" data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.linux-installer }}">
                           <div className="cSize">deb <span id="packLinuxName">154mb</span></div>
                        </a>
                        <ul className="cDiwnloadSubLinks">
                           <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.linux-installer }}.md5">md5</a></li>
                           <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.linux-installer }}.sha1">SHA-1</a></li>
                           <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.linux-installer }}.asc">asc</a></li>
                        </ul>
                     </div>
                     <div className='dVersion'>
                        <a id="packLinux" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}" className="cGTMDownload cDownload cLinuxPKGs cDownloadNew" data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.rpm-installer }}">
                           <div className="cSize">rpm <span id="packLinuxName">154mb</span></div>
                        </a>
                        <ul className="cDiwnloadSubLinks">
                           <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/ballerina-linux-installer-x64-{{ site.data.stable-latest.metadata.version }}.rpm.md5">md5</a></li>
                           <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/ballerina-linux-installer-x64-{{ site.data.stable-latest.metadata.version }}.rpm.sha1">SHA-1</a></li>
                           <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/ballerina-linux-installer-x64-{{ site.data.stable-latest.metadata.version }}.rpm.asc">asc</a></li>
                        </ul>
                     </div>
                  </div>
                  </Tab>
                  <Tab eventKey="Mac" title="macOS">
                     <a id="packMac" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}" className="cGTMDownload cDownload cDownloadNew" data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.macos-installer }}">
                        <div className="cSize">pkg <span id="packWindowsName">154mb</span></div>
                     </a>
                     <ul className="cDiwnloadSubLinks">
                        <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.macos-installer }}.md5">md5</a></li>
                        <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.macos-installer }}.sha1">SHA-1</a></li>
                        <li><a href="{{ site.dist_server }}/downloads/{{ site.data.stable-latest.metadata.version }}/{{ site.data.stable-latest.metadata.macos-installer }}.asc">asc</a></li>
                     </ul>
                  </Tab>
               </Tabs>

               <div className="releaseLinks pageContentRow">
                  <div className="cReleaseNotes">
                     <p><a href={`${prefix}/downloads/1.2.x-release-notes`}>RELEASE NOTES &gt;</a></p>
                  </div>
                  <div className="cReleaseNotes">
                     <p><a href={`${prefix}/downloads/1.2.x-archived`}>ARCHIVED VERSIONS &gt;</a></p>
                  </div>
               </div>

            </Col>
            <Col xs={12} sm={8} className="donwloadInstructions">
               <Alert variant="light">
                  <p> If you already have jBallerina version 1.2.0 or above installed, you can use the 
                     <a href={`${prefix}/1.2/learn/keeping-ballerina-up-to-date/`}>Ballerina update tool</a> to 
                     directly update to 1.2x. To do this, first, execute the command below to get the update tool 
                     updated to its latest version. 
                  </p> 
                  <code className="highlighter-rouge language-plaintext">ballerina update</code>
                  <p>Next, execute the command below to update to jBallerina 1.2x.</p> 
                  <code className="highlighter-rouge language-plaintext">bal dist update</code>
                  <p>For further details, see the <a href={`${prefix}/downloads/1.2.x-release-notes/`}>Release Note</a>.</p>
               </Alert>
            </Col>
            
         </Row>

         <Row className="downloadsVSCode pageContentRow">
            <Col xs={12} sm={12} md={4} lg={4}>
               <h3 className="cVSCode" style={vscodeIcon}>Visual Studio Code</h3>
               <a id="packWindows" href="https://github.com/wso2/ballerina-plugin-vscode/releases/tag/v2.1.1" className="cGTMDownload cDownload cDownloadNew" data-download="downloads" target="_blank" rel="noreferrer">
                  <div className="cSize">Ballerina Extension<span id="packWindowsName"></span></div>
               </a>
            </Col>
         </Row>

         <Row className="downloadsOther pageContentRow">
            <Col xs={12} sm={12} md={6} lg={6}>
               <div className="cInstallers">
                  <h3>Other installation options</h3>
                  <div className="">
                     <table id="insPackages0">
                        <tr>
                           <td>Install via the ZIP archive
                              <a href={`${prefix}/1.2/learn/installing-ballerina/#installing-via-the-ballerina-language-zip-file`} className="cDownloadLinkIcon" target="_blank" rel="noreferrer">
                                 <Image src={`${prefix}/images/right-bg-green-fill.svg`} width={13} height={13} alt="Install via the ZIP archive"/>
                              </a>
                           </td>
                        </tr>
                        <tr>
                           <td>Install from source
                              <a href={`${prefix}/1.2/learn/installing-ballerina/#building-from-source`} className="cDownloadLinkIcon" target="_blank" rel="noreferrer">
                                 <Image src={`${prefix}/images/right-bg-green-fill.svg`} width={13} height={13} alt="Install from source"/>
                              </a>
                           </td>
                        </tr>
                     </table>
                  </div>
               </div>
            </Col>
         </Row>

         <Row className="downloadsContent pageContentRow">
            <Col xs={12}>
               <p>To download the VSCode and IntelliJ Ballerina extensions, see <a href={`${prefix}/1.2/learn/setting-up-visual-studio-code/`}>Setting up Visual Studio Code</a> and 
               <a href={`${prefix}/1.2/learn/setting-up-intellij-idea/`}>Setting up IntelliJ IDEA</a>, and for installation instructions, see 
               <a href={`${prefix}/1.2/learn/installing-ballerina/`}>Installing Ballerina</a>. 
               </p>
            </Col>
         </Row>

         {/* </Row> */}
         </Col>
      </Layout>
    
  );
}
