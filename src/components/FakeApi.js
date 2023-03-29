import React, { useEffect, useState } from 'react';
import axios from 'axios';






function FakeApi() {
  const [data, setdata] = useState([]);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setdata(response.data);

      } catch (error) {
        console.error(error);
      }

    }
    fetchData();
  }, []);

  console.log(data, "datadata")

  return (
    <>


    <div className='flex flex-wrap justify-evenly'>
      {data?.map((item, index) => {
        return (
          <div key={item?.id} className='border-2 rounded-lg m-4 w-[350px]'>
            <div className='w-3/4 mx-auto'>
            <img className='w-full h-[350px] mr-[20px] m-5' src={item?.image} />
            </div>
            <p className='text-3xl text-center'> {item?.category}</p>
            <p className='text-2xl text-center'>{item?.price}</p>
            <p className='text-2xl text-center'>{item?.Rating}</p>
          </div>
        );
      })}
    </div>

    </>
  )
}


export default FakeApi
