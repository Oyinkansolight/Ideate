import React from 'react'
import Faq from '../components/Faq'
import Layout from '../components/Layout'

const FaqPage = () => {
  return (
    <Layout>
        <div className='mt-10 mb-40 flex w-full flex-col'>
				<div className='text-chathams mx-auto text-4xl capitalize'>
					Frequently asked questions
				</div>

				<div className='mx-auto flex w-full justify-center'>
					<Faq />
				</div>
			</div>
    </Layout>
  )
}

export default FaqPage