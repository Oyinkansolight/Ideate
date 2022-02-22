import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import BasicButton from './Buttons/Basic'

const Header = () => (
    <div className='w-full px-20 flex flex-row justify-between h-24'>
        <div className='my-auto'>
            <StaticImage src='../images/ideate.png' alt='Text Logo' />
        </div>

        <div className='flex flex-row gap-x-16 my-auto'>
            <div className='hover:underline decoration-chathams underline-offset-[1rem] cursor-pointer'>
                <Link to="/">Home</Link>
            </div>
            <div className='hover:underline decoration-chathams underline-offset-[1rem] cursor-pointer'>Startups</div>
            <div className='hover:underline decoration-chathams underline-offset-[1rem] cursor-pointer'>
                <Link to='/portfolio'>Portfolio</Link>
            </div>
            <div className='hover:underline decoration-chathams underline-offset-[1rem] cursor-pointer'>
                <Link to="/about">About Us</Link>
            </div>
        </div>

        <div className='my-auto flex flex-row gap-x-6'>
            <BasicButton text="Apply For Funding" />
            <BasicButton text="Submit Pitch Deck" type='light' />
        </div>
    </div>
)


export default Header;