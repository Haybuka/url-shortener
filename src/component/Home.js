import React,{useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid'
//component
import Hero from './Hero';
import LinkForm from './LinkForm';
import CreateList from './CreateList';
import Statistics from './Statistics';
import CardComp from './CardComp';
import  CallAction from './CallAction';
//images
import brandImg from '../images/icon-brand-recognition.svg'
import detailedRec from '../images/icon-detailed-records.svg'
import fullyCustom from '../images/icon-fully-customizable.svg'
//styles
import '../styles/Home.css'

//function begins
function Home() {
const [url,setUrl] = useState([])
const [link,setLink] = useState('')
const handleSubmit = (input) => {
  setLink(input)

}

useEffect(()=>{
  const fetchData = async (link) =>{
     const dataFetch =  await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
     .then( data => data.json())
     .then (({result}) => setUrl([{siteLink:result.original_link,shortLink:result.short_link,id:uuid(),clicked:false}]))
     .catch(e => {
       console.log(e)
       setUrl([{
        siteLink : 'Post a Valid Url',
        shortLink : '',
        id:0
       }])
     })
  }
 if(link){
   fetchData(link)
 }
},[link])

 
  return (
      <main>
             <section className='Home-div'>
               <Hero />
             </section>
             <section className='Home-react'>
               <article className='Home-react-article'>
                   <LinkForm handleSubmit={handleSubmit}/>
                  {url ? (<CreateList url={url}  />) : ''}
                  <Statistics />
                  <aside className='Home-cardComp'>
                    <CardComp 
                      header="Brand Recognition" 
                      toStyle='firstCard'
                      img={brandImg} 
                      text="Boost your brand recognition with each click. Generic links don’t 
                      mean a thing. Branded links help instil confidence in your content."/>
                    <CardComp 
                      header="Detailed Record" 
                      img={detailedRec} 
                      toStyle='secondCard'
                      text="Gain insights into who is clicking your links. Knowing when and where 
                      people engage with your content helps inform better decisions."/>
                    <CardComp 
                      header="Fully  Customizable" 
                      img={fullyCustom} 
                      toStyle='thirdCard'
                      text="Improve brand awareness and content discoverability through customizable 
                      links, supercharging audience engagement."/>
                  </aside>
               </article>
             </section>
             <CallAction />
      </main>
  );
}

export default Home;
