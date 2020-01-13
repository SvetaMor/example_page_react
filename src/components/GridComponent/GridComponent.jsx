import React from 'react';
import RichTextComponent from './RichTextComponent/RichTextComponent';
import { Row } from 'react-bootstrap';
import { Articles } from '../../css/styled';

const GridComponent = ({data}) => {
   const articles = data[0].metadata.components;

   return <Articles>
      <Row>
         {articles.map(article => {
            return (
               <div className={article.col} key={article.metadata.title}>
                  <RichTextComponent data={article.metadata}/>
               </div>
            )
         })}
      </Row>
   </Articles>
}

export default GridComponent;
