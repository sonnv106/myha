import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { onGoogleButtonPress } from '../screens/login/LoginManager';
import { autoLogIn } from '../api';

export const authSelector = state => state.auth

// export const createUser = createAsyncThunk(
//     'createUser', 
//     async (_, {fulfillWithValue, rejectWithValue}) => {
//     try {
//         const response = await onGoogleButtonPress()
//         return fulfillWithValue(response)
//     } catch (error) {
//         return rejectWithValue(error)
//     } 
// });


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: '',
        user: null
    },
    reducers: {
            autoLoginPending(state) {
            state.loading = true
        },
            autoLoginFulfilled(state, action) {
            state.loading = false
            state.error = ''
            state.user = action.payload
        },
            autoLoginRejected(state) {
            console.log('reject', state);
            
            state.loading = false
            state.user = null
        },

        createUserLoading(state){
            state.loading = true
        },
        createUserSuccess(state, action) {
            state.loading = false
            state.error = ''
            state.user = action.payload
        },
        createUserFailed(state){
            state.loading = false
            state.user = null
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(createUser.)
    }
})
export const authReducer = authSlice.reducer;
export const {createUserSuccess, createUserFailed, createUserLoading,
autoLoginPending, autoLoginFulfilled, autoLoginRejected} = authSlice.actions