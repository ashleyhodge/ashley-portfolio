
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';
import Projects from './pages/Projects';

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
              <Route 
                path='/about'
                element={<About />}
              />
              <Route 
                path='/projects'
                element={<Projects />}
              />
            </Routes>
          </main>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;
