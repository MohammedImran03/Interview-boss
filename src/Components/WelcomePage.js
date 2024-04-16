import React,{ useState }  from 'react'
import { FaRegPlayCircle, FaEye, FaEyeSlash  } from "react-icons/fa";
// import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const WelcomePage = () => {

    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='bg-gradient-to-r from-orange-400 from-10% via-amber-500 via-30% to-yellow-500 to-90%  flex w-full justify-center min-h-screen'>
        <div className='my-4 mx-2 rounded-3xl shadow-xl bg-white w-full  px-6 py-3'>
    <div className="flex justify-between items-center ">
    <div className=" text-xl font-semibold text-slate-700">WelcomePage</div>
    <Link to="/home">
    <div className="flex items-center text-md px-2 py-0.5 rounded-lg cursor-pointer text-white bg-slate-700" ><div className='mr-1'><FaRegPlayCircle /></div><div>Start Interview</div></div>
    </Link>
</div>
<div className='w-full flex justify-center items-center h-full'>
<div className='bg-slate-200 rounded-md px-2 py-2' >
    <div className='text-lg font-medium'>Sign Up</div>
  
    <div className="max-w-md mx-auto my-1">
    <div className="mb-2">
    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
    <input type="email" id="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
      <div className="mb-2">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 flex items-center  hover:bg-gray-300 rounded-r focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <div className="my-2 flex justify-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
      Log In
    </button>
  </div>

    </div>

</div>



</div>
</div>
</div>
  )
}

export default WelcomePage;