import React from "react";
import { useLocation } from "react-router-dom";
import { Image } from "antd";

const BookDetail = () => {
    const location = useLocation();
    console.log(location);

    return (
        <>
         <h1>Booekenboost Book Detail</h1>
        <div style={{margin: '30px', display: 'flex', flexDirection: 'row', marginLeft: '80px'}}>


            <div>
            <Image
        width={200}
        height={300}
        src={location.state.cover} />

            </div>


    <div style={{textAlign: 'left', margin: '50px'}}>
    <h1>{location.state.title}</h1>
    <h3>Description</h3>
    <p>{location.state.description}</p>
    <p> <b>Author : </b> <span>{location.state.author}</span></p> 
    <p> <b>Genre : </b> <span>{location.state.genre}</span></p> 

    </div>
            
        </div>
        
        
        
        </>

    );
};

export default BookDetail;