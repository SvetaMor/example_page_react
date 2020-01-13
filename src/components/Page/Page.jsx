import React from 'react';
import { connect } from 'react-redux';
import { GET_COMPONENTS, GET_IMAGES, GET_FORM } from '../../constants/reducers';
import GalleryComponent from '../GalleryComponent/GalleryComponent';
import GridComponent from '../GridComponent/GridComponent';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import Preloader from '../common/Preloader';
import Footer from '../Footer/Footer';

const Page = (props) =>
{
   props.getPageComponents();
   props.getForm();

   const components = props.components;
   const form = props.form;
   const galleryData = components.filter(component => component.type==="GalleryComponent");
   const gridData = components.filter(component => component.type==="GridComponent")

   if (components.length!==0) {
      const slidesPerView = components[0].metadata.slidesPerView;
      props.getImages([1, slidesPerView]);
   }

   return (<>
      <Header />
      <Container>
      {
         (components.length===0)
         ?(<Preloader />)
         :(<>
            <GalleryComponent data={galleryData} />
            <GridComponent data={gridData} />
         </>)
      }
      {
         (form.length===0)
         ?(<Preloader />)
         :(<ContactUs data={form}/>)
      }
      </Container>
      <Footer/>
   </>)
}

const mapStateToProps = (state) => {
   return {
      components: state.pageReducer.components,
      form: state.pageReducer.form
   }
}

const mapDispachToProps = (dispatch) => {
   return {
      getPageComponents: () => dispatch({ type: GET_COMPONENTS }),
      getImages: (values) => dispatch({ type: GET_IMAGES, values: values }),
      getForm: () => dispatch({ type: GET_FORM })
   };
};

export default connect(mapStateToProps, mapDispachToProps)(Page);
