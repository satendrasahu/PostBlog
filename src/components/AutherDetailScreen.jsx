import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card, Col,Dropdown,Form, Row, Table } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom';
import { CommentsOnPost, LikeOnPost, Top10CommentededPost, Top10LikedPost } from './CommonData';
import PaginationComp from './Pagination';

/**
* @author
* @function AutherDetailScreen
**/

const AutherDetailScreen = (props) => {
    const {authorId} = useParams();
    const [post, setPost] = useState(null);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(0);

    const [author, setAuthor] = useState(null);
   
     useEffect(()=>{
         fetch(` http://localhost:8000/users?id=${authorId}`)
         .then(res =>{
             return res.json();
         })
         .then(data=>{
            return(
             //   console.log(data)
               setAuthor(data)
            )
         })
       
     },[props.AuthorId])
   
   

    useEffect(()=>{
        if(sort===0){
            fetch(`http://localhost:8000/posts?userId=${authorId}&_page=${page}&_limit=20`)
            .then(res =>{
                return res.json();
            })
            .then(data=>{
               return(
                      setPost(data)
               )
            })
    }
        if(sort===1){
        fetch(`http://localhost:8000/posts?userId=${authorId}&&_page=${page}&_limit=20&&_sort=date&_order=asc`)
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
            console.log(authorId,page, sort)
        fetch(`http://localhost:8000/posts?userId=${authorId}&&_page=${page}&_limit=20&&_sort=date&_order=desc`)
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
    },[page,sort,authorId])
    




    
    const findPageNo =(pageNo)=>{
        console.log("page is"+pageNo)
        setPage(pageNo)
    }
    
  
  return(
      <>
        
    <div className="postDiv mb-3">
        <>
        <Card>
        <Row>

        {
        author && author.map((resData1, index)=>{
            console.log(resData1.name)
            return(
             <>
               <Col md={4} sm={12} className="text-center">
                <Card.Img variant="top" className="imgStyle mt-1 mb-2" src={resData1.pic} alt="" />
                <h5>{resData1.name}</h5>
            </Col>
            <Col md={8} sm={12} >
               <Table responsive striped hover variant="" className="tableStyl mt-1  mb-2">
           
             <tbody>
                <tr></tr>
                <tr>
                    <th>Name</th>
                    <td>{resData1.name}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Id</th>
                    <td>XXXXX0{resData1.id}</td>
                </tr>

                <tr></tr>
                <tr>
                    <th>Profession</th>
                    <td>Software Developer</td>
                </tr>

                <tr></tr>
                <tr>
                    <th>DOB</th>
                    <td>11/04/1995</td>
                </tr>
                
                <tr></tr>
                <tr>
                    <th>Permanent Address</th>
                    <td>
                        {resData1.address.street+" "}
                        {resData1.address.suite+" "}
                        {resData1.address.city+" "}
                        {resData1.address.zipcode}
                        </td>
                </tr>

                <tr></tr>
                <tr>
                    <th>Local Address</th>
                    <td>DII-19,BIT,Mesra Ranchi-835215</td>
                </tr>

                <tr></tr>
                <tr>
                    <th>Website</th>
                    <td>{resData1.website}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Phone</th>
                    <td>{resData1.phone}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Email Id</th>
                    <td>{resData1.email}</td>
                </tr>
                
            </tbody>
        </Table> 
            </Col>
            </>
                )
            })
        } 

            
     </Row>
           
           
        </Card>

        </>
    </div>
   

   
    <div className="postDiv mb-3">
        
        <Card>
            <Card.Header className="text-center text-white Bg-primary">
                    <h5>Your Posts</h5>
            </Card.Header>
            <div className="postDiv d-flex justify-content-between">
                <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle id="dropdown-custom-1" >Sort By Date</Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                <Dropdown.Item eventKey="1" onClick={()=>setSort(1)}>Asc</Dropdown.Item>
                <Dropdown.Item eventKey="2"onClick={()=>setSort(2)}>Desc</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                <Top10LikedPost title="Top 10 Liked Post" authorId={authorId}/>
                <Top10CommentededPost title="Top 10 Commented Post" authorId={authorId}/>
            </div>
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
                                <td>{index+1}</td>
                                <td className="m-0 p-0 text-center" style={{margin:"0px", padding:"0px"}}>
                                    
                                    
                                   <img  className="postImg" src={resData.pic} alt=""/>
                                 
                                </td>
                                <td>
                                <NavLink className="nav-link text-warning" to={`/particularpost/${resData.id}`}>
                                        {resData.title}
                                    </NavLink>
                             </td>
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


export default AutherDetailScreen
