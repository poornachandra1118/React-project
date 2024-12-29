import React from 'react'
import { Form } from 'react-bootstrap'
import Navbar_1 from './Navbar'
import {Provider} from 'react-redux'
import store from './productstore';
import  './css/style.css'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux'
const Checkout = () => {
  const product_ids=useSelector(prop => prop.Product_ids)

  const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(
        response=>response.json()
        ).then(json1 =>setData(json1))
    },[])

    const finalldata=data.filter(x =>{
      for(let y of product_ids){
      if(x.id == y){
        return x
      }
    }
    })

    console.log(finalldata)
    const total=finalldata.map(x => x.price).reduce((x,acc)=>{
		
      return x+acc
    },0)
    console.log(total)




  
 
  return (

      
    <div>
        {/* <Navbar_1 /> */}
        <div><input value={product_ids}/></div>
           
<div class="container">
    <main>
      <div class="py-5 text-center">
        
        <h2>Checkout form</h2>
      
      </div>
  
      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Your cart</span>
            <span class="badge bg-primary rounded-pill">{finalldata.length}</span>
          </h4>
          <ul class="list-group mb-3">

            {finalldata.map( x => <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">{x.title.slice(0,15)}</h6>
                <small class="text-body-secondary">{x.description.slice(0,10)}</small>
              </div>
              <span class="text-body-secondary">{x.price}</span>
              <span><i class="bi bi-x-circle"></i></span>
            </li>  )}
            
           
            
            <li class="list-group-item d-flex justify-content-between">
              <span>Total </span>
              <strong>{total}</strong>
            </li>
          </ul>
  
         
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Billing address</h4>
          <Form className="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-12">
                <label for="firstName" class="form-label">Full name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
              
              </div>
  
             

  
              <div class="col-12">
                <label for="email" class="form-label">Email </label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                
              </div>
  
              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />

              </div>
  
             
  
              <div class="col-md-4">
                <label for="state" class="form-label">State</label>
                <select class="form-select" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
               
              </div>
  
              <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required />
               
              </div>
            </div>
  
           
            <hr class="my-4" />
  
            <h4 class="mb-3">Payment</h4>
  
            <div class="my-3">
              <div class="form-check">
                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                <label class="form-check-label" for="credit">COD</label>
              </div>
            
            </div>
  
           
         
  
            <hr class="my-4" />
  
            <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </Form>
        </div>
      </div>
    </main>
</div>

      
    </div>
   
  )
}

export default Checkout
