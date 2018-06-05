export const fetchAllPokemon = () => (
$.ajax({
  method: 'GET',
  url: 'api/pokemon'
})
);

export const fetchOnePokemon = (id) (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
);
