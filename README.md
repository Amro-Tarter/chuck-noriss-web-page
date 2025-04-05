# chuck-noriss-web-page
This project is a web application that showcases information about Chuck Norris, including his biography, a collection of his movies, and random Chuck Norris jokes fetched from an API. The application allows users to filter movies by year and interact with jokes by liking, disliking, or clearing them.
Features
1. Chuck Norris Profile
Displays a random image of Chuck Norris from a selection of four images.

Shows a brief biography of Chuck Norris.

2. Movies Table
Presents a table of Chuck Norris movies with details such as title, year, and role.

Allows filtering movies by year to show only those released after the specified year.

Alternating row styling for better readability.

3. Random Jokes
Fetches random Chuck Norris jokes from the Chuck Norris API.

Users can like or dislike jokes, which adds emojis (✅ or ❌) and changes the text style.

Clear button to remove the current joke.

Files Structure
MainPage.html: The main HTML file that structures the webpage.

MainPage.css: Stylesheet for styling the webpage.

MainPage.js: JavaScript file containing the logic for loading images, movies, and jokes.

ChuckMovies.js: Contains the movie data in JSON format.

How to Use
Loading the Page:

Open MainPage.html in a web browser.

The page will automatically load a random image of Chuck Norris and display his movies.

Filtering Movies:

Enter a year (e.g., 1990) in the "year" input field.

Click the "Filter" button to show only movies released after that year.

Fetching a Joke:

Click the "Get" button to fetch a random Chuck Norris joke.

Use the "Like" or "Dislike" buttons to react to the joke.

Click "Clear" to remove the joke from the display.

Styling
The page uses a clean, responsive design with a gradient header.

Movies table has alternating row colors for better readability.

Jokes change color and style based on user interaction (like/dislike).

Dependencies
Chuck Norris API: Used to fetch random jokes.

No additional libraries or frameworks are required.
