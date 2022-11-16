# Make database in psql
``` 
CREATE ROLE labber WITH LOGIN password 'labber';
```
THEN

```
CREATE DATABASE getogether OWNER labber; 
```
OR

```
cd express-back-end
npx sequelize db:create #creates database based on .env
npx sequelize db:drop #drops the database (for reset purposes)
```
# Migrations
https://sequelize.org/docs/v6/other-topics/migrations/

Run all unperformed migrations:
npx (dotenv -e .env) sequelize db:migrate  

Undo most recent migration:
npx (dotenv -e .env) sequelize db:migrate:undo

## to edit an existing table
https://sequelize.org/docs/v6/other-topics/query-interface/#creating-a-table

# Seeds
https://sequelize.org/docs/v6/other-topics/migrations/

Run all unperformed seeds:
npx (dotenv -e .env) sequelize db:seed:all 

Undo most recent seed:
npx (dotenv -e .env) sequelize db:seed:undo

Undo all seeds:
npx (dotenv -e .env) sequelize db:seed:undo:all
