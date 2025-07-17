import { Formik,Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import type { loginUser } from "../utility/util";
import { useDispatch } from "react-redux";
import { login } from "../store/userStore";

export default function LoginUser(){
    const initialValues:loginUser = {
        email:'',
        password:''
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (_values:loginUser)=>{
        navigate('/');
        dispatch(login())
    }
    return(
         <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Formik initialValues={initialValues} onSubmit={handleLogin}>
                <Form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                        <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                        <Field type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-5">
                        <Link to= '/register' className="ms-2 text-sm font-medium text-sky-600 dark:text-gray-300">New User! Please Register</Link>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </Form>
            </Formik>
        </div>
       </>
    )
}