import React,{useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {removedata,totalamounts} from "../redux/Shoping.jsx"
import { useSelector,useDispatch } from 'react-redux';

function CartPage() {
  let dispatch=useDispatch()
  let userall = useSelector(state=>state.shop)
  let [total,setTotal]=useState(0)
  
  useEffect(() => {
    let sum = 0;
    userall.cartItem.forEach(item => {
      sum += item.quantity * item.price ;
      setTotal(sum); 
    });
},[userall.cartItem]);

return <>
  <div className='container' style={{display:"flex",flexDirection:"column",padding:"50px"}}>
   <div  style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
   {userall.cartItem.map((value,i)=>{
    return <div key={i} > 
    <div >
      <Card style={{ width:"20rem",padding:"5px",margin:"20px"}}>
      <Card.Img variant="top" src={value.thumbnail} style={{height:"10rem"}}/>
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Card.Text style={{height:"5rem"}}> {value.description}</Card.Text>
        <Button variant='danger' className='btn-sm' onClick={()=>dispatch(removedata({data:value,i}))}>Remove</Button>
      </Card.Body>
       <div style={{display:"flex",justifyContent:"space-around", padding:"15px"}}>
      <Form.Select style={{width:"60px"}}  onChange={(e)=>{dispatch(totalamounts({data:e.target.value,value,i}))}}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      </Form.Select>
    <h4><b>${value.quantity*value.price?value.quantity*value.price:value.price} </b></h4>
      </div>
      </Card>
    </div>
    </div>
   })}
   </div>
    

      <hr/>
    <div>
        <div style={{display:"flex",justifyContent:"space-between"}}><span>SUBTOTAL :</span><span><b>${total}</b></span></div><br/>
         <div style={{display:"flex",justifyContent:"space-between"}}><span>SHIPPING :</span> <span><b>FREE</b></span></div></div>
         <hr/>
         <div style={{display:"flex",justifyContent:"space-between"}}><span><b><h5>TOTAL :</h5></b></span><span><b><h5>${total}</h5></b></span></div>
    </div>
</>
}

export default CartPage