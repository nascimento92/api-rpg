import express, { Response, Request } from 'express';

const app = express();
app.use(express.json());

app.get('/',(request:Request, response: Response) => {
    response.json({message:'isso é um teste'});
})

app.listen(3000, ()=> console.log('Server is running on port 3000.'));
