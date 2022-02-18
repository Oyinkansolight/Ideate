import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

interface Props {
    title_one: string;
    title_two: string;
    description: string;
}

const Card_Two = (props: Props) => (
    <div className='h-[500px] flex flex-row px-80 gap-x-10'>
        <div className='flex flex-col mt-6'>
            <div className='font-semibold text-4xl text-chathams'>{props.title_one}</div>
            <div className='font-semibold text-4xl text-chathams'>{props.title_two}</div>

            <div className='w-36 h-px bg-chathams my-6'></div>

            <div className='mt-4 text-gray-500 w-80 text-justify'>
                {props.description}
            </div>
        </div>

        <div>
            <StaticImage src='../../images/card_two.png' alt={"Card Image 2"} />
        </div>
    </div>
)

export default Card_Two