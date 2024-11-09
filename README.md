fuck html, ejs is being used in this project.
oh, and also, i didnt link this repo to vercel, i actually used the cli. why you may ask? because i can.
# GDExplorer

GDExplorer is a web application inspired by the GDBrowser API, a popular tool used by the Geometry Dash community to explore levels, players, and leaderboards. GDExplorer allows users to view leaderboards, search for levels and users, and navigate through Geometry Dash data in a friendly and interactive interface.

## Based on GDBrowser

GDExplorer is built around the GDBrowser API, which provides data related to Geometry Dash. It pulls data such as:

- Level details (including levels' rankings, difficulty, and more).
- Player profiles, including stats like stars, coins, demons, etc.
- Leaderboards for the game's players and creators.
- And a lot more, like profile searching, profile posts, etc!
- More being added everyday!

By leveraging GDBrowser, GDExplorer provides users with a visual and simplified interface to interact with the same data in a clean, navigable way.

## Technology Stack

GDExplorer is built using the following technologies:

- **Node.js** for the server-side environment.
- **Express** for handling routing and rendering pages.
- **Axios** for making HTTP requests to the GDBrowser API.
- **EJS** for rendering dynamic views.
- **CSS** for styling the app, with a custom design inspired by Geometry Dash.

## Installation Instructions

To run GDExplorer locally, follow the steps below:

1. **Clone the repository**

   `git clone https://github.com/kkronggiscool/gdexplorer.git`  
   `cd gdexplorer`

2. **Install required dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:

   `npm install`

   This will install all the required packages listed in `package.json`, including:

   - `express`: for routing and handling HTTP requests.
   - `axios`: for making API calls to GDBrowser.
   - `ejs`: for rendering dynamic HTML views.

3. **Start the server**

   Run the following command to start the server:

   `node app.js`

4. **Access GDExplorer**

   Open your browser and navigate to:

   `http://localhost:3000`

   You should now see the GDExplorer app running locally.


## Running the App Notes
- Make sure your internet connection is stable, as the app makes API requests to GDBrowser to fetch data.
- If you make any changes to the code, simply restart the app by stopping the server (`Ctrl + C`) and running `node app.js` again.
- If you want to make changes in the JAVASCRIPT, then please restart the server after doing so! Updating css and ejs, you won't have to. Why am I even telling this to you??

That's it! Now you're ready to use GDExplorer. Enjoy exploring Geometry Dash data with ease!
If you'd like to contribute, fork this repository and add something to it! Thanks for reading this boring aboutme.
