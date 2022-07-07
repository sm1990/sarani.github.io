import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col } from 'react-bootstrap';
import MarkdownNavbar from 'markdown-navbar';
import remarkGfm from 'remark-gfm';
import Image from 'next-image-export-optimizer';
import rehypeRaw from 'rehype-raw';
import Head from 'next/head';


import { getHighlighter, setCDN } from "shiki";

setCDN("https://unpkg.com/shiki/");


import Layout from '../../../layouts/LayoutSpec';
import LeftNav from '../../../components/common/left-nav/LeftNav';
import PrevNext from '../../../components/common/prev-next/PrevNext';
import { prefix } from '../../../utils/prefix';



var traverseFolder = function(dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function(file) {
      var filex = dir + '/' + file;
      var stat = fs.statSync(filex);
      if (stat && stat.isDirectory()) { 
          /* Recurse into a subdirectory */
          results = results.concat(traverseFolder(filex));
      } else { 
          /* Is a file */
          filex = filex.replace(/spec\/lang\//g, "");
          console.log(filex);
          results.push(filex);
      }
  });
  return results;
}

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = traverseFolder('spec/lang');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('index.html', '').split("/"),
    },
}));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  slug=slug.join('/');
  const fileName = fs.readFileSync(`spec/lang/${slug}/index.html`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  // const source = {source:'learn'};
  return {
    props: {
      frontmatter,
      content
    },
  };
}


export default function PostPage({ frontmatter, content }) {

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


        <link rel="stylesheet" href={`${prefix}/spec/ballerina-language-specification.css`}/>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
{/* <script src={`${prefix}/spec/ballerina-language-specification.js`}></script> */}
      </Head>
      <Layout>     
        <Col xs={12} className='mdContentSpec'>
          {/* <Container>
            <Row className='topRowSpec'>
              <Col xs={12}>
                <a href='/'><Image src={`${prefix}/images/ballerina-logo.svg`} height={37} width={199} alt="Ballerina-logo"/></a>
              </Col>
            </Row>
            
            <Row className='specContent'>
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
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw]}    
            >
              {content}
            </ReactMarkdown>
            </Row>
          </Container> */}

<div xs={12}>
                <a href='/'><Image src={`${prefix}/images/ballerina-logo.svg`} height={37} width={199} alt="Ballerina-logo"/></a>
              </div>
          <div dangerouslySetInnerHTML={{__html: content}}/>
        </Col>

      </Layout>
    </>
  );
}
