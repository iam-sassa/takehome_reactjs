import React, { useState, useEffect } from "react";
import '../index.css';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useNavigate, Outlet } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

const HomePage = () => {

    const navigate = useNavigate();

    const navigateToBook = () => {
        navigate('/book', {replace: true})
    };

    const navigateToTable = () => {
        navigate('/table', {replace: true});
    };


    return (
        <>

<Layout style={{height: '100vh'}}>
      <Header style={{backgroundColor: '#678983', position: 'sticky', top: '0', zIndex: '100'}}>
      <Menu style={{backgroundColor: '#E6DDC4'}} mode="horizontal" defaultSelectedKeys={['brand']}>
    <Menu.Item key="brand">
      Booekenboost
    </Menu.Item>
    <Menu.Item onClick={navigateToBook} key="home" icon={<HomeOutlined />}>
      Home
    </Menu.Item>
    <Menu.Item onClick={navigateToTable} key="table" icon={<UnorderedListOutlined />}>
      Table
    </Menu.Item>
  </Menu>
      </Header>
      <Content style={{textAlign: 'center'}}>

      <Outlet style={{display: 'inline'}}/>
      </Content>
      <Footer style={{backgroundColor: '#678983', position: 'sticky', bottom: '0'}}>
        Booekenboost 2022
      </Footer>
    </Layout>

       

        </>
    );
};

export default HomePage;