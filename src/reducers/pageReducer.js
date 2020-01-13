import { SET_COMPONENTS, SET_IMAGES, SET_FORM } from '../constants/reducers';

let initialState = {
    components: [],
    images: [],
    currentPage: 1,
    form: []
};

export const pageReducer = (state = initialState, action) => {
    const values = action.value;
    switch (action.type) {
      case SET_COMPONENTS:
         return {
            ...state,
            components: values
         }
      case SET_IMAGES:
         return {
            ...state,
            images: values.images,
            currentPage: values.page
         }
      case SET_FORM:
      return {
         ...state,
         form: values
      }
      default:
         return state;
   }
}
