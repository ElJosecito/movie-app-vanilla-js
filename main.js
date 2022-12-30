const searchForm = document.getElementById("search_form");
const searchInput = document.getElementById("search_input");

searchForm.addEventListener("submit", e =>{
  e.preventDefault();
});


searchInput.addEventListener("keyup", e=>{
  console.log(e.target.value)
});



// `http://www.omdbapi.com/?i=tt3896198&apikey=b94efc15&s=${nom}`

const nom = "joker"

axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=b94efc15&s=${nom}`).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

