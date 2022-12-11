import React, { useState, useEffect } from "react";
import { SolutionOutlined, BookOutlined } from '@ant-design/icons';
import { Space, Table, Menu, Button } from 'antd';
import axios from "axios";
import MyModal from "../components/MyModal";

const TablePage = () => {


    const [data, setData] = useState([]);
    const getData = async () => {
       
        try {
          const response = await axios.get("http://localhost:3004/books?_limit=6&_page=");
    
          setData(response.data.map(row => ({
            no: row.id,
            title: row.title,
            genre: row.genre,
            author: row.author,
            description: row.desc.substr(0, 25) + "..."
          })));
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
    
        useEffect(() => {
        getData();
      }, []);

      const deleteData = async (e) => {
        try {
          const res = await axios.delete(
            "http://localhost:3004/books/" + e.target[0].value
          );
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      };

      const columns = [
    
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
       },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Genre',
        dataIndex: 'genre',
        key: 'genre',
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Action',
        key: 'no',
        render: (_, record) => (
          <Space size="middle">
            <Button onClick={(e) => {deleteData(data)}} >Delete</Button>
            
          </Space>
        ),
      },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
        <>
        <Menu style={{backgroundColor: 'transparent'}} mode="horizontal">
    <Menu.Item key="author" icon={<SolutionOutlined />}>
      Author
    </Menu.Item>
    <Menu.Item key="book" icon={<BookOutlined />}>
      Book
    </Menu.Item>
  </Menu>
            <div style={{ padding: '50px'}}>
                <div style={{margin: '20px'}}>
<MyModal/>
                
                </div>

                <div>
                <Table key={data} style={{display: 'inline'}} columns={columns} dataSource={data}  size="small"/>
                </div>
            </div>
        </>
    );
};

export default TablePage;