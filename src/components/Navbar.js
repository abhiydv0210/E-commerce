import React,{useContext} from 'react';
import Dropmenu from './Dropmenu';
import { userContext } from '../App';
import Option from './Option';

import img from '../Assests/png3.jpg';
import FakeApi from './FakeApi';
//import imsg from "../Assests/png1.jpg"

function Navbar() {
    const setCommerce = useContext(userContext);
    const {dispatch} = setCommerce
  
    
    return (
        <>
        <div className='bg-cover ' style={{backgroundImage:`url(${img}) `}}>




            
            
            <header class="text-slate-50 body-font ">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <nav class="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center bg-black h-20 w-[100%] sm:w-[90%] md:w-[50%] lg:w-[60%]   border  rounded-lg  focus:ring-blue-500 focus:border-blue-500">
                        <a class="mr-5 hover:text-gray-900">Best Seller</a>
                        <a class="mr-5 hover:text-gray-900">Gift Ideas</a>
                        <a class="mr-5 hover:text-gray-900">New Releases</a>
                        <a class="mr-5 hover:text-gray-900">Today's deals</a>
                        <a class="mr-5 hover:text-gray-900">Customer Service</a>
                    </nav>

                </div>
            </header>

            <h1 class='text-5xl text-slate-50 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center w-[100%] sm:w-[100%] md:w-[50%] lg:w-[60%]'>Eflyer</h1>

            <header class="text-black body-font ">
                <div class=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
                    <div class='flex '>
                        <a class="mr-5 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                            <span><i class="fa-solid fa-bars text-3xl" onClick={() => dispatch({ type: 'Sidebar' })}></i></span>
                        </a>
                        {setCommerce.Sidebar && <Option/>}


                        
                    </div>
                    <Dropmenu />
                    <div class='flex'>
                        <input
                            type="search"
                            class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-black outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200  dark:placeholder:text-neutral-200 "
                            placeholder="Search this Blog"
                            aria-label="Search"
                            aria-describedby="button-addon1" />
                        <button
                            class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                            type="button"
                            id="button-addon1"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="h-5 w-5">
                                <path
                                    fill-rule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex">

                        <a class="mr-5  hover:text-gray-900   text-slate-50 ml-5 border text-xl  block  bg-slate-800  p-2  border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500"><i class="fa-solid fa-flag-usa mr-2"></i>English</a>
                        <a class="mr-5 text-slate-50 text-2xl  hover:text-gray-900"><i class="fa-solid fa-cart-plus mr-1"></i>CART</a>
                        <a class="mr-5 text-slate-50 text-2xl hover:text-gray-900"><i class="fa-solid fa-user mr-1"></i>CART</a>
                    </div>


                </div>
            </header>
            <div>
                <h1 class='text-6xl text-slate-50 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center'>GET START </h1>
                <h1 class='text-5xl  text-slate-50  container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center'>YOUR FAVOURITE SHOPPING </h1>
            </div>
            <br></br>

            <a class='text-slate-50 mt-[5%] container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center bg-black  h-16 w-[16%]  text-sm  border  rounded-lg  focus:ring-blue-500 focus:border-blue-500"'>BUY NOW</a>
            <br></br>
            
        </div>
        <div>
        <h1 class='text-5xl 	font-weight: 800 container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center'>Men & Women Fashion </h1>
        </div>
        <div>
            <FakeApi/>
        </div>
        </>
    )
}

export default Navbar
