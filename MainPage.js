
function initializePage() {
    loadRandomImage();
    loadMoviesTable();
    console.log("here");
}


function loadRandomImage() {
    let images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpg"];
    let randomNumber = Math.floor(Math.random() *images.length);
    
    let imageElement = document.getElementById("chuckImage");
    if (imageElement) {
        imageElement.setAttribute("src", images[randomNumber]);
    } else {
        console.error("Image element not found!");
    }
}

   
   console.log("movie");


    function loadMoviesTable( ) {
        const tbody = document.querySelector("#moviesTable tbody");
        tbody.innerHTML = "";
    
        JSON.parse(movies).movies.forEach((movie, index) => {
            console.log(movie);
    
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.role}</td>
            `;
    
            // Apply styles based on row index
            if (index % 2 === 0) {
                row.style.backgroundColor = "#f0f0f0"; // Light gray for even rows
            } else {
                row.style.backgroundColor = "#ffebcc"; // Light orange for odd rows
                row.style.border = "2px solid #ff9900"; // Orange border for odd rows
                row.style.color = "#b30000"; // Dark red text for odd rows
            }
    
            tbody.appendChild(row);
        });
    }

    


    function filterMovies() {
        let year = document.getElementById("yearFilter").value;
    let errorMessage = document.getElementById("errorMessage");

    if (!/^\d{4}$/.test(year)) {
        errorMessage.textContent = "Please enter a valid year";
        return;
    }

    const tbody = document.querySelector("#moviesTable tbody");
    tbody.innerHTML = "";
    errorMessage.textContent = "";

    JSON.parse(movies).movies
        .filter(movie => movie.year > year)
        .forEach((movie, index) => {
            console.log(movie);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.role}</td>
            `;

            // Apply styles based on row index
            if (index % 2 === 0) {
                row.style.backgroundColor = "#f0f0f0"; // Light gray for even rows
            } else {
                row.style.backgroundColor = "#ffebcc"; // Light orange for odd rows
                row.style.border = "2px solid #ff9900"; // Orange border for odd rows
                row.style.color = "#b30000"; // Dark red text for odd rows
            }

            tbody.appendChild(row);
        });
        
    }

function fetchJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            let jokeContainer = document.getElementById("jokeContainer");
            jokeContainer.textContent = data.value;

            document.getElementById("likeJoke").disabled = false;
            document.getElementById("dislikeJoke").disabled = false;
            document.getElementById("clearJoke").disabled = false;
        });
}


function likeJoke() {
    let joke = document.getElementById("jokeContainer");
    joke.style.color = "green";
    joke.style.fontSize = "18px"; // Increased font size
    joke.style.fontWeight = "bold"; // Make it bold
    
    joke.style.padding = "10px";
    joke.style.borderRadius = "5px";
    joke.style.transition = "0.3s ease-in-out"; // Smooth transition effect
    joke.innerHTML = joke.innerHTML.replace("❌ ", "");
    // Add the ✅ emoji dynamically
    if (!joke.innerHTML.includes("✅")) {
        joke.innerHTML = "✅ " + joke.innerHTML;
    }
}

function dislikeJoke() {
    let joke = document.getElementById("jokeContainer");
    joke.style.color = "red";
    joke.style.fontSize = "18px"; // Increased font size
    joke.style.fontWeight = "bold"; // Make it bold
   
    joke.style.padding = "10px";
    joke.style.borderRadius = "5px";
    joke.style.transition = "0.3s ease-in-out"; // Smooth transition effect
    joke.innerHTML = joke.innerHTML.replace("✅ ", "");
     // Add the ❌ emoji dynamically
     if (!joke.innerHTML.includes("❌")) {
        joke.innerHTML = "❌ " + joke.innerHTML;
    }
}

function clearJoke() {
    document.getElementById("jokeContainer").textContent = "";
    document.getElementById("likeJoke").disabled = true;
    document.getElementById("dislikeJoke").disabled = true;
    document.getElementById("clearJoke").disabled = true;
}
