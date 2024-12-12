import "./App.css";
import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";
import { useState } from "react";


const pokemonList = [
{
	name: "bulbasaur",
	imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
	name: "charmander",
	imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
	name: "squirtle",
	imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
	name: "pikachu",
	imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
	name: "mew",
},
];


function App() {
const [pokemonIndex, setPokemonIndex] = useState(0);

// Fonction pour aller au Pokémon suivant
const handleNext = () => {
	setPokemonIndex((pokemonIndex) =>
	pokemonIndex === pokemonList.length - 1 ? 0 : pokemonIndex + 1
	);
};

// Fonction pour aller au Pokémon précédent
const handlePrevious = () => {
	setPokemonIndex((pokemonIndex) =>
	pokemonIndex === 0 ? pokemonList.length - 1 : pokemonIndex - 1
	);
};

return (
	<div>
	<MyTitle />
	<PokemonCard pokemon={pokemonList[pokemonIndex]} />
	<button type="button" onClick={handlePrevious}>
		Précédent
	</button>
	<button type="button" onClick={handleNext}>
		Suivant
	</button>
	</div>
);
}

export default App;