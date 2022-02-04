import { useState, useEffect } from 'react';
import axios from 'axios';

import { CardContainer } from "./styles";

export function Card({ data }) {
  const [pokeInfo, setPokeInfo] = useState({});
  const [pokeImage, setPokeImage] = useState('');

  useEffect(() => {
    axios.get(`${data.url}`).then(response => {
      setPokeInfo(response.data);
      setPokeImage(response.data.sprites.other.dream_world.front_default);
    });
  }, [data.url]);

  console.log(pokeInfo);

  return (
    <CardContainer>
      {data.name}
      <img src={pokeImage} alt="Pokemon" />
    </CardContainer>
  )
}
