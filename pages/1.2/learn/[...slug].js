import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
// import ReactMarkdown from 'react-markdown';
import { Container, Col } from 'react-bootstrap';
// import MarkdownNavbar from 'markdown-navbar';
// import MarkdownNavbar from 'react-markdown-navbar';
// import Image from 'next-image-export-optimizer';
// import rehypeRaw from 'rehype-raw';
import Head from 'next/head';
// import dynamic from 'next/dynamic';
// import slug from 'rehype-slug';
// import toc from 'rehype-toc';
// import autoheadings from 'rehype-autolink-headings';

import { getHighlighter, setCDN } from "shiki";

setCDN("https://unpkg.com/shiki/");


import Layout from '../../../layouts/LayoutDocs';
// import LeftNav from '../../../components/common/left-nav/LeftNav';
// import PrevNext from '../../../components/common/prev-next/PrevNext';
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
          filex = filex.replace(/1.2\/learn\//g, "");
          // console.log(filex);
          results.push(filex);
      }
  });
  return results;
}

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = traverseFolder('1.2/learn');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.html', '').split("/"),
    },
}));
// console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
  const id = slug[slug.length-1];
  slug=slug.join('/');
  // console.log(slug);
  const fileName = fs.readFileSync(`1.2/learn/${slug}.html`, 'utf-8');
  // console.log(fileName);
  const { data: frontmatter, content } = matter(fileName);
  // const source = {source:'learn'};
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

  // const HighlightSyntax = (code,language) => {
  //   const [codeSnippet, setCodeSnippet] = React.useState([]);
    
  //   React.useEffect( () => { 

  //     async function fetchData() {
  //         getHighlighter({
  //           theme: "nord",
  //           langs: ['bash', 'ballerina', 'toml', 'yaml', 'sh', 'json', 'graphql', 'sql']
  //         }).then((highlighter) => {
  //           setCodeSnippet(highlighter.codeToHtml(code,language));
  //         })
  //     }
  //     fetchData();
  //   }, [code,language]);

  //   return [codeSnippet]
  // }



  return (
    <>
      
      <Layout>     
        {/* <Col sm={3} xxl={2} className='leftNav d-none d-sm-block'>
          <LeftNav launcher='learn' id={id}/>
        </Col>
        <Col xs={12} className='d-block d-sm-none'>Mobile Left Nav</Col> */}
        <Col xs={12} className='mdContent'>
          <Container dangerouslySetInnerHTML={{__html: content}}/>
            
          
        </Col>
       
      </Layout>
    </>
  );
}
