/**
 * @Author: root
 * @Date:   2022-09-10T00:34:06+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-10T00:39:31+05:30
 */
 const cloud = require('cloudinary');
 const router = require('express').Router();
 require('dotenv').config();

 cloud.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.CLOUD_API_KEY,
   api_secret: process.env.CLOUD_API_SECRET
 })

 router.delete('/:public_id', async(req, res)=> {
   const {public_id} = req.params;
   try {
       await cloud.uploader.destroy(public_id);
       res.status(200).send();
   } catch (e) {
       res.status(400).send(e.message)
   }
 })


 module.exports = router;
