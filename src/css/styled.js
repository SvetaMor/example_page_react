import styled from 'styled-components';

export const Title = styled.div`
   height: 70px;
   box-shadow: 0 -4px 20px -4px rgba(0, 0, 0, .2);

   .title {
      font-family: 'Montserrat';
      font-size: 16px;
      color: #323323;
      font-weight: 600;
      padding-top: 25px;
      text-align: left;
   }
`;

export const Gallery = styled.section`
   margin-bottom: 40px;

   .titleGallery {
      margin-top: 40px;
      margin-bottom: 24px;
      color: #323323;
   }

   .pagination {
      height: 12px;
      margin: 10px auto auto;
      width: 108px;
   }

   .paginationButton {
      width: 12px;
      height: 12px;
      background-color: #c9c9c9;
      border-radius: 12px;
      display: inline;
      margin: 0px 12px;
   }
   .currentButton{
      background: #93e08C; /* Для старых браузров */
      background: linear-gradient(to right, #93e08C, #78cebf);
   }

   .galleryImage {
      height: 243px;
      width: 364px;
      border-radius: 5px;
      background: #c4c4c4;
   }

   .imageBlock{
      margin-bottom: 24px;
      text-align: center;
   }

   .arrow-right, .arrow-left {
      color: #c9c9c9;
   }

   .fa-arrow-alt-circle-right, .fa-arrow-alt-circle-left {
      cursor: pointer !important;
      :hover{
         background: linear-gradient(to right, #78cebf, #93e08C);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
      }
   }

   .arrow-right {
      text-align: right;
   }
`;

export const Articles = styled.section`
   .article {
      margin-bottom: 40px;
      h2 {
         color: #323232;
         margin-bottom: 12px;
      }
      p {
         color:#000000;
      }
   }
   .row {
      margin: 0px;
   }
`;

export const ContactFormStyled = styled.div`
   .contactTitle {
      margin-bottom: 24px;
      color: #323232;
   }

   .form-control:focus {
      border-color: #93e08C;
      box-shadow: none;
   }

   .textareaItem, .notCol {
      height: 85%;
   }

   .checkbox {
      display: inline;
      margin-right: 10px;
   }

   .checkboxFormGroup{
      margin-top: 20px;
   }

   .buttonSubmit {
      background: linear-gradient(to right, #93e08C, #78cebf);
      border-radius: 5px;
   }
`;

export const FooterBlock = styled.div`
   height: 50px;
   background: #323232;
   margin-top: 20px;
`;
