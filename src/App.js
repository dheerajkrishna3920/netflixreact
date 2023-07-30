import './App.css';
import Bnner from './Bnner';
import Navbar from './Navbar';
import Ro from './Ro';



import { requests } from './request';



function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Bnner></Bnner>


      <Ro isposter={true} title={"Trending Movies"} fetchUrl={requests.fetchTrending}></Ro>
      <Ro title={"Netflix Originals"} fetchUrl={requests.fetchNetflixOriginals}></Ro>
      <Ro title={"Top Rated"} fetchUrl={requests.fetchTopRated}></Ro>
      <Ro title={"Action Movies"} fetchUrl={requests.fetchActionMovies}></Ro>
      <Ro title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies}></Ro>
      <Ro title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies}></Ro>
      <Ro title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies}></Ro>
      <Ro title={"Documentaries"} fetchUrl={requests.fetchDocumentaries}></Ro>


    </div>
  );
}

export default App;
