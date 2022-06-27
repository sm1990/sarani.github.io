import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col } from 'react-bootstrap';
import MarkdownNavbar from 'markdown-navbar';
import Image from 'next-image-export-optimizer';
import rehypeRaw from 'rehype-raw';
import Head from 'next/head';
import { getHighlighter, setCDN } from "shiki";

setCDN("https://unpkg.com/shiki/");

import Layout from '../../../layouts/LayoutDocs';
import LeftNav from '../../../components/common/left-nav/LeftNav';
import NewsletterSubscription from '../../../components/common/newsletter-subscription/NewsletterSubscription';
// import { prefix } from '../../utils/prefix';


// var traverseFolder = function(dir) {
//   var results = [];
//   var list = fs.readdirSync(dir);
//   list.forEach(function(file) {
//       var filex = dir + '/' + file;
//       var stat = fs.statSync(filex);
//       if (stat && stat.isDirectory()) { 
//           /* Recurse into a subdirectory */
//           results = results.concat(traverseFolder(filex));
//       } else { 
//           /* Is a file */
//           filex = filex.replace(/swan-lake\/why-ballerina\//g, "");
//           results.push(filex);
//       }
//   });
//   return results;
// }

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = fs.readdirSync('community/newsletter');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '').split("/"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // const id = slug[slug.length-1];
  // slug=slug.join('/');
  const fileName = fs.readFileSync(`community/newsletter/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content
    },
  };
}

export default function PostPage({ frontmatter, content, id }) {

  const HighlightSyntax = (code,language) => {
    const [codeSnippet, setCodeSnippet] = React.useState([]);
    
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
        <Col sm={12} md={8} lg={8} className='newsletter'> 
          <div className='topRow'>
            <Col xs={12}><h1>{frontmatter.title}</h1></Col>
          </div>
          <ReactMarkdown 
              components={{
                // Map `h1` (`# heading`) to use `h2`s.
                pre: 'div',
                code: 'div'
                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                // em: ({node, ...props}) => <i style={{color: 'red'}} {...props} />
              }}
              
              rehypePlugins={[rehypeRaw]}
            >
              {content}
          </ReactMarkdown>
        </Col>

        <Col sm={12} md={4} lg={4} className="subscriptionCol">
          <NewsletterSubscription/>
        </Col>
        
        
        
        
      </Layout>
    </>
  );
}
