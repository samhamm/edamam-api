// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM

$.get('/edamam/search?q=coconut')
.then(data => {
  console.log(data.hits);
  data.hits.forEach(nom => $('#results').append(`<p>${nom.recipe.label}</p>`));
},
  err => {
    console.error('Status Code: ', err.status);
  });
