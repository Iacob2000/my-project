import React from 'react';
import Layout from '../components/Layout';
import Data from '../about.json';
import './About.css';

function About() {
    return (<div>
    <Layout>
            <div> {Data.map((data,index) => {
                return <div className="view"  key={data.id} >
                  <h1 >{data.nume}</h1>
                  <h2>{data.about}</h2>
                  <h2>{data.experince}</h2>
                  <h2>{data.description}</h2>
                  <h3>{data.phone}</h3>
                  <h3>{data.email}</h3>
                  <a className="link" href='https://github.com/Iacob2000'>Githup account</a>
                  <h2>{data.thanks}</h2>
                  </div>  
                })}
             </div>
    </Layout>
            </div>
                
        )
    }


export default About;

