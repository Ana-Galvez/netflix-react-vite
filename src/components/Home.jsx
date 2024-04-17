import React from 'react';
import '../styled/Home.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from '../features/Requests';

const Home = () => {
  return (
    <div className='home'>
      <Nav/>
      <Banner/>
      <Row 
        title='Originales de Netflix'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
        title='Originales de Amazon Prime'
        fetchUrl={requests.fetchAmazonPrimeOriginals}
      />
      <Row 
        title='Tendencias'
        fetchUrl={requests.fetchTrading}
      />
      <Row 
        title='Mejores Puntuados'
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title='De Acción'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row 
        title='De Comedia'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
        title='Documentales'
        fetchUrl={requests.fetchDocumentaries}
      />
      <Row 
        title='De Terror'
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
        title='De Romance'
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  )
}

export default Home