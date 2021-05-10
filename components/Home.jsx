import React from 'react';
import Data from '../projects.json';
import Layout from './Layout';
import './Home.css'
function Home() {
    return ( <div>
    <Layout>
      <h1 className="Text">This is a presentation site for all the projects I have worked on in the last year</h1>
        <div> {Data.map((data,index) => {
            return <div key={data.id} className="ContainerText">
              <h2 >{data.about}</h2>
              <h3>{data.text}</h3>
              <h3 >{data.LinkLinkdin}</h3>
              <h3 >{data.LinkGithup}</h3>
              <h1>{data.name}</h1>
              <h2>{data.descriere}</h2>
              <h3>{data.use}</h3>
              <a className ="link1" href={data.link}>Go to source code</a>
              <a className ="link2" href={data.link}>Go to Google Play</a>
              
            <div style={{height:"auto"}}>
               <img className="img" src ={data.image}/>
            </div>

         </div>
       
            })}
         </div>
            </Layout>
         </div>
            
    )
}

export default Home;