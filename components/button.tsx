import React from 'react'

const Button = ({ text }: { text: string }) => {
    return (
        <button className='lg:py-4 lg:px-8 sm:py-2 sm:px-4  text-white rounded-full lg:text-xl  font-light main-button'>
            {text}
        </button>
    )
}

export default Button