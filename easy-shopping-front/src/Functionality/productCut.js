/**
 * @Author: root
 * @Date:   2022-09-08T17:57:27+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-08T21:06:11+05:30
 */
import {createSlice} from '@reduxjs/toolkit';

import mainApi from '../Services/mainApi';

const initialState = [];

export const productCut = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productCut.reducer;
