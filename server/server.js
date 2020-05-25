const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = 3001;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
const cities = ['Hyderabad','Chennai','Bangalore','Delhi','Amaravati']
app.get('/cities', (req,res)=>{
    res.send(res.json(cities))
})

app.listen(port, () => {
  console.log('Server is up!',port);
});
