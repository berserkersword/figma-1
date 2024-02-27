import React from 'react'

const OutLineButton = ({ text, url }: { text: string, url: string }) => {
    return (
        <a href={url} className='py-4 px-8  text-[#458FF6] rounded-full text-xl font-light border-2 border-[#458FF6] hover:text-[#fff] hover:bg-[#458FF6] transition-all'>
            {text}
        </a>
    )
}

export default OutLineButton