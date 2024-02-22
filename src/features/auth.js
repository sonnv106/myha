import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const login = createAsyncThunk('login', async (params, {fulfillWithValue, rejectWithValue}) => {
    try {
        return fulfillWithValue()
    } catch (error) {
        return rejectWithValue(error)
    } 
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        token: '',
        error: ''
    },
    reducers: {
        logout: (state, action)=>{
            state.token = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action)=>{
            state.loading = false,
            state.token = action.payload,
            state.error = ''
        })
        builder.addCase(login.rejected, (state, action)=>{
            state.loading = false,
            state.token = '',
            state.error = action.payload
        })
        
    }
})
export const authReducer = authSlice.reducer;