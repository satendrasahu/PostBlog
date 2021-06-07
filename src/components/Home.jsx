import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div style={{
        margin:"23%"
    }}>
        <h1 className="text-primary text-center">Welcome On Your Blog Post</h1>
        <div className="d-flex justify-content-center  text-ceter">

                <NavLink className="nav-link" exact activeClassName="text-dark" to="/autherlist"><Button variant="primary" size="lg">
            AutherList
        </Button></NavLink>
                                    <NavLink className="nav-link" exact activeClassName="text-dark" to="/allposts">
                                    <Button variant="primary" size="lg">
                                        AllPosts
                                    </Button>
                                    </NavLink>
                           
        </div>

       

    </div>
   )
  }


export default Home