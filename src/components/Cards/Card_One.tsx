import React from 'react'

interface Props {
    logo: any;
    title: string;
    description: string;
}

const Card_One = (props: Props) => (
    <div className='static bg-chathams h-[360px] w-[390px]'>
        <span className='bg-gray-200 h-[350px] w-[400px] z-10 absolute shadow-md'>
            <div className='flex flex-col px-6 py-24'>
                <div>{props.logo}</div>

                <div className='font-semibold text-lg text-chathams'>{props.title}</div>

                <div className='font-light mt-4'>{props.description}</div>
            </div>
        </span>
    </div>
)

export default Card_One