import page from './page.json';

//получаем данные компонентов  из json-файла
export const getComponents = () => {
    const components = page.components;
    return components;
}

//получаем порцию картинок из json-файла
export const getImages = (values) => {
   const allImages = page.components[0].metadata.images; //все картинки (массив картинок)
   const firstImageIndex = (values[0]-1)*values[1]; //вычисляем индекс первой картинки для вывода на странице
   const lastImageIndex = firstImageIndex + values[1]; //вычисляем индекс последней картинки для вывода на странице
   const portionImages = allImages.slice(firstImageIndex, lastImageIndex);
   return portionImages;
}

//получаем структуру формы
export const getFormData = () => {
   const form = page.form;
   return form;
}
