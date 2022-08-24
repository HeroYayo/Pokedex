const pkmnName = document.querySelector('#pkmn-name');
const pkmnIndex = document.querySelector('#pkmn-index');
const pkmnImg = document.querySelector('#pkmn-sprite');
const pkmnTypes = document.querySelector('#pkmn-type')
const pkmnHp = document.querySelector('#HP');
const pkmnAtk = document.querySelector('#ATK');
const pkmnDef = document.querySelector('#DEF');
const pkmnSpAtk =document.querySelector('#SP-ATK');
const pkmnSpDef =document.querySelector('#SP-DEF');
const pkmnSpd = document.querySelector('#SPD');
const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${ value.toLowerCase() }`)
    .then(data => data.json())
    .then(response => showPokemonData(response)) 
}

const showPokemonData = data =>{
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;
    pkmnName.textContent = data.name;
    pkmnIndex.textContent = `No. ${data.id}`;
    pkmnImg.setAttribute('src', sprite);
    
	showPokemonTypes(types);
	showPokemonStats(stats);	
}

const showPokemonTypes = types =>{
	pkmnTypes.innerHTML = '';
	types.forEach(type =>{
		const textType = document.createElement('div');
		textType.classList.add('type')
		textType.style.background = colours[type.type.name];
		textType.textContent = type.type.name;
		pkmnTypes.appendChild(textType);
	})
}
const showPokemonStats = stats =>{	
	pkmnHp.textContent = `HP :${stats[0].base_stat}`;
	pkmnAtk.textContent = `ATK :${stats[1].base_stat}`;
	pkmnDef.textContent = `DEF :${stats[2].base_stat}`;
	pkmnSpAtk.textContent = `SP ATK :${stats[3].base_stat}`;
	pkmnSpDef.textContent = `SP DEF :${stats[4].base_stat}`;
	pkmnSpd.textContent = `SPD :${stats[5].base_stat}`;
}