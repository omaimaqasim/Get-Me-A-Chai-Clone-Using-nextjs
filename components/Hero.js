import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <section>

      <div className=' flex items-center justify-center gap-3'>
        <h1 className='font-bold text-5xl'>Get Me A Chai</h1>
        <img src="/tea.gif" alt="Chai" className='w-20 h-20' />
      </div>

      <p>A Crowdfunding platform for creaters. Get funded by your fans and followers. Start Now!</p>

      <div>


        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5">
          <Link href="/login">Start Here</Link>
        </button>

        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5">
          <Link href="/about">Read More</Link>

        </button>
      </div>
    </section>
  )
}

export default Hero
