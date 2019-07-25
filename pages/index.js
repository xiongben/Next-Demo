

import Head from 'next/head'
import React from 'react'


// export default class extends React.Component {

// }
export default () => 
<div>
<Head>
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
</Head>
<h1 className="title">hhhhhhh</h1>
<img src="/static/aa.png" alt="pic"/>
<style jsx>{`
  .title{
      color:red;
      font-size:20px;
  }
  img{
      width:200px;
      
  }
`}</style>
</div>