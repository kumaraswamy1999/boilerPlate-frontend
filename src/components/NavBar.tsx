import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <NavLink to='/'
                             className={({isActive})=>isActive ? 'text-blue-600' : 'text-gray-900'}
                             >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='products' 
                             className={({isActive})=>isActive ? 'text-blue-600' : 'text-gray-900'}
                            >Products</NavLink>
                        </li>
                        {/* <li>
                            <Link to='b' className="text-gray-900 dark:text-white hover:underline">Team</Link>
                        </li>
                        <li>
                            <Link to='c' className="text-gray-900 dark:text-white hover:underline">Features</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}