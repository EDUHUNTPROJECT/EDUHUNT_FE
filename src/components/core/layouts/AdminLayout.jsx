import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import AdminSidebar from "../../Admin/AdminSidebar"


const AdminLayout = ({ children }) => {
    return (
        
        <div className='flex bg-[#f3f3f3] h-screen'> 
            <div className='w-[15rem] bg-[#fff] p-5'>
                <AdminSidebar />
            </div>

            <div className='flex-grow p-5 bg-[#fff] ml-4 rounded-lg'>
                
                {children}
            </div>
        </div>
            
            
        
    )
};

export default AdminLayout;