import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
const { pokemons } = props;
  return (
    <FlatList 
        data={pokemons}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(pokemon, index) => String(index)}
        renderItem={({ item }) => <PokemonCard pokemon={item}/>}
        contentContainerStyle={styles.contentContainerStyle}
    />
  )
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: 5, 
    }
});