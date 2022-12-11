import React from "react";
import { Button } from 'antd';

const MyButton = (props) => {
    return (
        <Button hoverable onClick={props.function} type={props.type}>{props.name}</Button>
    );
};

export default MyButton;