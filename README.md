#HarryPotter
This application is a quiz-based story-building game. After the user is prompted to input their name, their name is stored in the database, which creates their row in the table. The user takes a series of quizzes to determine which Hogwarts house they will be sorted into, which character will become their best friend, and which class will be their favorite. At the end, the user has their results displayed to them in the form of a story.

#Setup/Installation
After the GitHub repo is cloned or downloaded to your computer, you must do the following:
1. Run an npm install command at your CLI to install all dependencies
2. Using mySQL workbench or bash, create the database locally on your machine using the schema.sql file.
3. Open the config.json file, located in the config folder. Use the key "MYSQL_URI" shown in config.json to add your database credentials to your own .env file.
4. Run node server.js in your CLI to start the application. 
5. Navigate to http://localhost:3000
Alternatively, you can view the application on Heroku: ENTER LINK HERE ONCE WE DEPLOY


#Technologies
This Project used the following technologies:
-Node 
-Express
-Handlebars
-Sequelize
-Materialize CSS
-Particle.js

#Members
-Cara Sunberg
-Sam Jackson
-Dan Rosenbaum