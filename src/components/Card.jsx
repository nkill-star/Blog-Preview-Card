import React from 'react'
import blog_img from '../assets/images/illustration-article.svg'
import profile from '../assets/images/image-avatar.webp'

const Card = () => {
  return (
    <div className='flex flex-col p-6 rounded-2xl border border-black bg-white max-w-xs ' style={{ boxShadow: '7px 6px 1px rgba(0,0,0)' }} >
        <img className='rounded-lg mb-4' src={blog_img} alt="" /> 
        <p className='mb-3 font-figtree bg-yellow-300 w-max py-1 px-2 rounded-sm text-xs font-bold'>Learning</p>
        <p className='text-xs font-figtree mb-4'>Published 21 Dec 2023</p>
        <p className='font-figtree font-bold text-lg mb-3 hover:text-yellow-300 cursor-pointer'>HTML & CSS foundations</p>
        <p className='text-xs text-gray-400 font-bold font-figtree mb-6'>These languages are the backbone of every website, defining structure,content, and presentation.</p>
        <div className='flex items-center gap-3'>
            <img className='w-8' src={profile} alt="" />
            <p className='font-figtree font-bold text-xs'>Greg Hooper</p>
        </div>
    </div>
  )
}

export default Card
