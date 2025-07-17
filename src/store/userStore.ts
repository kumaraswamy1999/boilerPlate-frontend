import { configureStore, createSlice } from "@reduxjs/toolkit"


interface loginState{
    loggedIn:boolean
}


const initialState:loginState = {
    loggedIn:false
}
const userSlice = createSlice({
    name:'loggedin',
    initialState,
    reducers:{
        login(state:loginState){
            state.loggedIn = true
        },
        logOut(state:loginState){
            state.loggedIn = false
        }
    }
});

const userStore = configureStore({
    reducer:userSlice.reducer
})

export const {login,logOut} = userSlice.actions;
export default userStore;