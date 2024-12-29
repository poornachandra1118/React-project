import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import AddToCart_Items from './Product/ProductAction'
import  './css/style.css'
const Home1 = () => {

    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(
        response=>response.json()
        ).then(json1 =>setData(json1))
    },[])

    let [data1,setdataall]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(
        response=>response.json()
        ).then(json1 =>setdataall(json1))
    },[])

   
    // category
    const Menu=[]
    data1.forEach(x =>{
      
      let d1=Menu.indexOf(x.category)
      if (d1 === -1){
          Menu.push(x.category)
      }
    })
    
    const [product,AddCart]=useState([])
    // console.log(product)

    const [cart,AddCart1]=useState([])

    const handler=(event)=>{
        event.preventDefault()
        alert(event.target.value)
        console.log(product)
    }
    const Addtocart =(value) =>{

        (product!='') ? AddCart(product+','+value):AddCart(product+value);
        (cart!='') ? AddCart1(cart+',' + value):AddCart1(cart + value);
        
    }
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(AddToCart_Items(cart))
    },[cart])

    const product_ids=useSelector(state => state.Product_ids)
    

    const [filterdata,filter]=useState(0)
    console.log(filterdata)
   
    useEffect(()=>{

        console.log(filterdata)
        let fdata=data1.filter(x => x.category==filterdata)
        
        setData(fdata)
        console.log(fdata)
        
    },[filterdata])
    
    // if (filterdata!=0){
    //   var dataall=data1
    //   console.log('final',data1)
    // }
    // else{
    //   var dataall=data
    // }
   
    // console.log('dataall',dataall)
    
   

   
  return (
    <div>
        <div><input onChange={handler} value={product} /><p>{product_ids}</p></div>
         <div className='row'>

<div className='col-lg-3 col-md-3 col-12'>
<div className='bg-body-secondary p-3 mt-2 ms-4'>
<h3 className='text-center'>Menu</h3>
        <ul className='menu'>
          {Menu.map((x)=><li key={x} onClick={()=>filter(x)} ><a href="#" >{x}</a></li>)}
        </ul>
</div>
</div>



<div className='col-lg-9 col-md-9 col-12'>
<div className='row'>


        {data.map(x => <div key={x.id} className='col-lg-4 col-md-4 '  >
    <div className='bg-body-secondary p-3  mt-2 rounded'  width={'100%'}>
        {/* <h1 className='p-5 bg-info mt-2'>{x.title}</h1> */}
       <div className='text-center'> <img src={x.image}  width={'100%'} height={250} className='mt-2 bg-info'/></div>
        <div className='mb-2' height={500}>
            <h5>{x.title.slice(0,20)}</h5>
        <p>{x.description.slice(0,100)}</p>

          <a href='#'  className='btn btn-info'>View</a>
           {/* <a href='#'  onClick={()=> (product!='') ? AddCart(product+','+x.id):AddCart(product+x.id) } className='btn btn-success'>Add To Cart</a> */}
           <a href='#'  onClick={()=>Addtocart(x.id)} className='btn btn-success'>Add To Cart</a>
        </div>
        </div>
  </div>)}
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home1
