const searchForm = document.getElementById("search_form");
const searchInput = document.getElementById("search_input");

const cardSection = document.getElementsByClassName("card-container");

// Tags creation
const movieCall = (nom) =>{
  
  axios
  .get(`http://www.omdbapi.com/?i=tt3896198&apikey=b94efc15&s=${nom}`)
  .then(function (response = response.json) {
    console.log(response)
  
    if (response.data.Response === "True") {
      response.data.Search.map(value => {
        const {Title, Year, Type, Poster} = value
    
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "g-col-lg-4", "g-col-md-6", "g-col-sm-12", "g-col-12", "card_style");

        const img = document.createElement("img");
        img.classList.add("card-img-top", "custom_img", "img");
      
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body","card_color", "d-flex", "justify-content-between", "flex-column");
      
        const movieTittle = document.createElement("h4");
        movieTittle.classList.add("card-title" );
      
        const dateTypeContainer = document.createElement("div")
        dateTypeContainer.classList.add("mb-3", "mt-3", "d-flex", "justify-content-between")
    
        const movieDate = document.createElement("h5");
        movieDate.classList.add("card-text");
    
        const sourceType = document.createElement("h5");
        sourceType.classList.add("card-text")
      
        const btn = document.createElement("button");
        btn.classList.add("btn", "btn-primary");
      
      
      
        cardSection[0].appendChild(cardContainer);
        cardContainer.appendChild(img);
        cardContainer.appendChild(cardBody);
      
        cardBody.appendChild(movieTittle);
    
        cardBody.appendChild(dateTypeContainer)
        dateTypeContainer.appendChild(movieDate);
        dateTypeContainer.appendChild(sourceType)
    
        cardBody.appendChild(btn);
      
      
        img.src = Poster;
      
        movieTittle.innerHTML = `${Title}`
        movieDate.innerHTML = `Year: ${Year}`
        sourceType.innerHTML = `Type: ${Type}`
        btn.innerHTML = `View More`
        
      })
    }/* else{
  
      const gridRem = document.getElementById("Remover")
      gridRem.classList.remove("grid")
  
      const noMovieMSG = document.createElement("h1");
  
      noMovieMSG.innerHTML = `NO MOVIES WHERE FIND`
  
      cardSection[0].appendChild(noMovieMSG)

      
    } */
  
  })
  .catch(function (error) {
    console.error(error);
   
  });
  
  };
  



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

});

searchInput.addEventListener("keyup", (e) => {

const hola = document.getElementById("Remover")

const nom = e.target.value;

  if (nom !== "") {
    movieCall(nom);
    

  }

  for (let i = 0; i < 10; i++) {
    const child = hola.getElementsByClassName("card")[i]
    hola.removeChild(child)
    }

 /*  document.getElementById("Remover").childNodes.forEach(element => {
    console.log(element)
  }); */
});


// `http://www.omdbapi.com/?i=tt3896198&apikey=b94efc15&s=${nom}`


