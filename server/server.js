const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = 3001;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
const cities = ['Hyderabad', 'Chennai', 'Bangalore', 'Delhi', 'Amaravati','Mumbai']
app.get('/cities', (req,res)=>{
    res.send(JSON.stringify(cities))
})

app.listen(port, () => {
  console.log('App is running on port: ',port);
});
