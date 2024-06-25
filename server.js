const http= require('http');
const app=require('./app');
const server=http.createServer(app.app);
server.listen(7000,()=>console.log('server runing on port 5000'));