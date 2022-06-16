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

   const [hoverBtn1, setHoverBtn1] = React.useState(false);
   const [hoverBtn2, setHoverBtn2] = React.useState(false);
   const [hoverBtn3, setHoverBtn3] = React.useState(false);
   const [hoverBtn4, setHoverBtn4] = React.useState(false);
   const [hoverBtn5, setHoverBtn5] = React.useState(false);
   const [hoverBtn6, setHoverBtn6] = React.useState(false);
   const [hoverBtn7, setHoverBtn7] = React.useState(false);
   const [hoverBtn8, setHoverBtn8] = React.useState(false);
   const [hoverBtn9, setHoverBtn9] = React.useState(false);
   const [hoverBtn10, setHoverBtn10] = React.useState(false);

   React.useEffect(() => {
      
      if (osName.indexOf('Linux') > -1) {
         setKey1('Linux')
         setKey2('Linux')
      }
      if (osName.indexOf('Mac') > -1) {
         setKey1('Mac')
         setKey2('Mac')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [osName])


   let vsCodeImagePath = prefix + '/images/downloads/vs-code.svg';
   let windowsImagePath = prefix + '/images/downloads/windows.svg';
   let linuxImagePath = prefix + '/images/downloads/linux.svg';
   let macImagePath = prefix + '/images/downloads/mac.svg';
   let downloadIconPath = prefix + '/images/download-bg.svg';
   let downloadIconHoverPath = prefix + '/images/download-bg-white.svg';

   const vscodeIcon = {
      backgroundImage: 'url('+ vsCodeImagePath +')'
   }

   const windowsIcon = {
      backgroundImage: 'url('+ windowsImagePath +')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
   }

   const linuxIcon = {
      backgroundImage: 'url('+ linuxImagePath +')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
   }

   const macIcon = {
      backgroundImage: 'url('+ macImagePath +')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
   }

   const downloadIcon = {
      backgroundImage: 'url('+ downloadIconPath +')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left 20px top 20px'
   }

   const downloadIconHover = {
      backgroundImage: 'url('+ downloadIconHoverPath +')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left 20px top 20px',
      backgroundColor: '#20b6b0'
   }


   const Windows = <span style={windowsIcon}>Windows</span>
   const Linux = <span style={linuxIcon}>Linux</span>
   const Mac = <span style={macIcon}>macOs</span>

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

            <Row className='donwloadVersion pageContentRow'>
               <Col xs={12}>
                  <p>If you are new to Ballerina, download the relevant Ballerina distribution based on your operating system and install it.</p>
               </Col>
            </Row>

            <Row className='donwloadVersion pageContentRow'>
               <Col xs={12} sm={12} md={4} lg={4}>
                  <h3 className="cWindows" style={windowsIcon}>Windows</h3>
                  <a id="packWindows" 
                     href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}" 
                     className="cGTMDownload cDownload cDownloadNew" 
                     data-download="downloads" 
                     data-pack="{{ site.data.swanlake-latest.metadata.windows-installer }}"
                     onMouseEnter={()=> {
                        setHoverBtn1(true);
                     }}
                     onMouseLeave={()=> {
                        setHoverBtn1(false);
                     }}
                     style={
                        (hoverBtn1 ? downloadIconHover : downloadIcon)
                     }>
                     <div className="cSize">msi <span id="packWindowsName">xxx</span></div>
                  </a>
                  <ul className="cDiwnloadSubLinks">
                     <li><a id="packWindowsMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.md5">md5</a></li>
                     <li><a id="packWindowsSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.sha1">SHA-1</a></li>
                     <li><a id="packWindowsAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.asc">asc</a></li>
                  </ul>
               </Col>
               <Col xs={12} sm={12} md={4} lg={4}>
                  <h3 className="cLinux" style={linuxIcon}>Linux </h3>
                  <div className='dVersions'>
                     <div className='dVersion'>
                        <a id="packLinux" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}" 
                        className="cGTMDownload cDownload cLinuxPKGs  cDownloadNew" 
                        data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.linux-installer }}"
                        onMouseEnter={()=> {
                           setHoverBtn2(true);
                        }}
                        onMouseLeave={()=> {
                           setHoverBtn2(false);
                        }}
                        style={
                           (hoverBtn2 ? downloadIconHover : downloadIcon)
                        }>
                           <div className="cSize">deb <span id="packLinuxName">154mb</span></div>
                        </a>
                        <ul className="cDiwnloadSubLinks">
                           <li><a id="packLinuxMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.md5">md5</a></li>
                           <li><a id="packLinuxSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.sha1">SHA-1</a></li>
                           <li><a id="packLinuxAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.asc">asc</a></li>
                        </ul>
                     </div>
                     <div className='dVersion'>
                        <a id="packLinux" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}" 
                        className="cGTMDownload cDownload cLinuxPKGs cDownloadNew" 
                        data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.rpm-installer }}"
                        onMouseEnter={()=> {
                           setHoverBtn3(true);
                        }}
                        onMouseLeave={()=> {
                           setHoverBtn3(false);
                        }}
                        style={
                           (hoverBtn3 ? downloadIconHover : downloadIcon)
                        }>
                           <div className="cSize">rpm <span id="packLinuxName">154mb</span></div>
                        </a>
                        <ul className="cDiwnloadSubLinks">
                           <li><a id="packLinuxMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.md5">md5</a></li>
                           <li><a id="packLinuxSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.sha1">SHA-1</a></li>
                           <li><a id="packLinuxAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.asc">asc</a></li>
                        </ul>
                     </div>
                  </div>
               </Col>
               <Col xs={12} sm={12} md={4} lg={4}>
                  <h3 className="cMac" style={macIcon}>macOS</h3>
                  <a id="packMac" 
                     href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}" 
                     className="cGTMDownload cDownload cDownloadNew" 
                     data-download="downloads" 
                     data-pack="{{ site.data.swanlake-latest.metadata.macos-installer }}"
                     onMouseEnter={()=> {
                        setHoverBtn4(true);
                     }}
                     onMouseLeave={()=> {
                        setHoverBtn4(false);
                     }}
                     style={
                        (hoverBtn4 ? downloadIconHover : downloadIcon)
                     }>
                     <div className="cSize">pkg <span id="packWindowsName">xxx</span></div>
                  </a>
                  <ul className="cDiwnloadSubLinks">
                     <li><a id="packMacMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.md5">md5</a></li>
                     <li><a id="packMacSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.sha1">SHA-1</a></li>
                     <li><a id="packMacAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.asc">asc</a></li>
                  </ul>
               </Col>
            </Row>

            <Row className='donwloadVersion pageContentRow'>
               <Col xs={12}>
               <div className="releaseLinks">
                     <div className="cReleaseNotes">
                        <p><a href={`${prefix}/downloads/swan-lake-release-notes/`}>RELEASE NOTES &gt;</a></p>
                     </div>
                     <div className="cReleaseNotes">
                        <p><a href={`${prefix}/downloads/swan-lake-archived`}>ARCHIVED VERSIONS &gt;</a></p>
                     </div>
                  </div>
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
                  <a id="packWindows" href="https://marketplace.visualstudio.com/items?itemName=wso2.ballerina" 
                  className="cGTMDownload cDownload cDownloadNew" data-download="downloads" 
                  target="_blank" rel="noreferrer"
                  onMouseEnter={()=> {
                     setHoverBtn5(true);
                  }}
                  onMouseLeave={()=> {
                     setHoverBtn5(false);
                  }}
                  style={
                     (hoverBtn5 ? downloadIconHover : downloadIcon)
                  }>
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

            <Row className='donwloadVersion pageContentRow'>
               <Col xs={12} sm={12} md={4} lg={4}>
                  <h3 className="cWindows" style={windowsIcon}>Windows</h3>
                  <a id="packWindows" 
                     href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}" 
                     className="cGTMDownload cDownload cDownloadNew" 
                     data-download="downloads" 
                     data-pack="{{ site.data.swanlake-latest.metadata.windows-installer }}"
                     onMouseEnter={()=> {
                        setHoverBtn1(true);
                     }}
                     onMouseLeave={()=> {
                        setHoverBtn1(false);
                     }}
                     style={
                        (hoverBtn1 ? downloadIconHover : downloadIcon)
                     }>
                     <div className="cSize">msi <span id="packWindowsName">xxx</span></div>
                  </a>
                  <ul className="cDiwnloadSubLinks">
                     <li><a id="packWindowsMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.md5">md5</a></li>
                     <li><a id="packWindowsSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.sha1">SHA-1</a></li>
                     <li><a id="packWindowsAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.windows-installer }}.asc">asc</a></li>
                  </ul>
               </Col>
               <Col xs={12} sm={12} md={4} lg={4}>
                  <h3 className="cLinux" style={linuxIcon}>Linux </h3>
                  <div className='dVersions'>
                     <div className='dVersion'>
                        <a id="packLinux" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}" 
                        className="cGTMDownload cDownload cLinuxPKGs  cDownloadNew" 
                        data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.linux-installer }}"
                        onMouseEnter={()=> {
                           setHoverBtn2(true);
                        }}
                        onMouseLeave={()=> {
                           setHoverBtn2(false);
                        }}
                        style={
                           (hoverBtn2 ? downloadIconHover : downloadIcon)
                        }>
                           <div className="cSize">deb <span id="packLinuxName">154mb</span></div>
                        </a>
                        <ul className="cDiwnloadSubLinks">
                           <li><a id="packLinuxMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.md5">md5</a></li>
                           <li><a id="packLinuxSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.sha1">SHA-1</a></li>
                           <li><a id="packLinuxAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.linux-installer }}.asc">asc</a></li>
                        </ul>
                     </div>
                     <div className='dVersion'>
                        <a id="packLinux" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}" 
                        className="cGTMDownload cDownload cLinuxPKGs cDownloadNew" 
                        data-download="downloads" data-pack="{{ site.data.swanlake-latest.metadata.rpm-installer }}"
                        onMouseEnter={()=> {
                           setHoverBtn3(true);
                        }}
                        onMouseLeave={()=> {
                           setHoverBtn3(false);
                        }}
                        style={
                           (hoverBtn3 ? downloadIconHover : downloadIcon)
                        }>
                           <div className="cSize">rpm <span id="packLinuxName">154mb</span></div>
                        </a>
                        <ul className="cDiwnloadSubLinks">
                           <li><a id="packLinuxMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.md5">md5</a></li>
                           <li><a id="packLinuxSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.sha1">SHA-1</a></li>
                           <li><a id="packLinuxAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.rpm-installer }}.asc">asc</a></li>
                        </ul>
                     </div>
                  </div>
               </Col>
               <Col xs={12} sm={12} md={4} lg={4}>
                  <h3 className="cMac" style={macIcon}>macOS</h3>
                  <a id="packMac" 
                     href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}" 
                     className="cGTMDownload cDownload cDownloadNew" 
                     data-download="downloads" 
                     data-pack="{{ site.data.swanlake-latest.metadata.macos-installer }}"
                     onMouseEnter={()=> {
                        setHoverBtn4(true);
                     }}
                     onMouseLeave={()=> {
                        setHoverBtn4(false);
                     }}
                     style={
                        (hoverBtn4 ? downloadIconHover : downloadIcon)
                     }>
                     <div className="cSize">pkg <span id="packWindowsName">xxx</span></div>
                  </a>
                  <ul className="cDiwnloadSubLinks">
                     <li><a id="packMacMd5" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.md5">md5</a></li>
                     <li><a id="packMacSha1" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.sha1">SHA-1</a></li>
                     <li><a id="packMacAsc" href="{{ site.dist_server }}/downloads/{{ site.data.swanlake-latest.metadata.version }}/{{ site.data.swanlake-latest.metadata.macos-installer }}.asc">asc</a></li>
                  </ul>
               </Col>
            </Row>
            
            <Row className='donwloadVersion pageContentRow'>
               <Col xs={12}>
                  <div className="releaseLinks">
                     <div className="cReleaseNotes">
                        <p><a href={`${prefix}/downloads/1.2.x-release-notes`}>RELEASE NOTES &gt;</a></p>
                     </div>
                     <div className="cReleaseNotes">
                        <p><a href={`${prefix}/downloads/1.2.x-archived`}>ARCHIVED VERSIONS &gt;</a></p>
                     </div>
                  </div>
               </Col>
            </Row>

            <Row className="downloadsVSCode pageContentRow">
               <Col xs={12} sm={12} md={4} lg={4}>
                  <h3 className="cVSCode" style={vscodeIcon}>Visual Studio Code</h3>
                  <a id="packWindows" href="https://github.com/wso2/ballerina-plugin-vscode/releases/tag/v2.1.1" 
                  className="cGTMDownload cDownload cDownloadNew" data-download="downloads" 
                  target="_blank" rel="noreferrer"
                  onMouseEnter={()=> {
                     setHoverBtn10(true);
                  }}
                  onMouseLeave={()=> {
                     setHoverBtn10(false);
                  }}
                  style={
                     (hoverBtn10 ? downloadIconHover : downloadIcon)
                  }>
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
         </Col>
      </Layout>
    
  );
}
