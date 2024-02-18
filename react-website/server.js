const express = require('express');
const next = require('next');
const cors = require('cors');
const multipartyMiddleware = require('connect-multiparty')();

const dev = process.env.NODE_ENV !== 'production';
const App = next({ dev });
const handle = App.getRequestHandler();

App.prepare().then(() => {
 const server = express();

 server.use(cors());

 server.post('/upload', multipartyMiddleware, (req, res) => {
    res.json({ message: 'File uploaded successfully!' });
 });

 server.get('*', (req, res) => {
    return handle(req, res);
 });

 server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
 });
});