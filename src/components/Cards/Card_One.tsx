import React from 'react'

interface Props {
    logo: any;
    title: string;
    description: string;
}

const Card_One = (props: Props) => (
    <div className='static bg-chathams h-[270px]  w-[22rem]'>
        <span className='bg-[#F6F8F9] h-[260px] w-[22rem] z-10 absolute shadow-md'>
            <div className='flex flex-col px-6 py-6 md:py-10'>
                <div className='mb-4'>{props.logo}</div>

                <div className='font-semibold text-lg text-chathams'>{props.title}</div>

                <div className='font-light mt-4'>{props.description}</div>
            </div>
        </span>
    </div>
)

export default Card_One