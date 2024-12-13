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
    return(
        <nav className="navbar">
		{pokemonList.map((pokemon, index)=> (
			<li key={pokemon.id}>
				<button type="button" onClick={()=> setPokemonIndex(index)}>
					{pokemon.name}
				</button>
				</li>
		))}
		</nav>
    )
}
export default NavBar;