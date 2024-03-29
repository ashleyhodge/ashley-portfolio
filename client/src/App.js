
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ProjectForm from './pages/ProjectForm';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router basename='/'>
          <main className='flex flex-col min-h-screen'>
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
                <Route path=':id' element={<SingleProject />} />
                <Route path='' element={<Projects />}/>
              </Route>
              <Route 
                path='/resume'
                element={<Resume />}
              />
              <Route 
                path='/contact'
                element={<Contact />}
              />
              <Route 
                path='/admin4952'
                element={<ProjectForm />}
              />
            </Routes>
            <Footer />
          </main>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;
