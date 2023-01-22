import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Grid } from '@mui/material';
import PokeCard from '../../components/PokeCard';
import Navbar from "../../components/Navbar";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const endpoints = [];

    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios.all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(res => setPokemons(res));
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map(pokemon => (
            <Grid key={pokemon.data.name} item xs={2}>
              <PokeCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
