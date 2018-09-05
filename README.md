# "Would you rather?"-Project
Project "would-you-rather" for Udacity/React-Nanodegree/React-And-Redux

## Installation
* Download the repository with `git clone https://github.com/liamkande/wouldYouRather.git`
* Install the project-dependencies with `npm install`
* Start the development server with `npm start`

## App
This app is my project for the React & Redux part of the React-Nanodegree. The game contains the basic question 'Would you rather?' following two answers. The aim is to find out which good or bad thing the user would rather do, e.g. "Step on Lego" or "Step on your dog's paw" (even if I don't have a dog, I would definitely rather step on Lego…)

### Main Page
At `/unanswered` and `/unanswered` you find the questions, grouped by two sections: Unanswered (shown by default) and answered. Only after answering a question, the user is able to see the statistics for a question - to avoid biased answers.

### Add
The form to enter your own "Would you rather?"-question can be found at `/new`. Just type in the two options, hit submit and see what others vote for.

### Leaderboard
A game is not a game until it has a leaderboard! Look for it at `/leaderboard`. The players are ranked by the number of questions they asked and answered.

### Login
To play, you need to login (or create an account). The login form is a highly secured dropdown-menu where you choose the username (so you don't have problems with typo in login-forms). You also don't need to remember your password, as it will be filled in automatically. So no need for "forgot my password"-menus.

## License
MIT
