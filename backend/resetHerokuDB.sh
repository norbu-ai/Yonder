#!/bin/zsh
heroku run npm run sequelize db:seed:undo:all
heroku run npm run sequelize db:migrate:undo:all
heroku run npm run sequelize db:migrate
heroku run npm run sequelize db:seed:all