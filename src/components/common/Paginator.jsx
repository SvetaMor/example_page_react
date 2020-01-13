import React from 'react';
import {getCountPages} from '../../utils/object-helpers';
import { Row, Col } from 'react-bootstrap';

const Paginator = (props) => {
   //получим количество страниц
   const gettingPages = getCountPages(props.totalItemsCount, props.pageSize);
   const pages = gettingPages.pages;

   return (
      <Row>
         <Col>
            <div className="arrow-left" onClick={() => {props.onPageChanged(props.currentPage,"prev")}}>
               <i className="far fa-arrow-alt-circle-left fa-2x"/>
            </div>
         </Col>
         <Col>
            <div className= "pagination">
               {pages.map( page =>
                  {
                     return <div className= {(page===props.currentPage)?"paginationButton currentButton":"paginationButton"}
                              key= {page}
                              onClick={(e) => {props.onPageChanged(page);}} />
                  }
               )}
            </div>
         </Col>
         <Col>
            <div className="arrow-right" onClick={() => {props.onPageChanged(props.currentPage,"next")}}>
               <i className="far fa-arrow-alt-circle-right fa-2x"/>
            </div>
         </Col>
      </Row>
   )
}

export default Paginator;
