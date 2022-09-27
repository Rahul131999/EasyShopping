/**
 * @Author: root
 * @Date:   2022-09-08T17:57:27+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-10T01:04:22+05:30
 */
import {createSlice} from '@reduxjs/toolkit';

import mainApi from '../Services/mainApi';

const initialState = [];

export const productCut = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProducts: (_, action) => {
            return action.payload;
    },
  },
});

export const { updateProducts } = productCut.actions;
export default productCut.reducer;
