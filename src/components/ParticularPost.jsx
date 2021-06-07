import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router'
import {AuthorData, CommentsOnPost, ALLCommentsOnPost, LikeOnPost} from'./CommonData';
/**
* @author
* @function ParticularPost
**/

const ParticularPost = (props) => {
  const {postId} = useParams();
   const [post, setPost] = useState(null);
   
    useEffect(()=>{
        const api =  fetch(`http://localhost:8000/posts?id=${postId}`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
                  setPost(data),
                  console.log(data)
           )
        })
        
      
    },[postId])
   
 
  return(
    <>


<div className="postDiv mb-3">
               {
                 post && post.map((resData, index)=>{
                
                return(
                     <>
                      
                         <Card>
                           <Card.Header className="d-flex justify-content-between text-white Bg-primary">
                              <h5>{resData.title}</h5>
                              
                              <AuthorData AuthorId={resData.userId}/>
                             
                              <h6> At : {resData.date} </h6>
                           </Card.Header>
                           <Card.Body>
                          
                              <Row>
                                  <Col md={5} sm={12} className="text-center">
                                  <Card.Img variant="top" className="perpostimgStyle mt-1 mb-2" src={resData.pic} alt="post img" />
                                  </Col>
                                  <Col md={7} sm={12} >
                                  <>
                                  <Table responsive striped hover variant="" className="tableStyl mt-1  mb-2">
                                
                                  <tbody>
                                      <tr></tr>
                                      <tr>
                                          <th>PostId</th>
                                          <td>{resData.id}</td>
                                      </tr>

                                      <tr></tr>
                                      <tr>
                                          <th>Title</th>
                                          <td>{resData.title}</td>
                                      </tr>

                                      <tr></tr>
                                      <tr>
                                          <th>Desc</th>
                                          <td>{resData.body}</td>
                                      </tr>
                                      <tr></tr>
                                      <tr>
                                          <th>Likes</th>
                                          <td><LikeOnPost postId={postId}/></td>
                                          <th>Total_Comments</th>
                                          <td><CommentsOnPost postId={postId}/></td>
                                          
                                      </tr>
                                      <tr></tr>
                                                                           
                                  </tbody>
                              </Table>
                                  </>
                                  </Col>
                          </Row>
                           </Card.Body>
                         
                       </Card>
                        <div className="container mt-3">
                        <Card>
                           <Card.Header className="text-center text-white bg-info">
                              <h5>All Comments</h5>
                           </Card.Header>
                           <Card.Body>
                           <ALLCommentsOnPost postId={postId}/>
                           </Card.Body>
                        </Card>
                        </div>
                       
                     </>
                 )
             })
         }
        
     
        
    
      
</div>

       
    </>
   )
  }


export default ParticularPost