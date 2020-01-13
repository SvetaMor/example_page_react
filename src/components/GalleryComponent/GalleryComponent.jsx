import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { Gallery } from '../../css/styled';
import Paginator from '../common/Paginator';
import ImageBlock from './ImageBlock/ImageBlock';
import { GET_IMAGES } from '../../constants/reducers';

const GalleryComponent = (props) =>
{
   const data = props.data; //данные, полученные с сервера
   const title = data[0].metadata.title;

   //установим начальное состояние
   const totalItemsCount = data[0].metadata.images.length; //общее количество картинок, полученных с сервера
   const pageSize = data[0].metadata.slidesPerView; //количество картинок на странице

   const countCol = Math.ceil(12/pageSize); //ширина колонки в разметке bootstrap
   const countPages = Math.ceil(totalItemsCount/pageSize); //количество страниц с картинками

   const onPageChanged = (pageNumber, type) => {
      if (type==="prev" && pageNumber>1) {
         pageNumber--;
      } else if (type==="next" && pageNumber<countPages) {
         pageNumber++;
      }
      props.getImages([pageNumber, pageSize]); //получим массив картинок и сохраним в state
   }

   return(<Gallery>
         <h1 className="titleGallery">{title}</h1>
         <Row>
            { props.images.map(image => (
               <ImageBlock countCol={countCol} image={image} key={image}/>
            ))}
         </Row>
         <Paginator currentPage={props.currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount} pageSize={pageSize} />
      </Gallery>
   )
}

const mapStateToProps = (state) => {
   return {
      images: state.pageReducer.images,
      currentPage: state.pageReducer.currentPage
   }
}

const mapDispachToProps = (dispatch) => {
   return {
      getImages: values => dispatch({ type: GET_IMAGES, values: values })
   };
};

export default connect(mapStateToProps, mapDispachToProps)(GalleryComponent);
