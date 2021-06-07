import React, { useEffect, useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import PaginationComp from './Pagination';

/**
* @author
* @function AutherListScreen
**/

const AutherListScreen = (props) => {
    const [author, setAuthor] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        fetch(` http://localhost:8000/users?_page=${page}&_limit=20`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
            //   console.log(data)
              setAuthor(data)
           )
        })
    },[page])

    const findPageNo =(pageNo)=>{
        console.log("page is"+pageNo)
        setPage(pageNo)
    }
    
  return(
    <Container>
  


<Card>
        <Card.Header className="Bg-primary text-center text-white">
            <h3>Auther List</h3>
        </Card.Header>
        <Card.Body>
        <Table responsive striped bordered hover variant="dark">
                <thead>
                <tr>
                <th>SN.</th>
                <th>Auther Name</th>
                </tr>
            </thead>
            <tbody>

            {author && author.map((resData, index)=>{
            return(
                <>
                 <tr>
                <td>{resData.id}</td>
                <td><NavLink to={`/autherdetail/${resData.id}`} className="nav-link text-white" exact activeClassName="text-dark " >{resData.name}</NavLink></td>
                </tr>

                </>
            )
        })
    }


               
            </tbody>
        </Table>
        </Card.Body>
        <PaginationComp findPageNo={findPageNo}/>
    </Card>

    
        
    </Container>
   )
  }


export default AutherListScreen