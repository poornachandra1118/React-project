import React from 'react'
import  './css/style.css'
const Home = () => {
    const Menu=['python','Java','Php','Html','Css','Js','Django']
  return (
    <div>
        <div className='row'>

<div className='col-lg-3 col-md-3 col-12'>
<div className='bg-body-secondary p-3 mt-2 ms-4'>
<h3 className='text-center'>Menu</h3>
        <ul className='menu'>
          {Menu.map((x)=><li ><a href="#">{x}</a></li>)}
          
        </ul>
</div>
</div>



<div className='col-lg-9 col-md-9 col-12'>
<div className='row'>
<div className='col-lg-4 col-md-4 '  >
    <div className='bg-body-secondary p-3  mt-2 rounded'>
        <h1 className='p-5 bg-info mt-2'>Card-image</h1>
        <div className='mb-2'>
        <p>More complex forms can be built using the grid components. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

          <a href='#' className='btn btn-info'>View</a> <a href='#' className='btn btn-success'>Add To Cart</a>
        </div>
        </div>
  </div>
  <div className='col-lg-4 col-md-4 '  >
    <div className='bg-body-secondary p-3  mt-2 rounded'>
        <h1 className='p-5 bg-info mt-2'>Card-image</h1>
        <div className='mb-2'>
        <p>More complex forms can be built using the grid components. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

          <a href='#' className='btn btn-info'>View</a> <a href='#' className='btn btn-success'>Add To Cart</a>
        </div>
        </div>
  </div>
  <div className='col-lg-4 col-md-4 '  >
    <div className='bg-body-secondary p-3  mt-2 rounded'>
        <h1 className='p-5 bg-info mt-2'>Card-image</h1>
        <div className='mb-2'>
        <p>More complex forms can be built using the grid components. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

          <a href='#' className='btn btn-info'>View</a> <a href='#' className='btn btn-success'>Add To Cart</a>
        </div>
        </div>
  </div>
  <div className='col-lg-4 col-md-4 '  >
    <div className='bg-body-secondary p-3  mt-2 rounded'>
        <h1 className='p-5 bg-info mt-2'>Card-image</h1>
        <div className='mb-2'>
        <p>More complex forms can be built using the grid components. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

          <a href='#' className='btn btn-info'>View</a> <a href='#' className='btn btn-success'>Add To Cart</a>
        </div>
        </div>
  </div>
  <div className='col-lg-4 col-md-4 '  >
    <div className='bg-body-secondary p-3  mt-2 rounded'>
        <h1 className='p-5 bg-info mt-2'>Card-image</h1>
        <div className='mb-2'>
        <p>More complex forms can be built using the grid components. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

          <a href='#' className='btn btn-info'>View</a> <a href='#' className='btn btn-success'>Add To Cart</a>
        </div>
        </div>
  </div>
  <div className='col-lg-4 col-md-4 '  >
    <div className='bg-body-secondary p-3  mt-2 rounded'>
        <h1 className='p-5 bg-info mt-2'>Card-image</h1>
        <div className='mb-2'>
        <p>More complex forms can be built using the grid components. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

          <a href='#' className='btn btn-info'>View</a> <a href='#' className='btn btn-success'>Add To Cart</a>
        </div>
        </div>
  </div>
</div>
</div>


</div>
      
    </div>
  )
}

export default Home
