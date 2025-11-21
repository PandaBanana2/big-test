import express from 'express';
const app = express();

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});
app.use('/', express.static('public'));
export default app;
