import React, { useEffect, useState} from "react";
import { Select, Form, Input, Button, Modal } from 'antd';
import axios from "axios";
// import MyButton from "./MyButton";

const { TextArea } = Input;


const MyModal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [author, setAuthor] = useState();
  const [selected, setSelected] = useState();
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const postData = async (e) => {
    console.log("Post");

    try {
      const res = await axios.post("http://localhost:3004/books", {
        title: e.target[0].value,
        author: parseInt(author),
        cover: e.target[2].value,
        genre: selected,
        desc: e.target[4].value,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setIsModalOpen(false);
  };

const genre = [
  {
    id: 1,
    value:  "Comedy"
  },
  {
    id: 2,
    value:   "Drama"
  },
  {
    id: 3,
    value:   "Mistery"
  },
  {
    id: 4,
    value:  "Fiction"
  },
  {
    id: 5,
    value:  "Fantasy"
  }
  
]

  const [data, setData] = useState([]);

      const getData = async () => {
       
        try {
          const response = await axios.get("http://localhost:3004/author");
    
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
        useEffect(() => {
        getData();
      }, []);

      const authorChange = (value) => {
        let chosen = `${value}`;
        setAuthor(chosen)
        console.log(author);
      };

      const handleChange = (value) => {
        let chosen = `${value}`;
        setSelected(chosen)
        console.log(selected);
      };

    return (
        <>

<Button type="primary" onClick={showModal}>
        Add Book
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

<form  
                    onSubmit={(e) => {
                      postData(e);
                    }}
                  >

                    <h1>Add New Book</h1>
                    <label for="title">Title
                    <Input type="text" placeholder="title" allowClear />
                    </label>
                    <label for="author">Author </label>
                    <Select defaultValue={data[0]} 
                            onChange={authorChange}
                            style={{margin: '20px'}}
                      > {data.map(row => (
                            <Select.Option key={row.id} >{row.value}</Select.Option>
                        ))}
                        </Select>
                        <br/>
                       
                        <label for="cover">Cover
                    <Input type="text" placeholder="cover" allowClear />
                    </label>
                    <label for="genre">Genre</label>
                    <Select
                      defaultValue={genre[0]} 
                      onChange={handleChange}
                      style={{margin: '20px'}}

                      > {genre.map(row => (
                        <Select.Option key={row.value}>{row.value}</Select.Option>
                      ))}
                      </Select>
                      
                      <br/>
                      <label for="desc">Description
                    <TextArea placeholder="desc" autoSize={{ minRows: 3, maxRows: 5, }}  style={{margin: '10px'}} />
                    </label>
  
                    <Button htmlType="submit" itemType="submit" type="primary" >Post Data</Button>
                  </form>
      </Modal>
       
      </>
    );
};

export default MyModal;