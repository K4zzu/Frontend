import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import ProductDetail2 from "./products/detail/ProductDetail2";
import ProductDetail3 from "./products/detail/ProductDetail3";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import CharacterList from "./products/Characters";
import { useEffect, useState } from "react";
import Pagination from "./products/Pagination";
import Reserva from "./products/detail/Reserva";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initalUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log('ERRRRORRR', error)) 
  }

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initalUrl);
  }, [])


  return (
    <Template>
      <Switch>
        <Route path="/products" exact>
          <Pagination 
            prev={info.prev} 
            next={info.next}
            onPrevious={onPrevious} 
            onNext={onNext}
          />
          <CharacterList characters={characters} />
          <Pagination 
            prev={info.prev} 
            next={info.next}
            onPrevious={onPrevious} 
            onNext={onNext}
          />
        </Route>
        <Route path="/products/1">
          <ProductDetail />
        </Route>
        <Route path="/products/2">
          <ProductDetail2/>
        </Route>
        <Route path="/products/3">  
          <ProductDetail3/>
        </Route>

        <Route path="/reserva">  
          <Reserva/>
        </Route>

        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
