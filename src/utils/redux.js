export const dispatchThunk = async (dispatch, thunkAction, successCallback, errorCallback) => {
    try {
        const result = await dispatch(thunkAction).unwrap()
        if(result && successCallback)  successCallback(result)
    } catch (error) {
        if (errorCallback)  errorCallback(error);
        else{
            
        }
        
    }
}