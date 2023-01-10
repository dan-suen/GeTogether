require('dotenv').config()
module.exports = {
  "development": {
      "url": "postgres://vyybmdqcukzutt:8ec8b94667c4f88c0a452e628fa7c846f1cf52e6de8997d2e2b91cbe99202ec6@ec2-54-157-79-121.compute-1.amazonaws.com:5432/d4mcojm2fndubn?sslmode=require",
      "dialect": "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
  },
  "production": {
    url: process.env.DATABASE_URL ,
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
}
}