const fs = require("fs");

let titles = [
  "Parse.ly",
  "Storefront and Inventory Database",
  "BackPack: Your Adventure Awaits",
  "LIRI Bot in Node.js",
  "Dog Tag",
  "Harry Potter Hangman",
  "TGIF Trivia Game",
  "BudgetBasic Calculator"
];

let images = [
  "https://ceceliacreates.github.io/ceceliacreates-portfolio/assets/ParselyScreenCap.PNG",
  "https://ceceliacreates.github.io/ceceliacreates-portfolio/assets/bamazonvideoscreencap.PNG",
  "https://ceceliacreates.github.io/ceceliacreates-portfolio/assets/BackPackScreenCap.PNG",
  "https://ceceliacreates.github.io/ceceliacreates-portfolio/assets/nodebotscreencap.PNG",
  "https://ceceliacreates.github.io/ceceliacreates-portfolio/assets/DogTagScreenCap.PNG",
  "https://ceceliacreates.github.io/ceceliacreates-portfolio/assets/HPUICapture.PNG",
  "https://ceceliacreates.github.io/ceceliacreates-portfolio/assets/triviagamescreencap.PNG",
  "https://ceceliacreates.github.io/ceceliacreates-portfolio/assets/BudgetBasicScreenCap.PNG"
];

let builtWith = [
  "Built with HTML5, CSS (Flexbox-Grid Library), Java…xpress, MySQL (Sequelize), Nightmare, and Cheerio",
  "Built with Flexbox, Javascript, Express, and Sequelize for MySQL",
  "Built with HTML5, CSS (Bootstrap), Javascript (JQuery), APIs/AJAX",
  "Built with Node.js, Spotify Node API, and Axios for Command Line Interface",
  "Built with HTML5, CSS (Bootstrap), Vanilla Javascript, Node.js, and Express.js",
  "Built with HTML5, CSS (Simple Grid), Vanilla Javascript",
  "Built with HTML5, CSS (Bootstrap), Javascript (JQuery)",
  "Built with HTML5, CSS (Bootstrap), Javascript (JQuery)"
];

let descriptions = [
    "An app that matches users to recommended plants based on their lifestyle and interests and saves results for future reference.",
    "A full-stack storefront with corresponding inventory database that dynamically renders and updates products",
    "A responsive, user-friendly hiking trail search app for web and mobile devices.",
    "A command line interface bot that takes in key word commands to return search results from multiple APIs.",
    "A full stack application that matches your pet with its ideal playdate based on survey results.",
    "A Harry Potter-themed hangman/word guess game that responds with a corresponding GIF when the player wins.",
    "An interactive trivia game that utilizes Javascript time events.",
    "A budget calculator app that features a customized savings rate, differentiating between essential and discretionary expenses, and suggestions based on results."
]

let listDescriptions = [
  "Unique Challenges",
  "Functionality",
  "Unique Challenges",
  "Search Commands",
  "Unique Challenges",
  "Unique Challenges",
  "Unique Challenges",
  "Unique Challenges"
];

let listItems = [
  `<li>Many plants had multiple values for some table columns, requiring the use of the substring Sequelize query to find the matching value within the array of possible values</li>
<li>Survey results didn't directly match all data types in the database, requiring the translation of the logic to compare the results and return correct data</li>
<li>Multiple filters sometimes resulted in too few matches</li>
<li>The use of a multi-step form without a rendering framework like React required a switch case and button IDs to dynamically render to the DOM while capturing input data</li>`,
`<li>Delivers front-end HTML files dynamically using server routes</li>
<li>Queries database for inventory level before approving purchases</li>
<li>Updates inventory in database to reflect purchases</li>
<li>Includes an API route for managers to view products with low stock</li>
<li>Product images are rendered dynamically from a selection of icons based on the product category</li>`,
`<li>Differentiating between current location or search input location for AJAX calls</li>
<li>Managing dependencies between multiple asynchronous AJAX calls</li>
<li>Filtering API call responses by trail length search criteria</li>
<li>Clearing previous search criteria to allow for multiple searches in the same session</li>`,
`<li>concert-this: returns concert information for an artist from the Bands In Town API</li>
<li>spotify-this-song: returns song information and a preview URL for a given song title using the Spotify-Node-API</li>
<li>movie-this: returns details about a given movie title from the OMDB API</li>
<li>do-what-it-says: runs a given command and search input from a local file</li>`,
`<li>Performing server-side logic based on survey results that returns a response to the client and renders to DOM</li>
<li>Using Vanilla Javascript to make all HTTP requests to reduce dependencies</li>
<li>Manipulating built-in Bootstrap components like modals without JQuery</li>
<li>Configuring for and deploying to Heroku</li>`,
`<li>Using an object to store word bank data and corresponding GIF image files</li>
<li>Using a regular expression (RegEx) to match guesses against letters in word</li>
<li>Accounting for multiple instances of the same letter in a word</li>
<li>Using counters to track number of guesses and wins</li>`,
`<li>Managing simultaneous timers to track timeouts while also displaying time left and clearing timers based on click events</li>
<li>Using objects to access questions, multiple choice options, correct answer, and corresponding image files</li>
<li>Using functions to dynamically render to DOM without unecessary code repetition (DRY principle)</li>
<li>Tracking number of correct answers to display at end of game</li>`,
`<li>Understanding and expanding on existing code</li>
<li>Managing multiple form input variables to make calculations</li>
<li>Nested conditional statements to differentiate output for multiple response cases</li>
<li>Sourcing and building a project independently outside of a formal education environment</li>`
];

let links = [
    [
        {url: "https://github.com/ceceliacreates/parse-ly", name: "Repository"},
        {url: "https://parse-ly.herokuapp.com/", name: "Deployed"}
    ],
    [
        {url: "https://github.com/ceceliacreates/bamazon", name: "Repository"},
        {url: "https://secret-brushlands-48067.herokuapp.com/", name: "Deployed"},
        {url: "https://drive.google.com/file/d/1zw3GRz1MfucWD1mYjSgnjg8ZEH02zIcq/view", name: "Demo Video"}

    ],
    [
        {url: "https://github.com/ceceliacreates/project-green", name: "Repository"},
        {url: "https://ceceliacreates.github.io/project-green", name: "Deployed"},
        {url: "https://vimeo.com/338145605", name: "Video Presentation"}
    ],
    [
        {url: "https://github.com/ceceliacreates/liri-node-app", name: "Repository"},
        {url: "https://drive.google.com/file/d/1y4Z4oBkDBna0AA5xVKpoOG8fILIAXa49/view?usp=sharing", name: "Demo Video"}
    ],
    [
        {url: "https://github.com/ceceliacreates/friend-finder", name: "Repository"},
        {url: "https://morning-spire-31344.herokuapp.com/", name: "Deployed"}
    ],
    [
        {url: "https://github.com/ceceliacreates/Harry-Potter-Hangman/tree/gh-pages", name: "Repository"},
        {url: "https://ceceliacreates.github.io/Harry-Potter-Hangman/", name: "Deployed"}
    ],
    [
        {url: "https://github.com/ceceliacreates/trivia-game", name: "Repository"},
        {url: "https://ceceliacreates.github.io/trivia-game/", name: "Deployed"}
    ],
    [
        {url: "https://codepen.io/ethanthompson/pen/emKmYJ", name: "Based on the 'Simple Budget Calculator' by Ethan Thompson on CodePen"},
        {url: "https://github.com/ceceliacreates/budget_calculator", name: "Repository"},
        {url: "https://ceceliacreates.github.io/budget_calculator", name: "Deployed"},
        {url: "https://drive.google.com/file/d/1p_SK2CSihPCoXW0tXW0-1AHPdR-OYTbs/view", name: "Demo Video"}
    ]
]

const projects = [{}, {}, {}, {}, {}, {}, {}, {}];

titles.forEach((item, i) => (projects[i].title = item));

images.forEach((item, i) => (projects[i].imageurl = item));

builtWith.forEach((item, i) => (projects[i].builtWith = item));

descriptions.forEach((item, i) => (projects[i].description = item));

listDescriptions.forEach((item, i) => (projects[i].listDescription = item));

listItems.forEach((item, i) => (projects[i].listItems = item));

links.forEach((item, i) => (projects[i].links = item));

const json = JSON.stringify(projects);

fs.writeFile("./projects.json", json, err => {
  if (err) return err;
  else console.log("File created");
});
