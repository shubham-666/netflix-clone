import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './banner';
import Nav from './nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
     <Row title="NETFLIX ORIGINALS" fetchUrl ={request.fetchNetflixOriginals}
     isLargeRow={true}
     />
     <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
     <Row title="ActionMovies" fetchUrl={request.fetchActionMovies}/>
     <Row title="ComedyMovies" fetchUrl={request.fetchComedyMovies}/>
     <Row title="HorrorMovies" fetchUrl={request.fetchHorrorMovies}/>
     <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
     
   
    </div>

  );
}

export default App;
