import { useEffect, useState } from 'react';
import axios from 'axios';

import { HomeContainer, CardsArea } from './styles';

import { Card } from '../../components/Card';

export default function Home() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=3&offset=5')
      .then(response => setPokeList(response.data.results));
  }, []);

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
