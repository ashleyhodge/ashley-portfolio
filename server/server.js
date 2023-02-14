const path = require('path');
const express = require('express');
const cors = require("cors");

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

const dotenv = require('dotenv')
dotenv.config();

const db = require('./config/connection');
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');


const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
app.use(cors());

app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({ limit: '50mb' }));

// create a new instanceof an Apollo server with Graphql schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  

  // Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client', 'build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.js'));
});
  
  db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
  };


// call async function the start server
startApolloServer(typeDefs, resolvers);