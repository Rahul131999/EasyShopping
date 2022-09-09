/**
 * @Author: root
 * @Date:   2022-09-08T17:57:08+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-09T16:30:35+05:30
 */
 import {createSlice} from '@reduxjs/toolkit';

 import mainApi from '../Services/mainApi';

 const initialState = null;

 export const userCut = createSlice({
   name: 'user',
   initialState,
   reducers: {
     logout: ()=> initialState,
   },
   extraReducers: (builder) => {
       builder.addMatcher(mainApi.endpoints.signup.matchFulfilled, (_, { payload }) => payload);
       builder.addMatcher(mainApi.endpoints.login.matchFulfilled, (_, { payload }) => payload);
   },
 });

 export const { logout, addNotification, resetNotifications } = userCut.actions;

 export default userCut.reducer;
