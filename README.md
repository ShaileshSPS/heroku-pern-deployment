# heroku-pern-deployment

![image](https://user-images.githubusercontent.com/51025228/143783514-94fab1ef-1e81-4586-b1ef-60229ccd59c9.png)

Prerequisites:
1. Install Heroku CLI
2. Install Git


Commands:
### `npm i -g heroku`

->  heroku login

### `heroku create pern-application` // creates project instance on heroku
### `heroku addons:create heroku-postgresql:hobby-dev -a pern-application` // creates postgres dummy db instance 
### `heroku pg:psql -a pern-application` // connecting psql much like psql -U posgres command in local

### `cat database.sql | heroku pg:psql -a pern-application` // executing DDL commands from database.sql file.

### `heroku git:remote -a pern-application` // connecting to heroku remote application which you created.
### `git add .`
### `git commit`
### `git push heroku master` // push the code to heroku for deployment
### `heroku open` // Run the application


-> acceess link http://pern-application.herokuapp.com/
