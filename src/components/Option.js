import React,{useContext} from 'react';
import { userContext } from '../App';


function Option() {
  const setCommerce = useContext(userContext);
    const {dispatch} = setCommerce;
  
  return (
    <div className='bg-black h-[70%] w-[70%] relative left-[-50%]  border  rounded-lg  focus:ring-blue-500 focus:border-blue-500' >
        <div><i class="fa-solid fa-xmark text-slate-50 ml-[80%] text-3xl" onClick={() => dispatch({ type: 'SidebarClose' })}></i></div>
     <h6 className='text-slate-50 text-xl mb-2'>Home </h6>
     <h6 className='text-slate-50 text-xl mb-2'>Fashion </h6>
     <h6 className='text-slate-50 text-xl mb-2'>Electronic </h6>
     <h6 className='text-slate-50 text-xl mb-2'>Jewelleˀry</h6>
    </div>
  )
}

export default Option
