import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { onGoogleButtonPress } from '../screens/login/LoginManager';
import { autoLogIn } from '../api';
import auth from '@react-native-firebase/auth'

export const authSelector = state => state.auth

export const createUserWithEmailAndPassword = createAsyncThunk(
    'createUserWithEmailAndPassword', 
    async (params, {fulfillWithValue, rejectWithValue}) => {
    try {
        const response = await auth().createUserWithEmailAndPassword(
            params.email,
            params.password,
        )
        if(response){
            response.user.sendEmailVerification()
        }
        return fulfillWithValue(response)
    } catch (error) {
        return rejectWithValue(error)
    } 
});
export const signInWithEmailAndPassword = createAsyncThunk(
    'signInWithEmailAndPassword', 
    async (params, {fulfillWithValue, rejectWithValue}) => {
    try {
        const response = await auth().signInWithEmailAndPassword(
            params.email,
            params.password,
        )
        return fulfillWithValue(response.user)
    } catch (error) {
        return rejectWithValue(error)
    } 
});


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
        builder.addCase(createUserWithEmailAndPassword.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(createUserWithEmailAndPassword.fulfilled, (state, action)=>{
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(createUserWithEmailAndPassword.rejected, (state, action)=>{
            state.loading = false
            state.user = null
            state.error = action.payload
        })

        builder.addCase(signInWithEmailAndPassword.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(signInWithEmailAndPassword.fulfilled, (state, action)=>{
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(signInWithEmailAndPassword.rejected, (state, action)=>{
            state.loading = false
            state.user = null
            state.error = action.payload
        })
    }
})
export const authReducer = authSlice.reducer;
export const {createUserSuccess, createUserFailed, createUserLoading,
autoLoginPending, autoLoginFulfilled, autoLoginRejected} = authSlice.actions