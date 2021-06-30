const express = require('express');
const path = require('path');

// configure our connection to the database
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve up static assets
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get("/serviceWorker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/serviceWorker.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});