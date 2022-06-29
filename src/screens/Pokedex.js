import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })() //funcion anonima autollamable 
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();
      
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({ 
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
          
        })
      }

      setPokemons([...pokemons, ...pokemonsArray ]);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons}/>
    </SafeAreaView>
  )
}