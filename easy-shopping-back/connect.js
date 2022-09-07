/**
 * @Author: root
 * @Date:   2022-09-08T00:10:52+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-08T00:38:17+05:30
 */
require('dotenv').config();

const mongo = require('mongoose');

const connectStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.3ump6uj.mongodb.net/?retryWrites=true&w=majority`;

mongo.connect(connectStr, {useNewUrlParser: true})
.then(() => console.log('database sorted'))
.catch(err =>console.log(err))

mongo.connection.on('error',err =>{
  console.log(err)
} )
