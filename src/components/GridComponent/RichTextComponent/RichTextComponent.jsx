import React from 'react';

const RichTextComponent = ({data}) => {
   return(
      <div className="article">
         <h2>{data.title}</h2>
         <div className="articleText" dangerouslySetInnerHTML={{__html: data.text}}/>
      </div>
   )
}

export default RichTextComponent;
