import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('get root')
})
app.get('/pro',(req,res) => {
    res.send('get pro')
})
app.post('/pro',(req,res) => {
    const user = {
        name: 'allen'
    }
    res.send(user);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})