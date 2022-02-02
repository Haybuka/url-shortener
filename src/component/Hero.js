import React from 'react';
import Grid from '@mui/material/Grid';
import '../styles/Hero.css'
import heroImage from '../images/illustration-working.svg'

function Hero() {
  return (
    <section className='Hero'>
        <Grid container spacing={0}>
            <Grid item xs={12}  md={6} lg={6} >
                <h1>
                    More than just <br /> shorter links
                      
                </h1>
                 <p>
                 Build your brand’s recognition and get detailed <br /> insights 
                 on how your links are performing.
                 </p>
                 <button>Get Started</button>
            </Grid>
            <Grid item xs={12} md={6} lg={6} className='img-div'>
                 <img src={heroImage} alt='hero image' />
            </Grid>
        </Grid>
       
    </section>
  );
}

export default Hero;
