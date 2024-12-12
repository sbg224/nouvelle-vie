import "./App.css";
import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
	{
		name: "MoussaThouuu",
		imgSrc:
			"https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_640.png",
	},
];
function App() {
	return (
		<div>
			<MyTitle />
			<PokemonCard pokemon ={pokemonList[2]} />
		</div>
	);
}

export default App;
