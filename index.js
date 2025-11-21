import express from 'express';
const app = express();

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});
app.use(express.static('public'));

// Serve index.html for the root path
app.get('/', (req, res) => {
  console.log('DIR:', __dirname);
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default app;
