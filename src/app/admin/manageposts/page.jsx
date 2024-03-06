'use client'
import React, { useState, useEffect } from 'react';
import { Button, Table, Popconfirm, message } from 'antd';
import { useScholarship } from '../../../hooks/useScholarship';
import AdminLayout from '../../../components/core/layouts/AdminLayout'
import { useRouter } from 'next/navigation';

const ManageScholarshipPage = () => {
    const { getScholarship, deleteScholarship } = useScholarship();
    const [scholarshipData, setScholarshipData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "Admin") {
          router.push("/");
        }
        const fetchData = async () => {
          try {
            const data = await getScholarship();
            setScholarshipData(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    const handleDelete = async (id) => {
        try {
            await deleteScholarship(id);
            // If deletion is successful, update the scholarship data by filtering out the deleted item
            setScholarshipData(scholarshipData.filter(item => item.id !== id));
            message.success('Scholarship deleted successfully');
        } catch (error) {
            console.error(error);
            message.error('Failed to delete scholarship');
        }
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Popconfirm
                    title="Are you sure delete this scholarship?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button ttype="primary" danger size="small">Delete</Button>
                </Popconfirm>
            ),
        },
    ];
    console.log(scholarshipData);
    return (
        <AdminLayout>

        <div>
            <h1>Scholarship Management</h1>
            <Table dataSource={scholarshipData} columns={columns} />
        </div>
        </AdminLayout>
    );
};

export default ManageScholarshipPage;
