import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import userStore from "../store/userStore";


export default function Home(){
    return(     
        <>
        <Provider store={userStore}>
            <Header/>
            <Outlet/>
        </Provider>
        </>
    )
}