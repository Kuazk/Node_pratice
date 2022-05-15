import express from 'express';

const app = express();


app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/:id',(req,res) => {
    console.log(req.params)
    res.status(404).send("your mom");
});

app.listen(3000);