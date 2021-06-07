import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Modal, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PaginationComp from './Pagination';

/**
* @author
* @function AuthorList
**/

const AuthorData = (props) => {

    const [author, setAuthor] = useState(null);
//    console.log("aaaaaaa"+props.AuthorId)

    useEffect(()=>{
        fetch(` http://localhost:8000/users?id=${props.AuthorId}`)
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
  return(
    <>
    {
        author && author.map((resData1, index)=>{
            return(
             <>
                <h5>                                       
                    <NavLink to={`/autherdetail/${resData1.id}`} className="nav-link text-white" exact activeClassName="text-dark" >
                        By : {resData1.name}
                    </NavLink>
                </h5>
            </>
                )
            })
    } 
    </>
   )
  }
const AuthorDataById = (props) => {

    const [author, setAuthor] = useState(null);
//    console.log("aaaaaaa"+props.AuthorId)

    useEffect(()=>{
        fetch(` http://localhost:8000/users?id=${props.AuthorId}`)
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
  return(
    <>
    {
        author && author.map((resData1, index)=>{
            return(
             <>
                                                      
                    <NavLink to={`/autherdetail/${resData1.id}`} className="nav-link text-warning" exact activeClassName="text-dark" >
                    XXXXX0{resData1.id}
                    </NavLink>
                
            </>
                )
            })
    } 
    </>
   )
  }

  const LikeOnPost=(props) =>{
    const [post, setPost] = useState(null);
    // var [likes,setLikes]= useState(0);
        var likes = "";
    // console.log("aaaaaaa"+props.postId)

    useEffect(()=>{
        fetch(` http://localhost:8000/likes?postId=${props.postId}`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
            //   console.log(data)
              setPost(data)
           )
        })
      
    },[props.postId])
 
return(
    <>

{
        post && post.map((resData, index)=>{
        likes = index+1
        
         } )
    } 
    {likes}
  
    </>
    
)
  }

  const Top10LikedPost=(props) =>{
    const [post, setPost] = useState(null);
        var likes = "";
        const [show, setShow] = useState(false);
        
        const [page, setPage] = useState(1);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    useEffect(()=>{
       fetch(`http://localhost:8000/posts?userId=${props.authorId}&_page=${page}&_limit=10`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
            //   console.log(data)
              setPost(data)
           )
        })
      
    },[props.postId,props.authorId])


    const findPageNo =(pageNo)=>{
        console.log("page is"+pageNo)
        setPage(pageNo)
    }
return(


<>
      <Button variant="primary" onClick={handleShow}>
        Top 10 Liked Post
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Table responsive striped bordered hover variant="dark">
            <thead className="m-0 p-0">
                <tr>
                <th>SN</th>
                <th>Post Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    post && post.map((resData, index)=>{
                      
                        return(
                            <>
                            <tr key={resData.id}>
                                <td>{index+1}</td>
                                
                                <td>
                                <NavLink className="nav-link text-warning" to={`/particularpost/${resData.id}`}>
                                        {resData.title}
                                    </NavLink>
                             </td>
                                
                            </tr>
                            </>
                        )
                    })
                }
               
               
            </tbody>
             
            </Table>
           {/* <PaginationComp findPageNo={findPageNo}/>     */}
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>



    
)
  }
 
  const Top10CommentededPost=(props) =>{
    const [post, setPost] = useState(null);
        var likes = "";
        const [show, setShow] = useState(false);
        
        const [page, setPage] = useState(1);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    useEffect(()=>{
       fetch(`http://localhost:8000/posts?userId=${props.authorId}&_page=${page}&_limit=10`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
            //   console.log(data)
              setPost(data)
           )
        })
      
    },[props.postId,props.authorId])


    const findPageNo =(pageNo)=>{
        console.log("page is"+pageNo)
        setPage(pageNo)
    }
return(


<>
      <Button variant="primary" onClick={handleShow}>
        Top 10 Commented Post
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Table responsive striped bordered hover variant="dark">
            <thead className="m-0 p-0">
                <tr>
                <th>SN</th>
                <th>Post Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    post && post.map((resData, index)=>{
                      
                        return(
                            <>
                            <tr key={resData.id}>
                                <td>{index+1}</td>
                                
                                <td>
                                <NavLink className="nav-link text-warning" to={`/particularpost/${resData.id}`}>
                                        {resData.title}
                                    </NavLink>
                             </td>
                                
                            </tr>
                            </>
                        )
                    })
                }
               
               
            </tbody>
             
            </Table>
           {/* <PaginationComp findPageNo={findPageNo}/>     */}
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>



    
)
  }
 
  const CommentsOnPost=(props) =>{
    const [comment, setComment] = useState(null);
    // var [likes,setLikes]= useState(0);
        var comnt = "";
            // console.log("aaaaaaa"+props.postId)

    useEffect(()=>{
        fetch(`http://localhost:8000/comments?postId=${props.postId}`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
            //   console.log(data)
              setComment(data)
           )
        })
      
    },[props.postId])
 
return(
    <>

{
        comment && comment.map((resData, index)=>{
        comnt = index+1
        
         } )
    } 
    {comnt}
  
    </>
    
)
  }
  
  const ALLCommentsOnPost=(props) =>{
    const [comment, setComment] = useState(null);
    
    const [page, setPage] = useState(1);
    // var [likes,setLikes]= useState(0);
        var comnt = "";
            // console.log("aaaaaaa"+props.postId)

    useEffect(()=>{
        fetch(` http://localhost:8000/comments?postId=${props.postId}&&_page=${page}&_limit=10`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
           return(
            //   console.log(data)
              setComment(data)
           )
        })
      
    },[props.postId,page])

    const findPageNo =(pageNo)=>{
        console.log("page is"+pageNo)
        setPage(pageNo)
    }
 
return(
    <>

<Card>
       
        <Card.Body>
        <Table responsive striped bordered hover variant="dark">
                <thead>
                <tr>
                <th>SN.</th>
                <th>Commenters Name</th>
                <th>Commenters ID</th>
                <th>Comments</th>
                </tr>
            </thead>
            <tbody>
            {
        comment && comment.map((resData,index)=>{
            return(<>
            
                 <tr>
                <td>{resData.id}</td>
                <td>{resData.commenterName}</td>
                <td><AuthorDataById AuthorId={resData.commenterId}/>
                </td>
                <td>{resData.body}</td>
                </tr>
                 </>)
        })
    }
            </tbody>
        </Table>
        </Card.Body>
        <PaginationComp findPageNo={findPageNo}/>
    </Card>

  
    </>
    
)
  }
  



export {AuthorData,AuthorDataById,LikeOnPost,Top10LikedPost, CommentsOnPost,ALLCommentsOnPost,Top10CommentededPost}