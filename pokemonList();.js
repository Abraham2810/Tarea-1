pokemonList();
function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon/steelix")
    .then(response => response.json())
    .then(data => {
    const nom = data.name;
    const nomb = nom[0].toUpperCase() + nom.slice(1);
    const habs = data.abilities.map(abilityInfo => abilityInfo.ability.name);
    const type = data.types.map(abilityInfo => abilityInfo.type.name);
    const stats = data.stats.map(abilityInfo => abilityInfo.stat.name);
    console.log("  -> Nombre: ",nomb,"\n");
    console.log("-> Habilidades:", habs,"\n");
    console.log("-> Tipo", type,"\n");
    console.log("-> Stats", stats);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}