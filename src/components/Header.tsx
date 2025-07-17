import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/userStore";

export default function Header(){
    const routePaths = ['login','register'];
    const path = useLocation().pathname.slice(1);
     const isLoggedIn = useSelector((state:any)=>state.loggedIn);
     const dispatch = useDispatch();

     const handleLogout = ()=>{
        dispatch(logOut())
     }

    return(
        <>
        <nav className="bg-sky-950 border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    {
                        isLoggedIn ?
                         <a onClick={handleLogout} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Logout</a>
                          : <Link to={path!=='login' ? 'login' : '/'} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                            {path!=='login' ? 'Login' : 'back'}
                            </Link>
                    }
                </div>
            </div>
        </nav>
        {!routePaths.includes(path) && <NavBar/>}
        </>
    )
}