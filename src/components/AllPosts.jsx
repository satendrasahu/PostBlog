import React, { useEffect, useState } from 'react'
import { ButtonGroup, Card,Dropdown, Form,Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import {CommentsOnPost, LikeOnPost } from './CommonData';
import PaginationComp from './Pagination';
/**
* @author
* @function AllPosts
**/

const AllPosts = (props) => {
  const [post, setPost] = useState(null);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(0);
   
    useEffect(()=>{
        if(sort===0){
        const api =  fetch(`http://localhost:8000/posts?_page=${page}&_limit=20`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
                  setPost(data),
                  console.log(data)
           )
        })
    }
        if(sort===1){
        const api =  fetch(`http://localhost:8000/posts?_page=${page}&_limit=20&&_sort=date&_order=asc`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
                  setPost(data),
                  console.log(data)
           )
        })
    }
        if(sort===2){
        const api =  fetch(`http://localhost:8000/posts?_page=${page}&_limit=20&&_sort=date&_order=desc`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
                  setPost(data),
                  console.log(data)
           )
        })
    }
        if(sort===3){
        const api =  fetch(`http://localhost:8000/posts?_page=${page}&_limit=20&&_sort=id&_order=asc`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
                  setPost(data),
                  console.log(data)
           )
        })
    }
        if(sort===4){
        const api =  fetch(`http://localhost:8000/posts?_page=${page}&_limit=20&&_sort=id&_order=desc`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
                  setPost(data),
                  console.log(data)
           )
        })
    }
        
    },[page,sort])
    
    const findPageNo =(pageNo)=>{
        console.log("page is"+pageNo)
        setPage(pageNo)
    }
    
  return(
    <>
            <div className="postDiv mb-3 d-flex justify-content-between">
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-custom-1" >Sort By Date</Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1" onClick={()=>setSort(1)}>Asc</Dropdown.Item>
            <Dropdown.Item eventKey="2"onClick={()=>setSort(2)}>Desc</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
{/* <h1>{sort}</h1> */}
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-custom-1">Sort By Likes</Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1" onClick={()=>setSort(3)}>Asc</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={()=>setSort(4)}>Desc</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>



        </div>
        
     <div className="postDiv mb-3">
        <Card>
            <Card.Header className="text-center text-white Bg-primary">
                    <h5>All Posts</h5>
            </Card.Header>
            <Card.Body>
            <Table responsive striped bordered hover variant="dark">
            <thead className="m-0 p-0">
                <tr>
                <th>SN</th>
                <th>Post Pic</th>
                <th>Post Title</th>
                <th>Post Description</th>
                <th>Posted At</th>
                <th>Post Likes</th>
                <th>Post Comments</th>
                </tr>
            </thead>
            <tbody>
                {
                    post && post.map((resData, index)=>{
                      
                        return(
                            <>
                            <tr key={resData.id}>
                                <td>{resData.id}</td>
                                <td className="m-0 p-0 text-center" style={{margin:"0px", padding:"0px"}}>
                                    
                                    
                                   <img  className="postImg" src={resData.pic} alt=""/>
                                  
                                </td>
                                <td> 
                                    {/* <NavLink className="nav-link" to={`particularpost/${resData.id}`}> */}
                                    <NavLink className="nav-link text-warning" to={`particularpost/${resData.id}`}>
                                        {resData.title}
                                    </NavLink></td>
                                <td>
                                    <Form >
                                        <Form.Control as="textarea" className="text-white textareaStyle bg-transparent scrollbar-none" rows={7} value={resData.body}/>
                                    </Form>
                                    </td>
                                <td>{resData.date}</td>
                                <td>
                                    <LikeOnPost postId={resData.id}/>
                                </td>
                                <td>
                                    <CommentsOnPost postId={resData.id}/>
                                </td>
                            </tr>
                            </>
                        )
                    })
                }
               
               
            </tbody>
             
            </Table>
           <PaginationComp findPageNo={findPageNo}/>
            </Card.Body>
          
        </Card>
    </div>

    </>
   )
  }


export default AllPosts