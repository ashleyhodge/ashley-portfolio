
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Home from './pages/Home';
import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <main>
            <Nav />
            <Routes>
              <Route 
                path='/'
                element={<Home />}
              />
            </Routes>
          </main>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;
