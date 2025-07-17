import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import userRoutes from "./userRoutes";
import adminRoutes from "./adminRoutes";
import productRoutes from "./productRoutes";
import RegisterUser from "../components/RegisterUser";
import LoginUser from "../components/LoginUser";

const appRoutes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            ...userRoutes,
            ...adminRoutes,
            ...productRoutes,
    {
        path:'login',
        element:<LoginUser/>
    },
    {
        path:'register',
        element:<RegisterUser/>
    }
        ]
    }
]);

export default appRoutes;