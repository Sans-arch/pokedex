import { useEffect, useState } from 'react';
import axios from 'axios';

import { HomeContainer, CardsArea } from './styles';

import { Card } from '../../components/Card';

export default function Home({ offsetNumber }) {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${offsetNumber}`)
      .then(response => setPokeList(response.data.results));
  }, [offsetNumber]);

  return (
    <HomeContainer>
      <CardsArea>
        {pokeList.map((pokemon, index) => (
          <Card data={pokemon} key={index} />
        ))}
      </CardsArea>
    </HomeContainer>
  )
}
