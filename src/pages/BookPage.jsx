import React, { useState, useEffect } from "react";
import '../index.css';
import axios from "axios";
import { Col, Row, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import MyButton from "../components/MyButton";

const { Meta } = Card;

const BookPage = () => {

    const navigate = useNavigate();

    const [data, setData] = useState();
    const [offset, setOffset] = useState(1);

    const navigateToDetail = (book) => {
        navigate(`/detail/${book.id}`, {replace: true, state: { id: book.id, title: book.title, description: book.desc, author: book.author, genre: book.genre, cover: book.cover }  } );
    };

    const addOffset = () => {
        setOffset(offset + 1);
        console.log(offset);
    }
    
    const minOffset = () => {
        setOffset(offset - 1);
        console.log(offset);
    }
    
    const getData = async () => {
       
        try {
          const response = await axios.get("http://localhost:3004/books?_page=" + offset);
    
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
        useEffect(() => {
        getData();
      }, [offset]);

    
    
    return (
       <>
       <h1>Booekenboost Book Page</h1>

         <Row gutter={8} style={{overflowX: 'hidden', overflowY: 'auto', height: '400px', marginLeft: '250px'}} >
                  {data?.map((book) => (
                         <Card span={16}
                            key={book.id}
                            hoverable
                            style={{
                                backgroundColor: '#F0E9D2',
                                padding: '10px',
                                margin: '10px'
                            }}
                            cover={  <img style={{width: '250px', height: '300px'}} alt='' src={book.cover} />}
                        >
                            <Meta title={book.title} description={book.desc.substr(0, 25) + "..."} />
                            <MyButton function={() => {navigateToDetail(book)}} name="See More" type="dashed"/>
                            
                        </Card>

                  ))}
              </Row>

              <Row gutter={8} style={{marginLeft: '250px', marginRight: 'auto'}}>
                <Col span={6}></Col>
              <Col span={6}>
                <MyButton function={minOffset} name="Prev" />
                <MyButton function={addOffset} name="Next" />
                </Col>
                <Col span={6}></Col>
              </Row>
       
       </>
    );
};

export default BookPage;