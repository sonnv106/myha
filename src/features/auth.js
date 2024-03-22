import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { onGoogleButtonPress } from '../screens/login/LoginManager';
import { autoLogIn } from '../api';

export const authSelector = state => state.auth

export const loginGoogle = createAsyncThunk(
    'loginGoogle', 
    async (_, {fulfillWithValue, rejectWithValue}) => {
    try {
        const response = await onGoogleButtonPress()
        return fulfillWithValue(response)
    } catch (error) {
        return rejectWithValue(error)
    } 
});

export const autoSignIn = createAsyncThunk(
    'autoSignIn',
    async (_, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await autoLogIn()
            console.log('auto sign in', response)
            return fulfillWithValue(response)
        } catch (error) {
            return rejectWithValue(error)
        } 
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: '',
        user: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loginGoogle.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(loginGoogle.fulfilled, (state, action)=>{
            state.loading = false,
            state.user = action.payload,
            state.error = ''
        })
        builder.addCase(loginGoogle.rejected, (state, action)=>{
            state.loading = false,
            state.error = action.payload
        })
        
        builder.addCase(autoSignIn.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(autoSignIn.fulfilled, (state, action)=>{
            state.loading = false,
            state.user = action.payload,
            state.error = ''
        })
        builder.addCase(autoSignIn.rejected, (state, action)=>{
            state.loading = false,
            state.error = action.payload
        })
    }
})
export const authReducer = authSlice.reducer;