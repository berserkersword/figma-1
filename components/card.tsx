'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tilt } from 'react-tilt';
import Tillt from 'react-parallax-tilt'


const Card = ({ img, title, text }: { img: StaticImageData, title: string, text: string }) => {
    return (
        <Tillt tiltReverse={true}
            className='flex flex-col rounded-[1rem] border backdrop-blur-xl shadow-xl  '>

            <div className='w-full flex justify-center items-center my-6'>
                <Image
                    src={img}
                    alt={`${img}`}
                />
            </div>

            <div className='pl-8 pb-3'>

                <h1 className='font-extrabold text-3xl my-4'>
                    {title}
                </h1>
                <h2 className='font-extralight text-xl my-4'>
                    {text}
                </h2>

            </div>
        </Tillt>
    )
}

export default Card