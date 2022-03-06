import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

interface Props {
    title_one: string;
    title_two: string;
    description: string;
}

const Card_Two = (props: Props) => (
    // used to have a 500px height below for some reason but it's not needed anymore I think?
    <div className=' flex flex-col md:flex-row px-20 md:px-80 gap-x-24'>
        <div className='flex flex-col mt-6'>
            <div className='font-semibold text-4xl text-chathams text-center md:text-left'>{props.title_one}</div>
            <div className='font-semibold text-4xl text-chathams text-center md:text-left'>{props.title_two}</div>

            <div className='w-36 h-px bg-chathams my-6 mx-auto md:mx-0'></div>

            <div className='mt-4 text-gray-500 w-80 md:text-justify text-center'>
                {props.description}
            </div>
        </div>

        <div className='mt-10 md:mt-0'>
            <StaticImage src='../../images/card_two.png' alt={"Card Image 2"} height={400} />
        </div>
    </div>
)

export default Card_Two