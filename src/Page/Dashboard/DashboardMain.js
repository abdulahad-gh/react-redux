import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardMain = () => {
    return (
        //sidebar of dashboard
       <section className='flex'>
         <div className='w-80  h-screen bg-gray-600 flex flex-col text-white'>
            <Link to='manage-products' className='bg-black' >Manage Products</Link>
            <Link to='add-new-product'>Add new product</Link>
           
        </div>
        <Outlet/>
       </section>
    );
};

export default DashboardMain;