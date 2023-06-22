import React from 'react'

const Appbar = () => {
  return (
    <nav className=''>
      <div className=' text-center font-Poppins p-2 bg-blue-700 text-md text-white'>
        Creativity is always on our menu.
      </div>
      <div className='flex justify-between max-w-full px-5 py-2 m-1 mx-auto'>
        <div className='flex'>
          <div>
            <a href='/home'>
              <span className='text-4xl font-bold text-blue-500'>Quick</span>
              <span className=' text-4xl font-thin text-stone-500'>Start</span>
            </a>
          </div>
          <div className='ml-8'>
            <ul className='flex space-x-4'>
              <li className='page'>
                <a href='/fastfood' className='font-Poppins'>
                  Fast Food
                </a>
              </li>
              <li className='page'>
                <a href='/rice' className=' font-Poppins'>
                  Rice
                </a>
              </li>
              <li className='page'>
                <a href='drinks' className=' font-Poppins page'>
                  Drinks
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className='flex space-x-4'>
            <li className='anger'>
              <a href='/sign-in' className='font-Poppins'>
                Sign in
              </a>
            </li>
            <li className='anger'>
              <a href='/registration' className=' font-Poppins'>
                Create an account
              </a>
            </li>
            <li className='px-4 py-2.5'>
              <a href='/search' className=' font-Poppins'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-blue-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </a>
            </li>
            <li className='px-4 py-2.5'>
              <a href='/shopping-cart'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6  text-blue-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className=' max-w-8xl bg-blue-500 mx-auto border-blue-100' />
    </nav>
  )
}

export default Appbar
