import express from 'express';

const app = express();

app.get('/',(req, res) =>{
    res.send('Server is ready');
});

// get a list of a 5 jokes

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Third Joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'Five Joke',
            content: 'This is a five joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`server at http://localhost:${port}`);
});