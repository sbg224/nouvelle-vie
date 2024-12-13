import "./App.css";
import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";
import { useState } from "react";


const pokemonList = [
{
	id: 0,
	name: "bulbasaur",
	imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
	id: 1,
	name: "charmander",
	imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
	id: 2,
	name: "squirtle",
	imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
	id: 3,
	name: "pikachu",
	imgSrc:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
	id: 4,
	name: "mew",
},
];


function App() {
const [pokemonIndex, setPokemonIndex] = useState(0);
// Fonction pour aller au Pokémon suivant
// const handleClick = () => {
// 	setPokemonIndex((pokemonIndex)
// )}

// // Fonction pour aller au Pokémon précédent
// const handlePrevious = () => {
// 	setPokemonIndex((pokemonIndex) =>
// 	pokemonIndex === 0 ? pokemonList.length - 1 : pokemonIndex - 1
// 	);
// };

return (
	<div>
		<nav className="navbar">
		{pokemonList.map((pokemon, index)=> (
			<li key={pokemon.id}>
				<button type="button" onClick={()=> setPokemonIndex(index)}>
					{pokemon.name}
				</button>
				</li>
		))}
		</nav>
	<MyTitle />
	<PokemonCard pokemon={pokemonList[pokemonIndex]} />
	{/* <button type="button" onClick={handlePrevious}>
		Précédent
	</button>
	<button type="button" onClick={handleNext}>
		Suivant
	</button> */}
	</div>
);
}

export default App;