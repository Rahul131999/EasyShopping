/**
 * @Author: root
 * @Date:   2022-09-07T17:47:47+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-27T06:44:15+05:30
 */
const exp = require('express');
const app = exp();
const cors = require('cors');
require('./connect')
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: "http://localhost:3001",
  methods: ['GET','POST','PATCH','DELETE']
})

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_PASS);

const User = require('./models/User');
const UserRoutes = require('./routes/UserRoutes');
const Product = require('./models/Product');
const ProductRoutes = require('./routes/ProductRoutes');
const ImageRoutes = require('./routes/ImageRoutes');

app.use(cors());
app.use(exp.urlencoded({extended: true}));
app.use(exp.json());
app.use('/users', UserRoutes);
app.use('/products', ProductRoutes);
app.use('/images', ImageRoutes)




app.post('/create-payment', async(req, res)=> {
  const {amount} = req.body;
  console.log(amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card']
    });
    res.status(200).json(paymentIntent)
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
   }
})


server.listen(8080, () => {
  console.log('server running', 8080)
})

app.set('socketio',io);
