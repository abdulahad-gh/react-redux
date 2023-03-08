import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteProductThunk from '../../../redux/thunk/product/deleteProduct';
import fetchData from '../../../redux/thunk/product/fetchData';

const ManageProducts = () => {
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    const [modalBox, setModalBox] = useState(false)
    const [updateSelectProduct, setUpdateSelectProduct] = useState({})
const {id,productTitle,productPrice,productImg,status,brand,productDesc} = updateSelectProduct;
let imgUrl = productImg

//  const [imgAsset, setImgAsset] = useState(imgUrl)
const dleteImg = (e) => {
  e.preventDefault()
  imgUrl=''
  console.log(imgUrl)
}
    useEffect(()=> {

    dispatch (fetchData())
},[])
    return (
      <>
      { modalBox ? 
  

<section className='w-[60%] bg-red-300 p-1 flex flex-col rounded-md gap-2'>
<h3 className='text-center'>Edit your product</h3>
  <form>
<div className='flex justify-around'>
<div className='flex flex-col'>
  <label>Title</label>
<input type='text' value={productTitle}/>
<label>Price</label>

    <input type='number' value={productPrice}/>
  <label>Description</label>

    <input type='text' value={productDesc}/>
</div>
<div>
  {
    imgUrl ? <div>
       <button onClick={(e)=>dleteImg(e)} className='bg-red-500 rounded-md'>Delete</button>
      <img className='w-32 object-cover' src={productImg}/>

    </div>
    :
<input className='w-32' type='file' accept='image/*' />
  }
  <label>Select Brand</label>

  <select>
    <option  value='amd'>AMD</option>
    <option  value='intel'>Intel</option>
  
  </select>
  <label>Select status</label>
  <select>
    <option  value={true}>True</option>
    <option  value={false}>False</option>
  
  </select>

</div>
</div>
  </form>
      <div className='flex gap-4'> 
       <button onClick={()=>setModalBox(false)} className='bg-red-500'>Cancel</button>
      <button  onClick={()=>setModalBox(false)} className='bg-blue-500'>Update</button></div>
      </section>
  


      :
      <div className='flex justify-center items-center  h-[300px]'>
          <table class="table-auto">
        <thead>
          <tr>
            <th>Img</th>
            <th>Product</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody > 
        {
            products.map(product =>   <tr >
                <td><img className='w-4 h-4 rounded-full object-cover' src={product.productImg} /></td>
                <td>{product.productTitle}</td>
                <td>{product.productPrice}</td>
                <td className='flex gap-2'>
                    <button onClick={()=> {
                      setUpdateSelectProduct(product)
                      setModalBox(true)
                    }} className=' btn bg-gray-200 rounded-md p-1 text-blue-500 hover:text-white'>Edit</button>
                    <button onClick={()=>dispatch(deleteProductThunk(product.id))} className=' btn bg-gray-500 rounded-md p-1 text-white hover:text-red-500'>Delete</button>
                </td>
              </tr>)
        }
        </tbody>
      </table>
      </div>
      }
      </>
    );
};

export default ManageProducts;