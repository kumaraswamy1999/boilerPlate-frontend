import { Formik,Form, Field } from "formik";
import { Link } from "react-router-dom";
import type { registerUser } from "../utility/util";

export default function RegisterUser(){
    const roles:string[] = ['User','Admin'];
    const initialValues:registerUser = {
        email:'',
        dob:'',
        password:'',
        role:''
    }

    const handleRegister = (values:registerUser)=>{
        console.log(values)
    }

    return (
       <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Formik initialValues={initialValues} onSubmit={handleRegister}>
            <Form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                    <Field type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">dob</label>
                    <Field type="date" name='dob' id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                    <Field type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              
                {
                    roles.map((role:string,index:number) => (
                    <span key={index} className="flex items-center mb-4">
                        <Field name='role'  type="radio" value={role} className="w-4 h-4 ms-5 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            {role}
                        </label>
                    </span>
                    ))
                }
                <div className="flex items-start mb-5">
                    <Link to= '/login' className="ms-2 text-sm font-medium text-sky-600 dark:text-gray-300">existing User! Please Login</Link>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </Form>
            </Formik>
        </div>
       </>
    )
}