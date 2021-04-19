//Imports
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Importing all components
import Home from './components/Home/Home';
import pageNotFound from './components/404/404';
import Blogs from './components/Blogs/Blogs';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import { useDispatch } from 'react-redux';
import {getBlogs} from './actions/blogs';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
          <div className="Content">
          <Navbar/>
            <Switch>
              <Route exact path="/">
                <Home setCurrentId={setCurrentId} currentId={currentId}/>
              </Route>
              <Route exact path="/create">
                <Form setCurrentId={setCurrentId} currentId={currentId}/>
              </Route>
              <Route exact path="/login">
                <Auth/>
              </Route>
              <Route component={pageNotFound} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
