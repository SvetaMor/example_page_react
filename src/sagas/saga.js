import { takeLatest, put } from 'redux-saga/effects';
import {GET_COMPONENTS, SET_COMPONENTS, GET_IMAGES, SET_IMAGES, GET_FORM, SET_FORM} from '../constants/reducers';

import { getComponents, getImages, getFormData } from '../db/gettingResult';

function* getPageComponents() {
    const components = yield getComponents();
    yield put({type: SET_COMPONENTS, value: components});
}

function* getForm() {
    const form = yield getFormData();
    yield put({type: SET_FORM, value: form});
}

function* getPortionImages(values) {
    const images = yield getImages(values.values);
    const currentPage = values.values[0];
    yield put({type: SET_IMAGES, value: {images: images, page: currentPage}});
}

export function* watchSignIn() {
    yield takeLatest(GET_COMPONENTS, getPageComponents);
    yield takeLatest(GET_IMAGES, getPortionImages);
    yield takeLatest(GET_FORM, getForm);
}
