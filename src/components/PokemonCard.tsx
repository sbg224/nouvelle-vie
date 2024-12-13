interface TypePokemon {
	pokemon:{
		id: number;
		name: string;
		imgSrc?: string;
	}
}


function PokemonCard({pokemon}:TypePokemon) {
	
// const pokemon = { name: "mew", imgSrc: null };
	
	return (
		<figure>
			{pokemon.imgSrc != null ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
			
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
	
}

export default PokemonCard;
