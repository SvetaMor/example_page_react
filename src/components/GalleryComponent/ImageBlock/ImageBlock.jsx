import React from 'react';
import {  Col, Image } from 'react-bootstrap';

const ImageBlock = (props) => {
   return (
      <Col xl={props.countCol}>
        <p className="imageBlock"><Image src={props.image} className="galleryImage" /></p>
      </Col>
   )
}

export default ImageBlock;
