import React, { useEffect, useState } from 'react'
import {Button, Container} from 'react-bootstrap'

/**
* @author
* @function Pagination
**/

const PaginationComp = (props) => {
    const [counter, setCounter]=useState(1);
    useEffect(() => {
        if(counter>0){
        props.findPageNo(counter);
    // console.log(counter)
        }
    }, [counter])
  return(
    <Container>
  <div className="d-flex justify-content-between">
  <Button variant="outline-primary" onClick={()=>setCounter(counter-1)}>Prev</Button>
  <Button variant="outline-primary" disabled>Page no is  : {counter}</Button>
  <Button variant="outline-primary" onClick={()=>setCounter(counter+1)}>Next</Button>
  </div>
   </Container>
   )
  }


 export default PaginationComp