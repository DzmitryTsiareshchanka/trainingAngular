import {Request, Response} from 'express';
import {dao} from './Dao';

let bodyParser = require('body-parser');
let express = require('express');
let app = express();

let urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/users', urlencodedParser, (req: Request, res: Response) => {
    res.json(dao.getUsers());
});

app.get('/users/:id', urlencodedParser, (req: Request, res: Response) => {
    res.json(dao.getUserById(+req.params.id));
});

app.post('/users/add', (req: Request, res: Response) => {
    dao.addUser('unique name');
    res.json(dao.getUsers());
});

app.put('/users/:id', (req: Request, res: Response) => {
    res.json(dao.updateUser(+req.params.id));
});

app.delete('/users/:id', (req: Request, res: Response) => {
    res.json(dao.deleteUser(+req.params.id));
});


let port = '3000';
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
