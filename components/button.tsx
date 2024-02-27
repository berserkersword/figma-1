import React from 'react'

const Button = ({ text }: { text: string }) => {
    return (
        <button className='py-4 px-8  text-white rounded-full text-xl font-light main-button'>
            {text}
        </button>
    )
}

export default Button