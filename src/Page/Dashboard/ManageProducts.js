import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../../redux/thunk/product/fetchData';

const ManageProducts = () => {
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()
useEffect(()=> {

    dispatch (fetchData())
},[])
    return (
        <table class="table-auto">
        <thead>
          <tr>
            <th>Img</th>
            <th>Product</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
            products.map(product =>   <tr >
                <td><img className='w-4 h-4 rounded-full object-cover' src={product.productImg} /></td>
                <td>{product.productTitle}</td>
                <td>{product.productPrice}</td>
                <td className='flex gap-2'>
                    <button className=' btn bg-gray-200 rounded-md p-1 text-blue-500 hover:text-white'>Edit</button>
                    <button className=' btn bg-gray-500 rounded-md p-1 text-white hover:text-red-500'>Delete</button>
                </td>
              </tr>)
        }
        </tbody>
      </table>
    );
};

export default ManageProducts;