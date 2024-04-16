import React,{useState} from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdOutlineWorkOutline,MdOutlineNotifications,MdArrowDropDown  } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaFacebookSquare,FaInstagramSquare,FaCheck } from "react-icons/fa";
import { FaSquareXTwitter,FaCircleUser } from "react-icons/fa6";
import { IoSearch  } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { SiNike } from "react-icons/si";
import { FiUpload } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };

    const [dropdownbox,setDropdownox] = useState(false);
   const handleDropdownBox=()=>{
    setDropdownox(!dropdownbox);
   }

   const [selectedQuestion,setSelectedQuestion]=useState('');
const handleQuestions=(item)=>{
    console.log(item);
setSelectedQuestion(item);
}

  return (
    <div className="relative">
    <button className="block md:hidden bg-transparent text-2xl text-gray-900 fixed top-0 right-0 p-2 z-50" onClick={toggleSidebar}>
      {isSidebarOpen ? ' ' : <HiOutlineMenuAlt3 />}
    </button>
  
    {/* Sidebar */}
    <div className={`bg-gray-200 text-white fixed top-0 left-0 w-full md:w-64 ${isSidebarOpen ? 'h-full transition-all duration-500 transform translate-x-0 w-64' : 'h-full transform -translate-x-full duration-500 md:translate-x-0'} z-40`}>
  <div className="p-5 w-full flex flex-col justify-center items-center">
    <div className="bg-green-800 font-semibold text-md  px-2 py-1 rounded-lg  flex justify-center mt-10 cursor-pointer shadow-md"> 
      Preview CV
    </div>
    <div className="mt-8">
      <div  onClick={() => handleItemClick('Jobs')} className={`cursor-pointer my-1 flex justify-start items-center text-black text-lg font-semibold  px-2 py-0.5 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-300 focus:bg-gray-300 hover:text-green-800 ${selectedItem === 'Jobs' ? 'bg-gray-300 text-green-800' : ''}`}><div className='ml-1 mr-4'><MdOutlineWorkOutline className='text-green-800'/></div><div className={`mr-8 ${selectedItem === 'Jobs' ? 'text-green-800' : ''}`}>Jobs</div></div>
      <div  onClick={() => handleItemClick('Preferences')} className={`cursor-pointer my-1 flex justify-start items-center text-black text-lg font-semibold  px-2 py-0.5 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-300 focus:bg-gray-300 hover:text-green-800 ${selectedItem === 'Preferences' ? 'bg-gray-300 text-green-800' : ''}`}><div className='ml-1 mr-4'><HiOutlineAdjustmentsHorizontal className='text-green-800'/></div><div className={`mr-8 ${selectedItem === 'Preferences' ? 'text-green-800' : ''}`}>Preferences</div></div>
      <div  onClick={() => handleItemClick('LogOut')} className={`cursor-pointer my-1 flex justify-start items-center text-black text-lg font-semibold  px-2 py-0.5 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-300 focus:bg-gray-300 hover:text-green-800 ${selectedItem === 'LogOut' ? 'bg-gray-300 text-green-800' : ''}`}><div className='ml-1 mr-4'><RiLogoutBoxLine className='text-green-800'/></div><div className={`mr-8 ${selectedItem === 'LogOut' ? 'text-green-800' : ''}`}>Log Out</div></div>
    </div>
  </div>
  <div className='fixed bottom-4 w-full'>
  <div className='flex justify-center flex-col'>
    <div className='flex justify-center items-center text-black font-semibold text-sm'>Top 100 jobs</div>
  <div className='flex justify-center items-center text-black mt-3'>
    <div className='mx-2 text-xl'><FaFacebookSquare /></div>
    <div className='mx-2 text-xl'><FaInstagramSquare /></div>
    <div className='mx-2 text-xl'><FaSquareXTwitter /></div>
     </div>
  </div>
</div>

  <button className={`absolute top-0  right-0 md:hidden text-2xl bg-transparent text-gray-900 p-2 ${!isSidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
    <CgClose />
  </button>
</div>

  
    {/* Main Content */}
    <div className={`overflow-x-hidden ml-0 md:ml-64 transition-all duration-300 ${isSidebarOpen ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className="px-2 py-1  w-full flex justify-between flex-col md:flex-row">
        <div className='flex flex-col md:flex-row whitespace-nowrap'>
            <div className='my-1 md:ml-0 md:mr-6 text-md font-semibold cursor-pointer'>How it works</div>
            <div className='my-1 md:mx-6 text-md font-semibold cursor-pointer'>Tips & News</div>
            <div className='my-1 md:mx-6 text-md font-semibold cursor-pointer'>Contact</div>
        </div>
        
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='flex items-center flex-row'>
        <div class="relative w-72 shadow-lg rounded-full">
  <input type="text" placeholder="Search..." class="w-full px-4 py-2 rounded-full  bg-white border-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white" />
  <button class="absolute inset-y-0 right-0 p-3 flex items-center rounded-full bg-green-700 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
  <IoSearch />
  </button>
</div>

<div className='relative ml-4 text-xl'>
  <MdOutlineNotifications />
  <div className="absolute top-0 right-0 w-1 h-1 bg-red-500 rounded-full"></div>
</div>
</div>

<div className='my-2 md:my-0 flex items-center flex-row justify-center rounded-full shadow-xl md:ml-10 py-1 relative'>
  <div className='text-3xl'><FaCircleUser /></div>
  <div className='ml-1 md:ml-4 text-md font-semibold whitespace-nowrap text-sm md:text-md'>User Name</div>
  <div class="relative inline-block text-left">
  <div className='flex justify-center items-center'>

    <button onClick={handleDropdownBox} >
   <MdArrowDropDown className='text-xl'/>
    </button>
  </div>


  {dropdownbox && <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
  
      <a  class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a  class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
        <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
    </div>
  </div>}

</div>
</div>
        </div>

      </div>
      <div className="flex justify-start items-center w-full h-full ml-1 mt-2">
        <div className="text-center mx-0.5 text-xs font-semibold text-gray-500">Jobs</div>
        <div className="text-center mx-0.5 text-xs font-semibold text-gray-500"><IoIosArrowForward /></div>
        <div className="text-center mx-0.5 text-xs font-semibold text-black">Job Type</div>
      </div>
      <div className='flex items-center justify-start my-3'>
        <div className='md:text-2xl text:xl font-bold'>Creative Designer</div>
        <div className='md:ml-16 ml-4 text-green-600 font-semibold underline'>View Job details</div>
      </div>
      <div className='flex md:items-center ml-1 flex-col md:flex-row text-sm md:text-md'>

        <div className='flex items-center'><div className="rounded-full border border-gray-500 p-0.5">
  <SiNike className='text-md' />
</div>
 <div className='ml-1 font-semibold'>Company Logo</div>
 </div>
 <div className='flex flex-row items-center mt-2 md:mt-0'>
 <div className='flex items-center flex-row  md:mx-6 ml-1 text-sm md:text-md font-semibold'>
    <div className='text-gray-500 '>validity Date : </div>
    <div className=''>20:04:2024</div>
 </div>
 <div className='mx-2 md:mx-6 text-sm md:text-md text-gray-500 font-semibold'>Full Time</div>
 </div>
      </div>
   

      <div className='flex justify-center md:justify-start items-center w-full'>
      <div className='flex flex-col md:justify-start justify-center md:flex-row md:items-center ml-1 my-2 py-3 px-4 rounded-md border border-gray-200 shadow-slate-200 shadow-lg'>
      <div onClick={() => handleQuestions('Videointerview')} className={`my-1 md:my-0 text-sm font-bold mx-2 cursor-pointer text-gray-400 ${selectedQuestion === 'Videointerview'  ? 'text-green-700' : ''}`}>1. Video interview</div>
<div onClick={() => handleQuestions('QuestionforEmployee')} className={`my-1 md:my-0 text-sm font-bold mx-2 cursor-pointer text-gray-400 ${selectedQuestion === 'QuestionforEmployee'  ? 'text-green-700' : ''}`}>2. Question for Employee</div>
<div onClick={() => handleQuestions('QuestionfromEmployer')} className={`my-1 md:my-0 text-sm font-bold mx-2 cursor-pointer text-gray-400 ${selectedQuestion === 'QuestionfromEmployer' ? 'text-green-700' : ''}`}>3. Question from Employer</div>
<div onClick={() => handleQuestions('TextfromEmployer')} className={`my-1 md:my-0 text-sm font-bold mx-2 cursor-pointer text-gray-400 ${selectedQuestion === 'TextfromEmployer'  ? 'text-green-700' : ''}`}>4. Text from Employer</div>
<div onClick={() => handleQuestions('JobOffer')} className={`my-1 md:my-0 text-sm font-bold mx-2 cursor-pointer text-gray-400 ${selectedQuestion === 'JobOffer'  ? 'text-green-700' : ''}`}>5. Job Offer</div>
        </div>
        </div>

        <div className='flex flex-col items-center md:items-start md:flex-row mt-6 ml-1'>
  <div className='flex flex-col justify-center items-center bg-slate-200 rounded-md w-36 h-32 md:w-60 md:h-60 cursor-pointer'>
    <div className='text-lg md:text-4xl font-bold'><FiUpload /></div>
    <div className='text-xs md:text-lg font-semibold'>Upload InterView Video</div>
  </div>
  <div className=' ml-0 mt-3 md:ml-14  md:mt-0 flex flex-col justify-start items-start '>
  <div className='mb-2'>
    <div className='text-lg font-bold cursor-pointer'>Question 1</div>
    <div className='text-sm font-semibold'>Question 1 Content Here ?</div>
  </div>
  <div className='mb-2'>
    <div className='text-lg font-bold cursor-pointer'>Question 2</div>
    <div className='text-sm font-bold'>Question 2 Content Here ?</div>
  </div>
  <div className='mb-2'>
    <div className='text-lg font-bold cursor-pointer'>Question 3</div>
    <div className='text-sm font-semibold'>Question 3 Content Here ?</div>
  </div>
</div>
</div>

<div className='mt-2 md:mt-8 ml-1 flex justify-start mb-4'>
  <div className='cursor-pointer whitespace-nowrap px-1 py-2 bg-green-800 text-white rounded-md text-sm font-semibold'>Submit Video Interview</div>
</div>


  <div className='fixed right-6 bottom-6'>
  <div className='relative'>
    <div className='bg-green-800 p-2 rounded-full'>
      <AiFillMessage className='text-white text-3xl md:text-4xl'/>
    </div>
  </div>
  <div className='absolute top-0 right-0 h-3 w-3 bg-red-600 rounded-full'></div>
</div>


    </div>
    
  </div>

  

  )
}

export default Home;