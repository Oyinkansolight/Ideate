import React from 'react';
import { BasicButton } from '../Buttons';
import { StaticImage } from "gatsby-plugin-image";

const HomeBanner = () => (
    <div className='h-[500px] w-full flex flex-row justify-between px-20'>
        <div className='flex flex-col my-auto gap-y-6'>
            <div className='text-5xl gap-y-2 text-chathams flex flex-col font-semibold'>
                <div>Bringing Innovation</div>
                <div>
                Through Marketing,
                </div> 
                
                <div>
                Commerce and Advertising
                </div>
                </div>

            <div>
                <BasicButton text='Apply For Funding' />
            </div>

            <div className='flex flex-row gap-x-36 mt-16'>
                <div className='flex flex-col'>
                    <div className='text-center text-chathams font-semibold text-3xl'>80+</div>
                    <div className='text-sm font-light'>Startups Funded</div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-center text-chathams font-semibold text-3xl'>10</div>
                    <div className='text-sm font-light'>Years Of Combined Experience</div>
                </div>
            </div>
        </div>

        <div>
            <StaticImage src="../../images/banner1.jpg" alt="Home Banner 1" />
        </div>
    </div>
)

export default HomeBanner