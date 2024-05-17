const movieurl = 'https://movies-api14.p.rapidapi.com/movies';
const bakingurl = 'https://the-birthday-cake-db.p.rapidapi.com/5';
const spaceurl = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/';

const movieoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ba04672b1msh7a58aad58be16a7p1081a3jsn9aafaf15136b',
		'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	}
};
const cakeoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ba04672b1msh7a58aad58be16a7p1081a3jsn9aafaf15136b',
		'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
	}
};
const spaceoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ba04672b1msh7a58aad58be16a7p1081a3jsn9aafaf15136b',
		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
	}
};

async function fetchData() {
try {
	    const response = await fetch(movieurl, movieoptions);
	    const result = await response.json();
     if (result && result.movies&& result.movies.length > 0)
         {
            const moviesContainer = document.getElementById('movies');
            const topFiveMovies = result.movies.slice(0, 8); 
            
            topFiveMovies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.innerHTML = `
                    <h2>${movie.original_title}</h2>
                    <p>Year: ${movie.release_date}</p>
                    <img src="${movie.poster_path}" alt="${movie.original_title} Poster" width="25%">
                    `;
                    moviesContainer.appendChild(movieElement);
                });
    }


} catch (error) {
	console.error(error);
}
}
async function fetchCakes() {
    try {
        const response = await fetch(bakingurl, cakeoptions);
        const result = await response.json();
       
               const cakeContainer = document.getElementById('baking');
               const cakes = [result] 
               
               cakes.forEach(baking => {
                   const cakeElement = document.createElement('div');
                   cakeElement.innerHTML = `
                       <h2>${baking.title}</h2>
                       <p>DIFFICULTY: ${baking.difficulty}</p>
                       <p>PORTION: ${baking.portion}</p>
                       <img src="${baking.image}" alt="${baking.title} Poster" width="25%">
                       <p>DESCRIPTION: ${baking.description}</p>
                       <p>TIME: ${baking.time}</p>
                       <p>STEPS: ${baking.method.step}</p>
                      
                       
                       <ul>
        ${baking.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
                       `;
                       cakeContainer.appendChild(cakeElement);
         });
        
        
     } catch (error) {
        console.error("Error fetching cakes:", error);
    }
}
async function fetchPlanets() {
    const response = await fetch(spaceurl, spaceoptions);
	const result = await response.json();

    const spaceContainer = document.getElementById('space');
               const planets = result; 
               planets.forEach(space => {
                const spaceElement = document.createElement('div');
                spaceElement.innerHTML = `
                    <h2>${space.planetOrder}</h2>
                    <p>NAME: ${space.name}</p>
                    <img src="${space.imgSrc.img}" alt="${space.name} Poster" width="25%">
                    <p>SOURCE: ${space.source}</p>
                    <p>WIKILINK: ${space.wikiLink}</p>
                   
                    `;
                    console.log(space.imgSrc.img);
                    spaceContainer.appendChild(spaceElement);
      });

}

fetchPlanets();
fetchData();
fetchCakes();