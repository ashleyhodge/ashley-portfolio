
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';
import Resume from './pages/Resume';

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
        <Router basename='/'>
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
              <Route path='/projects'>
                <Route path='singleproject' element={<SingleProject />} />
                <Route path='' element={<Projects />}/>
              </Route>
              <Route 
                path='/resume'
                element={<Resume />}
              />
            </Routes>
          </main>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;
