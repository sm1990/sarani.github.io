import * as React from 'react';


export default function RedirectMessage(props) {
  let redirect = '';

  if (global.location.pathname.indexOf('learn') > 0) {
    // launcher = launcher + '-learn';
    redirect = <a href='/learn'>Learn</a>
  }

  if (global.location.pathname.indexOf('community') > 0) {
    // launcher = launcher + '-learn';
    redirect = <a href='/community'>Community</a>
  }

  if (global.location.pathname.indexOf('downloads') > 0) {
    // launcher = launcher + '-learn';
    redirect = <a href='/downloads'>Downloads</a>
  }

  return (
    <>
    
    <p>The content you are looking for seems to be obsolete. Please go through our new {redirect} content.</p>

  
    </>
  );
}
