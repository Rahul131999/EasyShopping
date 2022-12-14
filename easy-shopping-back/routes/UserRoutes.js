/**
 * @Author: root
 * @Date:   2022-09-08T00:56:08+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-11T22:14:07+05:30
 */
 const router = require('express').Router();
 const User = require('../models/User');

 router.post('/signup', async(req, res)=> {
  const {name, email, password} = req.body;

  try {
    const user = await User.create({name, email, password});
    res.json(user);
  } catch (e) {
    if(e.code === 11000) return res.status(400).send('Email already exists');
    res.status(400).send(e.message);
  }
})



router.post('/login', async(req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    res.json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
})



router.get('/', async(req, res)=> {
  try {
    const users = await User.find({ isAdmin: false }).populate('orders');
    res.json(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
})


module.exports = router;
