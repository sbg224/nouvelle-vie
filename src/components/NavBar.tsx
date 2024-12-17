import PokemonCard from "./PokemonCard";

interface pokemon{
		id: number;
		name: string;
		imgSrc?: string;
}
  
  interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: pokemon[];
  }

function NavBar({setPokemonIndex, pokemonList }: NavBarProps ){

  const handleSelect = (index: number, name: string) => {
    setPokemonIndex(index);
    if (name.toLowerCase() === "pikachu") {
      alert("Pika Pikachu !!!");
    }
  };



	return(
		<nav className="navbar">
			{pokemonList.map((pokemon, index) => (
				<li key={pokemon.id}>
					<button type="button" onClick= {() => handleSelect(index, pokemon.name)}
					// 	if (pokemon.name.toLowerCase() === "pikachu") {
					// 	alert("Pika Pikachu !!!");
					// 	}
					// }}
						>
						{pokemon.name}
					</button>
				</li>
		))}
		</nav>
	);
}
export default NavBar;