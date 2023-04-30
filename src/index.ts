import express, { Request, Response } from 'express';

const port = process.env.PORT ? +process.env.PORT : 8081;
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`Hello From Backend Server (${port})`);
});

app.get('/_health', (req: Request, res: Response) => {
    res.send();
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
});
