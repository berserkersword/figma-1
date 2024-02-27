import React from 'react'
import img from '@/public/person.jpg'
import Image from 'next/image'

const BigCard = () => {
    return (
        <div className='flex p-4 justify-center items-center '>
            <div className="wrapper container bg-gradient-to-b from-[#67C3F3] to-[#5A98F2] rounded-[2.5rem] p-20 big-card shadow-xl">
                <div className='flex flex-col items-center'>
                    <h1 className='text-white text-4xl font-semibold text-center my-6'>
                        What our customers are saying
                    </h1>
                    <hr className='w-[5rem] h-[2px] bg-white mt-6 mb-8 ' />
                </div>
                {/*                 says                     */}
                <div className='flex lg:flex-row md:flex-row sm:flex-col p-4'>
                    {/*                 profile                  */}
                    <div className='flex px-6 gap-4 lg:w-1/2 md:w-1/2  mb-6'>
                        {/*                     Main image               */}
                        <div>
                            <Image src={img} className="rounded-[50%] border-[4px] border-[#fff]" alt='person' width={200} />
                        </div>
                        {/*                     person name                  */}
                        <div className='flex flex-col  justify-center'>
                            <h1 className='text-white font-semibold text-2xl mb-4'>
                                Samandar kuspurush
                            </h1>
                            <h2 className='text-white font-extralight text-xl'>
                                Founder Circle
                            </h2>
                        </div>
                    </div>
                    {/*                 Description                  */}
                    <div className='lg:w-1/2 md:w-1/2  flex justify-center items-center'>
                        <h1 className='text-white font-extralight text-2xl'>
                            “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BigCard