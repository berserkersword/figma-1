import React from 'react'
import Image, { StaticImageData } from 'next/image'
import OutLineButton from './outLineButton'

const Section = ({ img, title, text, url, btnText, reverse }: { img: StaticImageData, title: string, text: string, url: string, btnText: string, reverse: boolean }) => {
    return (
        <div className='flex justify-center mt-4'>
            <div className={`wrapper container flex justify-center ${reverse ? 'flex-row-reverse' : ''}`}>

                <div className={`w-1/2 `}>
                    <Image src={img} alt={`${img}`} width={600} height={600} />
                </div>

                <div className={`w-1/2 p-4 flex flex-col justify-center`}>
                    <h1 className='text-gray-900 text-4xl font-bold my-4'>
                        {title}
                    </h1>
                    <hr className='w-[5rem] h-[2px] my-6 bg-gray-800' />
                    <h2 className='font-extralight text-xl'>
                        {text}
                    </h2>
                    <div className='mt-10'>
                        <OutLineButton text={btnText} url={url} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section