const express= require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    res.json('Hello World!');
    
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})