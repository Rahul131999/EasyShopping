/**
 * @Author: root
 * @Date:   2022-09-09T17:04:32+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-09T17:18:24+05:30
 */

 const mongo = require('mongoose');
 const ProductSchema = mongo.Schema({
   name: {
     type: String,
     required: [true, "can't be blank"]
   },
   description: {
     type: String,
     required: [true, "can't be blank"]
   },
   price: {
     type: String,
     required: [true, "can't be blank"]
   },
   category: {
     type: String,
     required: [true, "can't be blank"]
   },
   pictures: {
     type: Array,
     required: true
   }
 }, {minimize: false});

 const Product = mongo.model('Product', ProductSchema);

 module.exports = Product;
