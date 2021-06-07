import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AutherDetailScreen from './components/AutherDetailScreen';
import AutherListScreen from './components/AutherListScreen';
import Menu from './components/Menu';
import ParticularPost from './components/ParticularPost';
import './App.css'
import AllPosts from './components/AllPosts';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
/**
 * @author
 * @function App
 **/

const App = (props) => {
    return ( <>
        <Menu/>
        <div className = "TopHeight" > </div> 
        <Switch>

        <Route exact path = "/" component={Home}/>
        <Route exact path = "/autherdetail/:authorId"
        component = { AutherDetailScreen }
        /> 
        <Route exact path = "/autherlist"
        component = { AutherListScreen }
        />
      
        <Route exact path = "/allposts"
        component = { AllPosts }
        />
        <Route exact path = "/allposts"
        component = { AllPosts }
        /> 
        <Route exact path = "/particularpost/:postId"
        component = { ParticularPost }
        /> 
        <Route exact path = "/login"
        component = { Login }
        /> 
        <Route exact path = "/register"
        component = { Register }
        /> 
        
        </Switch >


        </>
    )

}

export default App