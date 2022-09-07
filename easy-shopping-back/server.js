/**
 * @Author: root
 * @Date:   2022-09-07T17:47:47+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-07T18:02:43+05:30
 */
const exp = require('express');
const app = exp();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: "*",
  methods: "*"
})


app.use(cors());
app.use(exp.urlencoded({extended: true}));
app.use(exp.json());


server.listen(8080, () => {
  console.log('server running', 8080)
})
