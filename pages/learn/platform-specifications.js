import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col } from 'react-bootstrap';
import MarkdownNavbar from 'markdown-navbar';
import remarkGfm from 'remark-gfm';
// import MarkdownNavbar from 'react-markdown-navbar';
import Image from 'next-image-export-optimizer';
import rehypeRaw from 'rehype-raw';
import Head from 'next/head';
// import dynamic from 'next/dynamic';
// import slug from 'rehype-slug';
// import toc from 'rehype-toc';
// import autoheadings from 'rehype-autolink-headings';

import { getHighlighter, setCDN } from "shiki";

setCDN("https://unpkg.com/shiki/");


import Layout from '../../layouts/LayoutDocs';
import LeftNav from '../../components/common/left-nav/LeftNav';
import PrevNext from '../../components/common/prev-next/PrevNext';
import { prefix } from '../../utils/prefix';





export async function getStaticProps() {

  const fileName = fs.readFileSync(`spec/spec.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  const id = 'platform-specification';

  return {
    props: {
      frontmatter,
      content,
      id
    },
  };
}


export default function PostPage({ frontmatter, content, id }) {

  // const MarkdownNavbar = dynamic(() => import('react-markdown-navbar'), { ssr: false });

  const HighlightSyntax = (code,language) => {
    const [codeSnippet, setCodeSnippet] = React.useState([]);
    if (language=='proto') {
      language = 'ballerina';
    }
    React.useEffect( () => { 

      async function fetchData() {
          getHighlighter({
            theme: "nord",
            langs: ['bash', 'ballerina', 'toml', 'yaml', 'sh', 'json', 'graphql', 'sql']
          }).then((highlighter) => {
            setCodeSnippet(highlighter.codeToHtml(code,language));
          })
      }
      fetchData();
    }, [code,language]);

    return [codeSnippet]
  }

  return (
    <>
      <Head>
        <meta name="description" content={frontmatter.description}/>
        <meta name="keywords" content={frontmatter.keywords}/>

        <title>{frontmatter.title}</title>

        {/* <!--FB--> */}
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={`Ballerina - ${frontmatter.title}`}/>
        <meta property="og:description" content={frontmatter.description}></meta>
        
        {/* <!--LINKED IN  --> */}
        <meta property="og:description" content={frontmatter.description}/>

        {/* <!--TWITTER--> */}
        <meta property="twitter:description" content={frontmatter.description}/>
        <meta property="twitter:text:description" content={frontmatter.description}/>

      </Head>
      <Layout>     
        <Col sm={3} xxl={2} className='leftNav d-none d-sm-block'>
          <LeftNav launcher='learn' id={id}/>
        </Col>
        <Col xs={12} className='d-block d-sm-none'>Mobile Left Nav</Col>
        <Col xs={12} sm={7} xxl={8} className='mdContent'>
          <Container>
            <div className='topRow'>
              <Col xs={11}><h1>{frontmatter.title}</h1></Col>
              <Col xs={1} className="gitIcon">
                <Image src={`${prefix}/images/github.svg`} height={20} width={20} alt="Edit in github"/>
              </Col>
            </div>
            
            <ReactMarkdown 
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <div dangerouslySetInnerHTML={{__html: HighlightSyntax(String(children).replace(/\n$/, ''),match[1].toLowerCase())}} />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
              rehypePlugins={[rehypeRaw]} 
              remarkPlugins={[remarkGfm]} 
            >
              {content}
            </ReactMarkdown>

            <div className='contentNav'>
              <PrevNext/>
            </div>
          </Container>
        </Col>
        <Col sm={2} className='pageToc d-none d-sm-block'>
          <h6>On this page</h6>
          <MarkdownNavbar 
          source={content} 
          ordered={false} 
          headingTopOffset={150}
          declarative/>
        </Col>
      </Layout>
    </>
  );
}
