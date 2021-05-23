// Bloco assíncrono para chamar métodos assíncronos do arquivo app, assim que a página carrega
!async function () {
  await fetchTypesAsync()
  loadComboBoxTypes(pokemonTypes)

  await fetchPokemonsAsync()
  loadPokemonList(pokemonList)
}();

function loadComboBoxTypes(types) {
  types.map(t => $('#filter-type').append(`<option>${t}</option>`))
}

function loadPokemonList(pokedex) {
  const view = pokedex
    .map(p => createPokemonCard(p))
    .join('')
  $('.pokedex').html(view + '<div class="warning hidden">Nenhum pokemon foi encontrado.</div>')

  $(".btn-edit").off("click")
  $(".btn-edit").on("click", viewPokemon)
}

function createPokemonCard(pokemon) {
  const types = pokemon.type
    .map(t => `<span class="pokemon-type background-${t}">${t}</span>`)
    .join('')
  const img = pokemon.name.replace(/['\.]/g, '').replace(/\s/g, '-')
  return `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type}" tabindex="${pokemon.id}">
    <div class="btn-toolbar float-right mt-2" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group btn-group-sm mr-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-link btn-edit" data-id="${pokemon.id}">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
        </button>
      </div>
    </div>  
    <figure class="pokemon-figure">
        <img src="img/${img.toLowerCase()}.png" alt="${pokemon.name}">
      </figure>
      <section class="pokemon-description">
        <span class="pokemon-id">#${Number(pokemon.id).toString().padStart(3, '0')}</span>
        <h1 class="pokemon-name">${pokemon.name}</h1>
        <div class="pokemon-types">${types}</div>
      </section>
      <section class="pokemon-stats">${mountStatsDiv(pokemon.stats)}</section>
    </div>`
}

function mountStatsDiv(stats) {
  return Object.entries(stats)
    .filter(([name, value]) => !['total'].includes(name))
    .map(([name, value]) =>
      `<div class="stat-row">
        <div>${name}</div>
        <div class="stat-bar">
          <div class="stat-bar-bg" style="width: ${100 * value / 250}%">${value}</div>
        </div>
      </div>`
    )
    .join('')
}

$('#filter-name').on('keyup', e => {
  filter()
})

$('#filter-type').on('change', e => {
  e.preventDefault()
  filter()
  $('#filter-type').blur()
})

function cleanForm() {
  $("#id").val(0)
  $("#name").val("")
  $("#hp").val("")
  $("#atk").val("")
  $("#def").val("")
  $("#speed").val("")
  $("#satk").val("")
  $("#def").val("")

  $('.type').prop('checked', false)
}

function filter() {
  const name = $('#filter-name').val()
  const type = $('#filter-type').val()

  const filteredList = filterPokemon(name, type);
  loadPokemonList(filteredList);

  return filteredList;
}

async function viewPokemon(e) {
  e.preventDefault();

  const pokemon = await getPokemon($(this).data("id"))

  $("#id").val(pokemon.id)
  $("#name").val(pokemon.name)
  // Débora, ajeite isso aqui

  for (const type of pokemon.types) {
    $(`.type[value=${type.type.name}`).prop('checked', true)
  }

  $(".modal-title").html(`Editar ${pokemon.name}`)
  $(".modal").modal('show')
}
