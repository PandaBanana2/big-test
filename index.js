import express from 'express';
const app = express();

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});
app.use(express.static('public'));


export default app;
