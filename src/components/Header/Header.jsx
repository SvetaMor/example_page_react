import React from 'react';
import { Title } from '../../css/styled';
import { Container } from 'react-bootstrap';

const Navigation = (props) => {
   return(
      <Title>
         <Container>
            <div className="title">Тестовое задание</div>
         </Container>
      </Title>
   )
}

export default Navigation;
