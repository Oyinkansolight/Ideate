import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

interface Props {
    title: string;
    author: string;
    date: string;
    image?: any;
}

const Card_Four = (props: Props) => (
    <div className='grid grid-flow-row grid-rows-3 bg-gray-100 md:h-[320px] md:w-[440px]'>
        <div className='row-span-2 md:h-[200px] overflow-hidden bg-contain'>
            <div className='h-fit'>
            {props.image}
            </div>
        </div>

        <div className='px-4 py-2 flex flex-col md:gap-y-4'>
            <div className='flex flex-row gap-x-4'>
                <div className='my-auto'>
                    {props.author}
                </div>

                <div className='h-6 my-auto w-px bg-chathams'></div>

                <div className='my-auto'>
                    {props.date}
                </div>
            </div>

            <div className="w-2/3 font-semibold text-chathams capitalize">
                {props.title}
            </div>
        </div>
    </div>
)

export default Card_Four