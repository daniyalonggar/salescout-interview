// Create an API using Node.js and Express:
// 1. POST /user - adds a user.
// 2. GET /users - returns all users.

<<<<<<< HEAD
type RequestsResult = {
    data: any,
    status: number
};

async function fetchAll(urls: string[]): Promise<RequestsResult[]> {
    const requests = urls.map(url => 
        fetch(url)
            .then(async response => ({
                data: await response.json(),
                status: response.status
            }))
            .catch(error => ({
                data: null,
                status: 500, 
            }))
    );

    return Promise.allSettled(requests).then(results =>
        results
            .filter(result => result.status === "fulfilled")
            .map(result => (result as PromiseFulfilledResult<RequestsResult>).value)
    );
}

export { fetchAll };  
=======
// Use Express library

import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());

const users: { name: string }[] = [];

app.post('/user', (req: Request, res: Response) => {
    res.status(200).send();
});

app.get('/users', (req: Request, res: Response) => {
    res.status(200).json(users);
});

if (process.env.NODE_ENV !== 'test') {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
>>>>>>> fdcfbc733ec7b4e1fed69f6da05dfa4761905999
